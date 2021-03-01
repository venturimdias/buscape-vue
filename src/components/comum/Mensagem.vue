<template>
    <transition name="fade">
    <div class="msg fx" v-show="isActive == !isActive">
        <button type="button" class="abs" @click="isActive = false">X</button>
        {{ texto }}
    </div>
    </transition>
</template>

<script>
import store from '../../store'
export default {
    store,
    props: ["texto"],
    data(){
        return{
            isActive: false
        }
    },
    watch:{

    },
    methods:{
    },
    mounted(){
        console.log(this.isActive)
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
.msg{
    position:fixed;
    border-radius:10px;
    background:var(--cor4);
    padding:15px 35px;
    bottom:10px;
    left:50%;
    transform:translateX(-50%);
    color:var(--branco);
    font-weight:600;
    font-size:.8rem;
}
.msg.ativo{
    opacity:1;
    /* animation:ativarMsg 2s reverse */
}
@keyframes ativarMsg {
 0% {  opacity: 0; }
 10%{ opacity: 1; }
 90%{ opacity:1; }
 100% { opacity:0; }
}

</style>