<template>
  <div class="cart-calculator">
    <h4 class="d-flex justify-content-between align-items-center mb-3">
      <span class="text-muted">Tu carrito</span>
      <span class="badge badge-primary badge-pill">{{cartProducts.length}}</span>
    </h4>
    <ul class="list-group mb-3">
      <hr>
      <li class="list-group-item d-flex justify-content-between">
        <span>Total</span>
        <strong>$ {{totalValue.toFixed(2)}}</strong>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'cartCalculator',
  data () {
    return {
      totalValue: 0.0
    }
  },
  computed: mapState(['cartProducts']),
  methods: {
    calulateTotalPrice () {
      this.totalValue = 0
      this.cartProducts.forEach(product => {
        this.totalValue += parseFloat(product.price)
      })
    }
  },
  created () {
    this.calulateTotalPrice()
  }
}
</script>
<style>
</style>
