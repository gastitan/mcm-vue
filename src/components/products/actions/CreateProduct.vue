<template>
    <div class="createProduct">
        <modal :header="'Create Product'" :isShow="showModal" v-if="showModal" @close="showModal = false">
            <product-form :product="product" v-on:submit-form="productAction"/>
       </modal>
    </div>
</template>
<script>
import axios from 'axios'
import Modal from '../../shared/Modal.vue'
import ProductForm from './ProductForm'
export default {
  name: 'createProduct',
  components: { Modal, ProductForm },
  data () {
    return {
      product: new Object(),
      showModal: false
    }
  },
  methods: {
    showModalForm: function () {
      this.showModal = true
    },

    productAction: function (product) {
      console.log('Creating new Product', product);
      product.description='lala';
      product.price=20;
      axios.post(`${process.env.VUE_APP_BASE_URL}/products/`, product)
      .then(response => {
          console.log('Product Created:', response);
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
<style lang="scss">
</style>
