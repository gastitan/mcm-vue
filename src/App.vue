<template>
  <div id="app" class="container" style="margin:0;">
    <main>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
        <img alt="Vue logo" src="../src/assets/logo.png" width="50px">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">Productos</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Precios</a>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contactanos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">Nosotros</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/cart" class="nav-link">
                <i class="fa fa-shopping-cart mr-1">
                  <span class="ml-1">{{this.cartProducts.length}}</span>
                </i>
              </router-link>
            </li>
            <li class="nav-item dropdown" v-if="isLogged()">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >{{this.loggedUser.firstName}}</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <router-link to="/" class="dropdown-item">Profile</router-link>
                <!-- <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>-->
                <router-link
                  to="/"
                  class="dropdown-item text-danger"
                  @click.native="loc_logout"
                >Logout</router-link>
              </div>
            </li>
            <li class="nav-item" v-if="!isLogged()">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <router-view/>
    </main>



<footer class="col-lg-12 col-md-12 col-sm-12 col-xs-12 footerPage">

		<div class="container">

			<!-- Redes Sociales Footer -->

			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 redesFooter">



				<a href="https://www.facebook.com/elpixelmarketing/" target="_blank"><div class="fFooter"><i class="fa fa-facebook" aria-hidden="true"></i></div></a>		<!-- Facebook -->

				<a href="https://twitter.com/elpixel" target="_blank"><div class="tFooter"><i class="fa fa-twitter" aria-hidden="true"></i></div></a>		<!-- Twitter -->

				<a href="https://www.linkedin.com/company/elpixel-agencia-de-marketing-digital" target="_blank"><div class="lFooter"><i class="fa fa-linkedin" aria-hidden="true"></i></div></a>		<!-- Linkedin -->

                <a href="https://www.behance.net/el-pixel" target="_blank"><div class="lFooter"><i class="fa fa-behance" aria-hidden="true"></i></div></a>		<!-- Behance -->

				<a href="http://blog.elpixel.com" target="_blank"><div class="bFooter"><i class="fa fa-comment" aria-hidden="true"></i></div></a>		<!-- B -->



			</div> <!-- / redes sociales footer -->

		</div>

	</footer>


    <!--<footer class="container-fluid footer text-left mt-3">
      <p class="mr-auto">
        Developed by:
        <strong>Gastitan</strong>
      </p>
      <div style="float:right">
        <a href="mailto:gastone.frias@gmail.com" style="margin-right:10px">
          <i class="fa fa-envelope-open" aria-hidden="true" style="font-size:20px"></i>
        </a>
        <!--a href="https://github.com/ikismail" target="_blank" style="margin-right:10px">
          <i class="fa fa-github" aria-hidden="true" style="font-size:20px"></i>
        </a->
        <a href="https://www.linkedin.com/in/gaston-frias-086a8214/" target="_blank" style="margin-right:10px">
          <i class="fa fa-linkedin" aria-hidden="true" style="font-size:20px"></i>
        </a>
      </div>
    </footer>-->
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import {
  isLoggedIn,
  getLoggedInUser
} from './components/shared/service/authService'
export default {
  data () {
    return {
      cartValue: 0
    }
  },
  computed: mapState(['cartProducts', 'loggedUser']),
  methods: {
    /* Initially loading the cart products from local storage */

    ...mapMutations(['SET_CART_PRODUCTS', 'ADD_LOGGED_USER']),

    getLocalProducts () {
      const products = JSON.parse(localStorage.getItem('iki-cart'))

      if (products) {
        this.SET_CART_PRODUCTS(products)
      }
    },

    isLogged () {
      return isLoggedIn()
    },

    loc_logout () {
      localStorage.removeItem('_auth')
      this.$router.push('/')
      location.reload()
    }
  },
  created () {
    this.getLocalProducts()

    const loggedUser = getLoggedInUser()

    this.ADD_LOGGED_USER(loggedUser)

    console.log(process.env.NODE_ENV)
    console.log(process.env.VUE_APP_BASE_URL)
  }
}
</script>

<style lang="scss">
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 15px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

html {
  position: relative;
  min-height: 100%;
}
.container {
  max-width: 100%;
}
.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  height: 60px; /* Set the fixed height of the footer here */
  background-color: #f5f5f5;
}

footer {
  background-color: #f2f2f2;
  padding: 25px;
}

.footer p,
.footer div {
  display: inline;
  vertical-align: top;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 28px;
}
.footer p {
  font-weight: bold;
}

* a {
  color: #42b983;
}

* .fa {
  font-size: 18px;
}

.buttonGreen-outline {
  width: 100%;
  color: #41b883;
  background-color: transparent;
  border-color: #41b883;
}
.buttonGreen-outline:hover {
  color: #ffffff;
  background-color: #41b883;
  border-color: #41b883;
}

.buttonGreen {
  color: #fff;
  background-color: #41b883;
}

.buttonGreen:hover {
  background-color: #42a97b;
}

.footerPage {
    background: linear-gradient(
 to right, 
 #252525 0%, 
 #252525 50%, 
 #282828 50%, 
 #282828 100%
 );
    padding-top: 40px;
    padding-bottom: 40px;
}

.footerPage .redesFooter {
    width: 70%;
    float: none;
    margin: auto;
}

a {
    text-decoration: none;
}

.footerPage .fFooter {
    height: 67px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 10%;
    transition: all 0.5s ease-in-out;
    font-size: 50px;
    text-align: center;
}

</style>
