<template>
  <div class="home-component">

    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <img alt="Vue logo" src="../assets/logo.png" width="100px">
          <h3 class="display-5 "><span style="color:#42b983">MCM</span></h3>
          <p class="lead">{{description}}</p>
        </div>
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Productos destacados</li>
        <li class="ml-auto" aria-current="page"><router-link to="/products">Todos</router-link></li>
      </ol>
    </nav>
    <FeaturedProducts></FeaturedProducts>
  </div>
</template>

<script>
// @ is an alias to /src
import FeaturedProducts from '@/components/products/FeaturedProducts.vue'
import StaticInfo from '@/assets/static_info.json'

export default {
  name: 'home',
  components: {
    FeaturedProducts
  },
  data(){
    return {
      description: StaticInfo.storeDescription
    }
  }
}
</script>
<style>
.jumbotron {
  padding: 1rem 0rem;
}
</style>
