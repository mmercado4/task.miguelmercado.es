<template>
  <main>
    <h2>Projects</h2>
    <ProjectsVue />
  </main>
</template>

<script>
import ProjectsVue from "./Projects";

export default {
  name: "ManagerVue",
  components: {
    ProjectsVue,
  },
};
</script>

<style scoped>
main {
  min-height: calc(100vh - 150px);
  background-color: whitesmoke;
}
</style>
