import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ 
  state:{
      carrinho: [],
      totalCarrinho: [],
      exibirCarrinho: false,
  },
  mutations:{
      setCarrinho(state, setState){
        state.carrinho.push(setState)
      },
      setRemoverCarrinho(state, setIndex){
        state.carrinho.splice(setIndex,1)
      },
      setExibirCarrinho(state, setExibir){
        state.exibirCarrinho = setExibir
        console.log('state: ',state.exibirCarrinho, setExibir)
      }
  },
  actions: {       
  },
  getters:{
  }
})