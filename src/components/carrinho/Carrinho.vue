<template>
  <div class="carrinho rel flex"  @click="abrirCarrinho" >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      height="32px"
      id="Layer_1"
      style="enable-background: new 0 0 32 32"
      version="1.1"
      viewBox="0 0 32 32"
      width="32px"
      xml:space="preserve"
    >
      <path
        d="M28,10h-4V8c0-4.418-3.582-8-8-8c-4.418,0-8,3.582-8,8v2H4c-1.1,0-2,0.9-2,2v12c0,4.4,3.6,8,8,8h12c4.4,0,8-3.6,8-8V12  C30,10.9,29.1,10,28,10z M12,8c0-2.209,1.791-4,4-4s4,1.791,4,4v2h-8V8z M26,24c0,2.206-1.795,4-4,4H10c-2.206,0-4-1.794-4-4V14h2v2  c0,1.104,0.896,2,2,2s2-0.896,2-2v-2h8v2c0,1.104,0.896,2,2,2s2-0.896,2-2v-2h2V24z"
      />
    </svg>
    <div class="notificacao abs flex">
      {{carrinho.length}}
    </div>
  </div>
</template>

<script>
import store from "../../store"

export default {
  props: ["item"],
  store,
  data() {
    return {
        carrinho: this.$store.state.carrinho,
        aba: this.$store.state.exibirCarrinho      
    };
  },
  computed: {
  },
  methods:{
    abrirCarrinho(){
      this.aba = !this.aba
      this.$store.commit('setExibirCarrinho', this.aba)
      //console.log('aba: ', this.aba)
    }
  },
  mounted() {
    //console.log(this.aba)
  },
};
</script>

<style>
.carrinho,
.notificacao {
  align-items: center;
  justify-content: center;
}
.carrinho {
  width: 50px;
  height: 50px;
  margin-right: 5px;
  cursor:pointer;
}
.carrinho svg {
  width: 38px;
  height: 32px;
}
.notificacao {
  background: var(--cor6);
  color: var(--branco);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  bottom: -5px;
  left: -5px;
}
</style>