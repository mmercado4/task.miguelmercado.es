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
import { getAllLists } from "../../../assets/gateways";

export default {
  name: "ProjectsVue",
  components: {
    ProjectVue,
  },
  data() {
    return {
      projects: [],
      newProject: "",
    };
  },
  async created() {
    let lists = await getAllLists();
    console.log(lists);
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
      //TODO Send to the db
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
