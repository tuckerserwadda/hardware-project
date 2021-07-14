<template>
<div> <ProductList v-for="product in productList" :key="product.id" :product = "product"/>
<router-link 
:to="{name:'Home', query:{page: page-1 }}" rel="prev"
v-if="page !=1"> Prev Page
</router-link>
<router-link :to="{name: 'Home', query: {page:page+1 }}" rel="next"> next page
</router-link>
</div>
    
</template>
<script>
import ProductList from "./ProductList.vue"
import ProductsServices from "../services/ProductsServices"
import {watchEffect} from "vue"
export default {
    name: "Home",
    props:['page'],
    data(){
        return{
            productList:null
        }
    },
    components:{ ProductList},
    created(){
        // use axios to fetch the data from the jason server
        watchEffect(()=>{
            this.productList = null
        ProductsServices.getProducts( 3, this.page)
        .then(response =>{this.productList= response.data})
        .catch(error =>{console.log(error)})
        })
    }

}
</script>