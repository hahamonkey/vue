<template>
    <div class="test">
        <h1>测试页面</h1>
        <router-link to="/test1/">Test1</router-link>
        <!-- <router-link :to="{name:'Test2',params:{id:007}}">Test2</router-link> -->
        <router-link to="/test2/5/lisi">Test2</router>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .test{
        height:500px;
        color:#fff;
        background:rgb(207, 98, 98);
    }
</style>