# BUSCAPÉ

Desenvolvido com Vue e Vuex (controle o estado)

<div align="center">
    <img src="/public/buscape-vue-1.png" style="width:32.333%;" >
    <img src="/public/buscape-vue-2.png" style="width:32.333%;" >
    <img src="/public/buscape-vue-3.png" style="width:32.333%;" >
</div>


#### Biblioteca utilizada
- axios
- vuex [como usar](https://youtu.be/H8y9_q8c8DI)

#### Componentes
- Carrinho
    - Carrinho
    - ListaCarrinho
- Comum
    - Head 
    - Mensagem
- Produtos
    - Foto
    - Lista


#### Formatar moeda
```
formatPrice(value) {
      let val = (value/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }
```
