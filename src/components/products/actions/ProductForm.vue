<template>
    <div class="productForm">
        <form id="productCU" @submit="actionProduct" v-if="!loading">
                <p v-if="errors.length">
                  <b>Please correct the following error(s):</b>
                  <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                  </ul>
                </p>

              <div class="form-group">
                <label for="name">Nombre</label>
                <input type="text" class="form-control" id="name" v-model="product.name" name="name" placeholder="Enter Product Name">
              </div>
              <div class="form-group">
                <label for="productCategory">Categoría</label>
                <select class="form-control"  v-if="product.productCategory !== 'Create New'" id="productCategory" name="productCategory" v-model="product.productCategory">
                    <option
                      v-for="(category, index) in categories" :key="index"
                      v-bind:value="category.productCategory"
                      >{{category.productCategory}}
                    </option>
                </select>
                <input type="password" class="form-control" id="productCategroyDummy"  v-if="product.category === 'Create New'" placeholder="Password" name="productCategroyDummy" v-model="product.productCategroyDummy">
              </div>
              <div class="form-group">
                <label for="productSeller">Fabricante</label>
                <select class="form-control"  v-if="product.productSeller !== 'Create New'" id="productSeller" name="productSeller" v-model="product.productSeller">
                    <option
                      v-for="(seller, index) in sellers" :key="index"
                      v-bind:value="seller.productSeller"
                      >{{seller.productSeller}}
                    </option>
                </select>
                <input type="password" class="form-control" id="productSellerDummy"  v-if="product.productSeller === 'Create New'" placeholder="Password" name="productSellerDummy" v-model="product.productSellerDummy">
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group">
                    <label for="isFeatured">Producto destacado</label>
                    <input type="checkbox" class="form-control" id="isFeatured" name="isFeatured" v-model="product.isFeatured" >
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="productImage">Imagen</label>
                <input type="text" class="form-control" id="productImage" v-model="product.productImage" placeholder="Product Image URL">
              </div>
              <br>
              <button type="submit" class="btn buttonGreen">Guardar</button>
        </form>

        <div class="lds-dual-ring" v-if="loading"></div>
    </div>
</template>
<script>
import axios from 'axios'
import { errorToaster } from '../../shared/service/ErrorHandler.js'
export default {
  name: 'productForm',
  props: ['product'],
  data () {
    return {
      errors: [],
      productCategroyDummy: '',
      productSellerDummy: '',
      categories: [],
      sellers: [],
      loading: false
    }
  },
  methods: {
    actionProduct (event) {
      event.preventDefault()
      this.$emit('submit-form', this.product)
    }
  },
  created () {
    this.loading = true
    axios
      .get(`${process.env.VUE_APP_BASE_URL}/products`)
      .then(response => {
        // getting all products and getting the uniq value for
        // productCategory and returning the productCategory property only
        this.categories = _.uniqBy(
          _.map(response.data, function (object) {
            return _.pick(object, ['productCategory'])
          }),
          'productCategory'
        )
        this.categories.push({ productCategory: 'Create New' })

        // getting all products and getting the uniq value for
        // productSeller and returning the productSeller property only
        this.sellers = _.uniqBy(
          _.map(response.data, function (object) {
            return _.pick(object, ['productSeller'])
          }),
          'productSeller'
        )

        this.sellers.push({ productSeller: 'Create New' })

        this.loading = false
      })
      .catch(error => {
        console.log(error)
        errorToaster('Error while fetching products', '')
      })
  }
}
</script>
<style lang="scss">
.productForm {
  div {
    text-align: start;
  }
  #productCU {
    div {
      text-align: start;
    }
    button {
      text-align: center;
    }
  }
}

.lds-dual-ring {
  display: inline-block;
  width: 64px;
  height: 64px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 46px;
  height: 46px;
  margin: 1px;
  border-radius: 50%;
  border: 5px solid #fff;
  border-color: #41b883 transparent #41b883 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
