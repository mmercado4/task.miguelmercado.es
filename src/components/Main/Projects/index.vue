<template>
  <div class="project-container">Contenedor de proyectos</div>
  <p v-if="projectList.length === 0">No hay proyectos</p>
  <div v-else>
    <p v-for="(project, index) in projectList" :key="index">{{ project }}</p>
  </div>
  <p>{{ newTeam }}</p>
  <input v-on:keypress="handleKeyPress" type="text" v-model="newTeam" />
  <button v-on:click="handleClick">Añadir</button>
</template>

<script>
export default {
  name: "ProjectsVue",
  data() {
    return {
      projectList: [
        "Rayo Vallecano",
        "Real Madrid",
        "Getafe",
        "Atlético de Madrid",
        "Barcelona",
      ],
      newTeam: "",
    };
  },
  methods: {
    handleClick() {
      this.projectList.push(this.newTeam);
      this.newTeam = "";
    },
    handleKeyPress(e) {
      if (e.key === "Enter") {
        this.handleClick();
      }
    },
  },
};
</script>

<style scoped>
div.project-container {
  background-color: indianred;
}
</style>
