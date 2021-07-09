<template>
    <h1>TUCKER'S HARDWARE</h1>
    <!--  bind the "to attribute" to the name of the route-->
    <div id = "nav"><router-link :to = "{name: 'Home'}"> Home </router-link></div>
    
    <div id ="nav-view">
        <router-view/>

    </div>
    
</template>

<style>

</style>