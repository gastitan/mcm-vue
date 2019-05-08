<template>
    <div class="edit-product">
       <modal :header="'Editar Producto'" :isShow="showModal" v-if="showModal" @close="closeModal">
            <product-form :product="product" v-on:submit-form="productAction"/>
       </modal>
    </div>
</template>

<script>
import axios from 'axios'
import Modal from '../../shared/Modal'
import ProductForm from './ProductForm'

export default {
  name: 'editProduct',
  components: { Modal, ProductForm },
  data () {
    return {
      product: new Object(),
      originalProduct: new Object(),
      showModal: false
    }
  },
  methods: {
    setProduct (product) {
      this.showModal = true
      this.product = product
      this.originalProduct = Object.assign({}, this.product)
    },

    productAction: function (product) {
      console.log('Updated Product Details', product);
      axios.put(`${process.env.VUE_APP_BASE_URL}/products/${product._id}`, product)
      .then(response => {
          console.log('Product Updated:', response);
          this.showModal = false;
        })
        .catch(error => {
          console.log(error)
        })
      // Update the product to server
    },

    closeModal: function() {
      console.log(this.originalProduct);
      console.log(this.product);
      this.product = Object.assign(this.product, this.originalProduct)
      this.showModal = false;
    }
  }
}
</script>

<style>
</style>
