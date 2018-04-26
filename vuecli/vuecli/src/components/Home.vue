<template>
    <div>
        <h3> {{msg}}</h3>
        <com-a>
            <p slot="content">父页面传值</p>
        </com-a>
        <com-b></com-b>
    </div>
</template>

<script>
    import ComA from './ComA'
    import ComB from './ComB'
    export default {
        data(){
            return:{
                msg:'home'
            }
        }
        components:{
            comA,
            comB
        },methods{
            fn(val){
                this.msg = val;
            }
        }
    }
</script>
    
<style scoped>

</style>