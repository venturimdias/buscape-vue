<template>
  <div class="produtos container">
    <ListaCarrinho :items="itemsCarrinho" />
    <ul class="lista">
      <li class="item grid" v-for="prod in prods" :key="prod.product.id">
        <Foto :fotos="prod.product.images" />

        <div class="desc">
            {{prod.product.id}}
          <h2>{{ prod.product.name }}</h2>
          <span v-if="prod.product.label" class="melhor-preco">
            Melhor preço
          </span>
          <div class="grid box-preco">
            <div>
              <p class="parcelado">
                <span>{{ prod.product.price.installments }}x R$</span>
                {{ formatPrice(prod.product.price.installmentValue) }}
              </p>
              <p class="avista">
                ou <span>R$ {{ formatPrice(prod.product.price.value) }}</span> à
                vista
              </p>
            </div>
            <div class="btn-add">
              <a class="flex" @click="adicionarCarrinho(prod.product)">
                Adicionar ao carrinho
                <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                  <title />
                  <path
                    d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Foto from "./Foto";
import store from "../../store";
import ListaCarrinho from "../carrinho/ListaCarrinho"

export default {
  components: {
    Foto,
    ListaCarrinho
  },
  store,
  data() {
    return {
      prods: [],
      itemsCarrinho: this.$store.state.carrinho,
      total: this.$store.state.totalCarrinho
    };
  },
  mounted() {
    this.getProds()
  },
  methods: {
    async getProds() {
      await axios
        .get(
          `https://raw.githubusercontent.com/venturimdias/buscape-vue/master/src/data/data.json`
        )
        .then((response) => {
          this.prods = response.data.items;
          //console.log(response.data.items, 2);
        })
        .catch((response) => {
          console.log(response);
        });
    },
    // FORMATAR O VALOR
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    adicionarCarrinho(item) {
      //console.log(item, 'cliquei add carrinho')

      let existeItem = this.itemsCarrinho.findIndex(x => x.id === item.id);
      
      if(existeItem === -1){
        this.$store.commit('setCarrinho', item)
        //console.log('vou adicionar', existeItem)  
      }else{
        console.log("Item já cadastrado")
      }
    },
  },
  computed:{
  }
};
</script>

<style>
.produtos {
  padding-bottom: 30px;
}
.item {
  border-radius: 5px;
  padding: 30px;
  background: var(--branco);
  grid-template-columns: 450px 1fr;
  box-shadow: 0 0 15px rgba(0 0 0 / 10%);
}
.item + .item {
  margin-top: 40px;
}
.item h2 {
  font-size: 1.9rem;
  font-weight: 400;
  line-height: 120%;
  padding: 0 0 20px;
  border-bottom: 1px solid var(--p2);
  margin: 0 0 30px;
}
.melhor-preco {
  display: inline-flex;
  height: 23px;
  align-items: center;
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--branco);
  background: var(--cor5);
  padding: 0px 10px;
  margin-bottom: 10px;
  position: relative;
}
.melhor-preco:after {
  content: "";
  position: absolute;
  top: 0px;
  right: -11px;
  width: 11px;
  height: 23px;
  background: url(/001.png) no-repeat;
  background-size: 100% auto;
}
.parcelado,
.avista {
  font-weight: 600;
}
.parcelado,
.avista span {
  color: var(--cor4);
}
.parcelado {
  font-size: 2.1rem;
}
.parcelado span {
  font-size: 1.8rem;
}
.avista {
  color: var(--p3);
  font-size: 1.1rem;
}

.box-preco {
  grid-template-columns: 1fr 195px;
}

.box-preco .btn-add a {
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0px 15px;
  background: var(--cor4);
  color: var(--branco);
  height: 40px;
  align-items: center;
  border-radius: 5px;
  transition: 0.2s;
}
.box-preco .btn-add svg {
  display: inline-block;
  width: 24px;
  height: 24px;
  fill: var(--branco);
  margin: 0 -10px 0 10px;
}
.box-preco .btn-add a:hover {
  background: var(--cor4a);
}
</style>