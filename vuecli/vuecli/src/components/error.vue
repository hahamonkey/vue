<template>
    <div>
        <h2>页面</h2>
    </div>
</template>

script>
    export default {
        data(){
            return{
                msg:'111'
            }
        },
        methods:{
        //以下三种写法相同
            add:function(){

            },
            add:()=>{

            },
            add(){

            }
        }
    }
</script>

<style scoped>

</style>
