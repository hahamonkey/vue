/**
 * Created by Administrator on 2018/4/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  num:1,
  x:10
}

const mutations = {
  add(state){
    state.num++;
}
}

export default new Vuex.Store({
  state,
  mutations
})
