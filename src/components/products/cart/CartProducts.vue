<template>
  <div class="cart-products">
    <div class="row mt-5 padding-borders">
      <div class="col padding-top ">
        <div>
          <template v-if="cartProducts.length > 0">
            
                <div class="card mb-3 " v-for="(item, index) in cartProducts" :key="index" style="heigth: 100px; width:100%">
                  <img class="card-img-left" :src="item.productImage" alt="Card image cap" style="max-width:100px; max-height:100px;">
                  <div class="card-body">
                    <h5 class="card-title">{{item.name}}</h5>
                    <h5 class="card-title">$ {{item.price}}</h5>
                  </div>
                  <small class="text-muted footerIcons">
                    <a href="javascript:;;" class="p-2" v-on:click="removeProductCart(item)">
                      <i class="fa fa-trash"></i>
                    </a>
                  </small>
                </div>

          </template>
          <template v-else>
            <div class="error-template container">
              <h1>Oops!</h1>
              <h2>No Products Found</h2>
              <div class="error-details">Your cart is empty</div>
              <div class="error-actions">
                <a class="btn text-white">
                  <span class="glyphicon glyphicon-envelope"></span>
                  <router-link to="/products">Take me to Products Page</router-link>
                </a>
              </div>
            </div>
          </template>
        </div>
      </div>
      
      <div class="col-4 padding-top">
        <label for="isDelivery">Quiero me lo envíen a mi domicilio</label>
        <input type="checkbox" id="isDelivery" v-model="isDelivery">
        <cart-calculator ref="cartCalculator"></cart-calculator>
        <ul class="list-group mb-3">
          <router-link to="/products" class="btn btn-primary mt-2 text-white">Continuar comprando</router-link>
          <router-link v-if="isDelivery" to="/delivery" class="btn btn-danger mt-2 text-white">Datos de envío</router-link>
          <router-link v-else to="/payment" class="btn btn-danger mt-2 text-white">Finalizar compra</router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import CartCalculator from './CartCalculator'
export default {
  name: 'CartProducts',
  components: { CartCalculator },
  data () {
    return {
      isDelivery: false
    }
  },
  computed: mapState(['cartProducts']),
  methods: {
    /* Resetting the store and localstorage after removing product from cart */
    ...mapMutations(['SET_CART_PRODUCTS']),

    removeProductCart (product) {
      const products = JSON.parse(localStorage.getItem('iki-cart'))
      for (let i = 0; i < products.length; i++) {
        if (products[i]._id === product._id) {
          products.splice(i, 1)
        }
      }
      this.SET_CART_PRODUCTS(products)
      localStorage.setItem('iki-cart', JSON.stringify(products))
      this.$refs.cartCalculator.calulateTotalPrice()
    }
  },
  mounted () {}
}
</script>

<style>
.error-template {
  padding: 40px 15px;
  text-align: center;
}

.error-actions {
  margin-top: 15px;
  margin-bottom: 15px;
}

.error-actions .btn {
  margin-right: 10px;
}

.padding-top {
  padding-top: 30px;
}

.padding-borders {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
