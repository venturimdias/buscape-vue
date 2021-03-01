import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({ 
  state:{
      produtos: [],
      carrinho: [],
      totalCarrinho: [],
      exibirCarrinho: false,
  },
  actions: {      
    getProdutosStore({ commit }){
      axios
        .get(
          `https://raw.githubusercontent.com/venturimdias/buscape-vue/master/src/data/data.json`
        )
        .then((response) => {
          //console.log('pasando no getProdutosAxios', response)
          commit('SET_Produtos', response.data.items)
        })
        .catch((response) => {
          console.log(response);
        });
      } 
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
        //console.log('state: ',state.exibirCarrinho, setExibir)
      },
      SET_Produtos(state, items) {
        state.produtos = items
      }
  },
  getters:{
    /*
    por enquanto não estou usando
    produtos: state => {
      console.log('aqui', state)
      return state.produtos;
    }*/
  },
})