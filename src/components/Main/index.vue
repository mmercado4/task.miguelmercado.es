<template>
  <main>
    <h2>Projects</h2>
    <Projects />
  </main>
</template>

<script>
import Projects from "./Projects";

export default {
  name: "MainVue",
  components: {
    Projects,
  },
};
</script>

<style scoped>
main {
  min-height: calc(100vh - 150px);
  background-color: whitesmoke;
}
</style>
