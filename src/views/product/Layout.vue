

<template>
<div v-if="product"><h2>{{product.name}}</h2>
<div id= "nav">
    <router-link :to="{name: 'ProductDetails', params: {id}}">Details </router-link>
    <router-link :to="{name: 'Register', params: {id}}">Rigister </router-link>
    <router-link :to="{name: 'Edit', params: {id}}">Edit </router-link>
</div>
<router-view :product="product"/>
</div>
</template>
<script>
/**this component displays the details of the product using its id
 * it recieves the id as a prop from the productList component
 * when created it uses the getproduct method from the productsServices 
 * 
 */
import ProductsServices from "../../services/ProductsServices"
export default{
    name: 'ProductLayout',
    props:['id'],
    data(){
        

        return{
            product: null
        }
    },
    created(){
        ProductsServices.getProduct(this.id)
        .then(response =>{this.product= response.data})
        .catch(error =>{console.log(error)})

    }

}
</script>


