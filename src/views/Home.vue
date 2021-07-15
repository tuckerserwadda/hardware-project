<template>
<div> <ProductList v-for="product in productList" :key="product.id" :product = "product"/>
<div class = "pagination">
<router-link id = "page-prev" 
:to="{name:'Home', query:{page: page-1 }}" rel="prev"
v-if="page !=1">&#60; Prev Page
</router-link>
<router-link id = "page-next"
 :to="{name: 'Home', query: {page:page+1 }}" 
 rel="next"
 v-if="hasNextPage"
 >&#62; next page
</router-link>
</div>
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
            productList:null,
            // need to get the total number of pages
            totalProducts:0
        }
    },
    components:{ ProductList},
    created(){
        // use axios to fetch the data from the jason server
        watchEffect(()=>{
            this.productList = null
        ProductsServices.getProducts( 3, this.page)
        .then(response =>{
            this.productList= response.data
            // the header contains the information for total pag
            this.totalProducts = response.headers['x-total-count']
            })
        .catch(error =>{console.log(error)})
        })
    },
    //get the toatal number of pages 
    computed:{
        hasNextPage(){
            let totalPages = Math.ceil(
                this.totalProducts / 2)
            return this.page < totalPages

        }

    }

}
</script>

<style>
.pagination{
    display:flex;
    width:290px;
   
    
}
.pagination a{
    flex:1;
    text-decoration: none;
    color:#2c3e50;
}
#page-prev{
    text-align: left;
}
#page-next{
    text-align: right;
}
</style>