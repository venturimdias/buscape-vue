<template>
  <div>
    <Head />
    <Lista />
  </div>
</template>

<script>
import Lista from "@/components/produtos/Lista";
import Head from "@/components/comum/Head";
import store from "@/store";

export default {
  name: "App",
  store,
  components: {
    Head,
    Lista,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
:root {
  --branco: #FFF;
  --preto: #000;
  --p1: #444444;
  --p2: #e6e6e6;
  --p3: #757575;
  --p4: #f3f3f3;

  --cor1: #ffcd00;
  --cor2: #daaf00;
  --cor3: #c49d00;

  --cor4: #22b14c;
  --cor4a: #15632c;
  --cor5: #1990df;
  --cor6: #d62a33;
}
body {
  background: var(--p4);
  font-family: "Montserrat", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x:hidden;
}
ul,
li {
  list-style: none;
}
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.container {
  max-width: 1180px;
  width: 95%;
  margin: auto;
}
.rel {
  position: relative;
}
.abs {
  position: absolute;
}
.grid {
  display: grid;
}
.flex {
  display: flex;
}
</style>
