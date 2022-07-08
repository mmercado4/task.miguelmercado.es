<template>
  <main>
    <h2>Listas</h2>
    <ListsVue />
  </main>
</template>

<script>
import ListsVue from "./Lists";

export default {
  name: "ManagerVue",
  components: {
    ListsVue,
  },
};
</script>

<style scoped>
main {
  min-height: calc(100vh - 150px);
  background-color: whitesmoke;
}
</style>
