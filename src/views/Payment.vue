<template>
    <div>
        <form action="http://localhost:3000/api/payment" method="POST" ref="mpForm">
        </form>
        <h6>{{amount}}</h6>
    </div>
</template>
<script>
import { mapState} from 'vuex'
import axios from 'axios'
export default {
    name: 'Payment',
    data () {
        return {
            amount: 0
        }
    },
    computed: mapState(['cartProducts']),
    mounted() {

        this.cartProducts.forEach(product => {
            this.amount += product.price;
        });

        let foo = document.createElement('script');    
        foo.setAttribute("src","https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js");
        foo.setAttribute("data-transaction-amount", this.amount);
        foo.setAttribute("data-public-key", "TEST-ad30a504-5dc3-45c9-a713-495e722ef7f8");
        foo.setAttribute("data-elements-color", "#c0392b");
        this.$refs.mpForm.appendChild(foo);
    },
    methods: {
        sub: function(event){
            console.log("entra al submit");
            console.log(event);
            axios
                .post(`${process.env.VUE_APP_BASE_URL}/payment`, {})
                .then(response => {
                this.showLoader = false
                this.ADD_LOGGED_USER(response.data[0])
                event.target.reset()
                this.$router.push(this.$route.query.from || '/')
                })
                .catch(error => {
                this.showLoader = false
                errorToaster('Invalid Credentials', '')
                console.log(error)
                })
        }
    }
}
</script>
<style lang="scss">
    button.mercadopago-button {
        background-color: #c0392b;
    }
</style>
