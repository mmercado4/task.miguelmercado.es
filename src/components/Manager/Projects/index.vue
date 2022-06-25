<template>
  <div class="project-container">
    <ProjectVue
      v-for="(project, index) in projects"
      :key="index"
      v-bind:project="project"
    />
  </div>

  <input v-on:keypress="handleKeyPress" type="text" v-model="newProject" />
  <button v-on:click="handleClick">Añadir</button>
</template>

<script>
import ProjectVue from "./Project.vue";
import { nanoid } from "nanoid";

export default {
  name: "ProjectsVue",
  components: {
    ProjectVue,
  },
  data() {
    return {
      projects: [
        {
          id: "1",
          name: "Adeslas",
          stored: false,
        },
        {
          id: "2",
          name: "Sanitas",
          stored: false,
        },
        {
          id: "3",
          name: "Repsol",
          stored: false,
        },
      ],
      newProject: "",
    };
  },
  methods: {
    handleClick() {
      console.log(this.newProject);
      let obj = {
        id: nanoid(),
        name: this.newProject,
        tasks: [],
        stored: false,
      };
      console.log(obj);
      this.projects.push(obj);
      this.newProject = "";
      //enviar a la base de datos
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
