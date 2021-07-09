

<template>
<span v-if = "product">{{product.name}}</span>
</template>
<script>
/**this component displays the details of the product using its id
 * it recieves the id as a prop from the productList component
 * when created it uses the getproduct method from the productsServices 
 * 
 */
import ProductsServices from "../services/ProductsServices"
export default{
    props:["id"],
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
<style>

</style>