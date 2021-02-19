<template>
  <div class="box-fotos grid">
    <ul class="barra-lateral">
      <li
        v-for="(img, index) in images"
        :key="index"
        :class="[img == imagemDestaque ? 'ativo' : '', 'outra-class']"
      >
        <img :src="img" @click="mudarFoto(index)" />
      </li>
    </ul>

    <div class="foto-destaque">
      <img :src="imagemDestaque" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["fotos"],
  data() {
    return {
      images: this.fotos,
      imagemDestaque: "",
    };
  },
  created() {
    this.imagemDestaque = this.images[0];
  },
  methods: {
    mudarFoto(index) {
      this.imagemDestaque = this.images[index];
    },
  },
  computed: {},
};
</script>

<style>
.box-fotos {
  grid-template-columns: 60px 1fr;
  grid-gap: 10px;
}
.barra-lateral img,
.foto-destaque img {
  display: block;
  width: 100%;
  height: auto;
}
.barra-lateral li + li {
  margin-top: 10px;
}
.barra-lateral li.ativo {
  outline: 1px solid var(--cor2);
}
</style>