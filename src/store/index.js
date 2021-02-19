import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ 
  state:{
      carrinho: ["teste"]
  },
  mutations:{
      setCarrinho(state, setState){
         state.carrinho.push(setState) 
      }
  },
  actions: {
    // async setCurrentJoke(state) {
    //   state.commit("setCarrinho", )
    // }
  },
  getters:{
    getCarrinho: state => state.carrinho
  }


})