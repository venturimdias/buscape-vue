import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ 
  state:{
      carrinho: [],
      count: 0,
      totalCarrinho: [],
      abaCarrinho: false,
  },
  mutations:{
      setCarrinho(state, setState){
        state.carrinho.push(setState)
      },
      setRemoverCarrinho(state, setIndex){
        state.carrinho.splice(setIndex,1)
      },
  },
  actions: {       
  },
  getters:{
  }
})