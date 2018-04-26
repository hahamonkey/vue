<template>
    <div class="test2">
        <h2>我是Test2</h2>
        id:{{$route.params.id}}
        <router-view/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .test2{
        width:300px;
        height:300px;
        margin:0 auto;
        background:blue;
    }
</style>