<template>
    <transition name="fade">
    <div class="msg fx" :class="tipo" v-show="this.$store.state.exibirMsg" >
        <button type="button" class="abs" @click="ocultarBox">X</button>
        {{ texto }}
    </div>
    </transition>
</template>

<script>
import store from '../../store'
export default {
    store,
    props: ["texto", "tipo"],
    methods:{
        ocultarBox: function(){
            this.$store.commit('setExibirMsg', false)
            return
        }
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
.msg.sucess{
   background:var(--cor4);
}
.msg.alert{
   background:var(--cor2);
   color:var(--texto);
}
.msg{
    position:fixed;
    border-radius:10px;
    padding:15px 35px;
    bottom:10px;
    left:50%;
    transform:translateX(-50%);
    color:var(--branco);
    font-weight:600;
    font-size:.8rem;
}
.msg button{
    border-radius:50%;
    display:flex;
    align-items: center;
    justify-content: center;
    width:24px;
    height:24px;
    outline:0px;
    border:0px;
    box-shadow:0 0 10px rgb(0 0 0 / 25%);
    top: -5px;
    right: -5px;
}
@keyframes ativarMsg {
 0% {  opacity: 0; }
 10%{ opacity: 1; }
 90%{ opacity:1; }
 100% { opacity:0; }
}

</style>