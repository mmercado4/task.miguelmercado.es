<template>
  <main>
    <h2>Listas</h2>
    <AnalogButtonVue text="Púlsame" :action="unaAccion" />
    <ListsVue />
  </main>
</template>

<script>
import ListsVue from "./Lists";
import AnalogButtonVue from "../Templates/AnalogButton.vue";

export default {
  name: "ManagerVue",
  components: {
    ListsVue,
    AnalogButtonVue,
  },
  methods: {
    unaAccion() {
      console.log("pulsado");
    },
  },
};
</script>

<style scoped>
main {
  min-height: calc(100vh - 100px);
}
</style>
