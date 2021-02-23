<template>
  <div class="msg fx" :class="ativo ? 'ativo' : '' ">
      {{ativo}} {{msg}}
  </div>
</template>

<script>
export default {
    props: ["msg", "ativo"],
}

</script>

<style>
.msg{
    display:none;
    opacity:0;
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
    display:block;
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