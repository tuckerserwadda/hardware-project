

<template>
<div v-if="product"><h2>{{product.name}}</h2>
</div>
</template>
<script>
/**this component displays the details of the product using its id
 * it recieves the id as a prop from the productList component
 * when created it uses the getproduct method from the productsServices 
 * 
 */
export default{
    props:['product']
  
}
</script>