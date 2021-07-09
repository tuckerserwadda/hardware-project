<template>
<!-- 
    the product has a router link to the productDeatil component
    we bind the to with the name of the route, 
    then give it params attribute where we pass the id of the product
 -->
   <router-link :to = "{name:'ProductDetails', params : {id: product.id}}"><div>{{product.name}}</div></router-link>
</template>
<script>

export default {
    name: "ProductList",
    props:{
        product:Object
    }
    
}
</script>

<style>

</style>