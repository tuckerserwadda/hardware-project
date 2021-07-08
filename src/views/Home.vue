<template>
<div> <ProductList v-for="product in productList" :key="product.id" :product = "product"/></div>
    
</template>
<script>
import ProductList from "./ProductList.vue"
import ProductsServices from "../services/ProductsServices"
export default {
    name: "Home",
    data(){
        return{
            productList:null
        }
    },
    components:{ ProductList},
    created(){
        // use axios to fetch the data from the jason server
        ProductsServices.getProducts()
        .then(response =>{this.productList= response.data})
        .catch(error =>{console.log(error)})
    }

}
</script>