<template>
    <div class="lista-carrinho abs" v-if="this.$store.state.exibirCarrinho">
        <div class="container">
            <ul>
                <li v-for="(item, index) in items" :key="index">
                    <img :src="item.images[0]" />
                    <div>
                        <h4>{{item.name}}</h4>
                        <div class="valor-parcelado">
                            <p>
                                <span>{{ item.price.installments }}x R$</span>
                                {{ formatPrice(item.price.installmentValue) }}
                            </p>
                            <p>
                                ou <span>R$ {{ formatPrice(item.price.value) }}</span> à
                                vista
                            </p>
                        </div>
                        <a @click="removerCarrinho(index)">Remover</a>
                    </div>
                </li>
            </ul>
            <div v-if="items != ''" class="subtotal">
                <h5>Subtotal</h5>
                {{ parceladoCarrinho() }} <br/>
                {{ totalCarrinho() }}
            </div>
        </div>
    </div>
</template>

<script>
import store from "../../store"

export default {
    props:['items'],
    store,
    data(){
        return{
        }
    },
    mounted(){
        console.log(this.itens)
    },
    methods:{
        // FORMATAR O VALOR
        formatPrice(value) {
            let val = (value / 1).toFixed(2).replace(".", ",");
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        removerCarrinho(index){
            this.$store.commit('setRemoverCarrinho', index)
        },
        parceladoCarrinho(){
            let carrinho = this.$store.state.carrinho
            let total = 0
            for(let i = 0; i < carrinho.length; i++){
                total += carrinho[i].price.installmentValue
            }
            let totalAvista = this.formatPrice(total)    
            return `10x R$ ${totalAvista}`
        },
        totalCarrinho(){
            let carrinho = this.$store.state.carrinho
            let total = 0
            for(let i = 0; i < carrinho.length; i++){
                total += carrinho[i].price.value
            }
            let totalAvista = this.formatPrice(total)    
            return `ou R$ ${totalAvista} à vista`
        },

    }
}
</script>

<style>
.lista-carrinho {
    width:100%;
    top:76px;
    left:0px;
    padding:0px 20px;
    background:var(--cor2);
    z-index:5;
    box-shadow:0 7px 10px rgba(0 0 0 /20%);
}
.lista-carrinho ul{
    margin-top:5px;
}
.lista-carrinho li{
    display:grid;
    grid-template-columns: 80px 1fr;
    grid-gap:10px;
    position:relative;
    z-index:2;
    padding:10px 0;
}
.lista-carrinho li:after{
    content:'';
    position:absolute;
    width:1800px;
    height:100%;
    background:var(--cor3);
    top:0px;
    left:50%;
    transform:translateX(-50%);
    z-index:-1;
}
.lista-carrinho li + li{
    margin-top:2px;    
}
.lista-carrinho img{
    width:80px;
    border-radius:5px;
}
.lista-carrinho h4{
    font-size:1.1rem;
    line-height:120%;
    padding-bottom:20px;
    color:var(--branco)
}
.lista-carrinho .valor-parcelado{
    font-weight:600;
    line-height:140%;
}
.lista-carrinho .subtotal{
    text-align:right;
    font-size:1.2rem;
    font-weight:600;
    padding:20px 0;
}
.lista-carrinho .subtotal h5{
    border-bottom:1px solid;
    padding-bottom:10px;
    margin-bottom:10px;
}

</style>