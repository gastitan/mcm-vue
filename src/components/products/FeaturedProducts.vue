<template>
  <div class="best-products">
    <div class="row">
      <card-loader :loopCount="4" v-if="loading"/>
      <div class="col-md-3" v-for="(item, index) in FeaturedProducts" :key="index">
        <card-template :item="item"/>
      </div>
    </div>
    <edit-product ref="editProduct"/>
  </div>
</template>

<script>
import axios from 'axios'
import { errorToaster } from '../shared/service/ErrorHandler'
import CardLoader from '../shared/CardLoader'
import CardTemplate from '../shared/CardTemplate'
import EditProduct from './actions/EditProduct'
export default {
  name: 'FeaturedProducts',
  components: { CardLoader, CardTemplate, EditProduct },
  data () {
    return {
      FeaturedProducts: [],
      loading: false
    }
  },
  methods: {
    // manadatory function called from cardTemplate
    editProduct (product) {
      this.$refs.editProduct.setProduct(product)
    },

    getFeaturedProducts () {
      this.loading = true
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/products/?isFeatured=true`)
        .then(response => {
          this.loading = false
          this.FeaturedProducts = response.data
        })
        .catch(error => {
          console.log(error)
          errorToaster(
            'The server encountered an unexpected condition.',
            'Internal Error 500'
          )
        })
    }
  },
  created () {
    this.getFeaturedProducts()
  }
}
</script>

<style>
.featured-products {
  margin-bottom: 10px;
}
</style>
