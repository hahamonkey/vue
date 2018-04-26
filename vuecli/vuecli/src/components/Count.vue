<template>
    <div>
      {{$store.state.num}}
      {{count}}
      <button @click="$store.commit('add')">+1</buttion>
      <button @click="add()">+1</button>
    </div>
</template>

<script>
    import store form '@/vuex/store';
    import {mapState,mapMutations} from 'vuex'
    export default {
        store,
        computed:{
          count(){
            console.log(this.$data)
            return this.$state.num;
          }
        },
        computed :mapState({
          count(state){
            return state.num;
          }
        }),
        computed:mapState(['num']),
        methods:mapMutations(['add'])
    }
</script>

<style scoped>

</style>
