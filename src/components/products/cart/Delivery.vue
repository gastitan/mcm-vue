<template>
  <div class="cart-products">
    <div class="row mt-5 padding-borders">
      <div class="col-sm-8 padding-top">
        <form id="productCU">
          <!-- <p v-if="errors.length">
                  <b>Please correct the following error(s):</b>
                  <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                  </ul>
          </p>-->
          <div class="form-group">
            <label for="productName">Address 1</label>
            <input
              type="text"
              class="form-control"
              id="productName"
              name="productName"
              aria-describedby="emailHelp"
            >
          </div>
          <div class="form-group">
            <label for="productCategory">Address 2</label>
            <input
              type="text"
              class="form-control"
              id="productCategroyDummy"
              name="productCategroyDummy"
            >
          </div>
          <div class="form-group">
            <label for="productSeller">Country</label>
            <input
              type="text"
              class="form-control"
              id="productSellerDummy"
              name="productSellerDummy"
            >
          </div>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label for="productRating">Zip code</label>
                <input
                  type="number"
                  class="form-control"
                  id="productRating"
                >
              </div>
            </div>
          </div>
          <small
            id="emailHelp"
            class="form-text text-muted"
          >We'll never share your data with anyone else.</small>
          <br>
        </form>
      </div>
      <div class="col-sm-4">
        <cart-calculator ref="cartCalculator"></cart-calculator>
        <ul class="list-group mb-3">
          <router-link to="/products" class="btn btn-primary mt-2 text-white">Continuar comprando</router-link>
          <router-link to="/payment" class="btn btn-success mt-2 text-white">Finalizar compra</router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import CartCalculator from './CartCalculator'
import axios from 'axios'
import { errorToaster } from '../../shared/service/ErrorHandler.js'
export default {
  name: 'Delivery',
  components: { CartCalculator },
  data () {
    return {
      shippingDetail: {
        address1: '',
        address2: '',
        country: '',
        zipCode: '',
        shippingDate: '',
        products: [],
        userId: '',
        totalPrice: ''
      }
    }
  },
  methods: {
    createShippingDetail () {
      console.log("Se paga y se envia a node")
    }
  }
}
</script>

<style lang="scss">
.cart-products {
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

.padding-top {
  padding-top: 30px;
}

.padding-borders {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
