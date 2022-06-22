<template>
  <div class="project-container">
    <!-- <p v-if="projects.length === 0">No hay proyectos</p>
    <div v-else>
      <p v-for="(project, index) in projects" :key="index">
        {{ project.name }}
        <span v-for="(task, index) in project.tasks" :key="index"
          >{{ task.name }} <br
        /></span>
      </p>
    </div> -->
  </div>
  <ProjectVue
    v-for="(project, index) in projects"
    :key="index"
    v-bind:project="project"
    v-bind:doTask="doTask"
  />
  <input v-on:keypress="handleKeyPress" type="text" v-model="newProject" />
  <button v-on:click="handleClick">Añadir</button>
</template>

<script>
import ProjectVue from "./Project.vue";

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
          tasks: [
            {
              name: "Crear estructura",
              done: false,
              description: "Crear proyecto en gitlab y subir a producción",
            },
            {
              name: "Añadir campos y secciones",
              done: true,
              description: "Añadir los campos de datos personales",
            },
          ],
          stored: false,
        },
        {
          id: "2",
          name: "Sanitas",
          tasks: [
            {
              name: "Crear proyecto",
              done: false,
              description: "Añadir los campos de datos personales",
            },
            {
              name: "Arreglar tarificador",
              done: false,
              description: "Añadir los campos de datos personales",
            },
          ],
          stored: false,
        },
        {
          id: "3",
          name: "Repsol",
          tasks: [
            {
              name: "Preparar precios",
              done: true,
              description: "Añadir los campos de datos personales",
            },
          ],
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
        name: this.newProject,
        tasks: [],
      };
      this.projects.push(obj);
      this.newProject = "";
    },
    handleKeyPress(e) {
      if (e.key === "Enter") {
        this.handleClick();
      }
    },
    doTask(projectId, taskName, ckecked) {
      console.log("check", projectId, taskName, ckecked);
      let project = this.projects.find((pro) => pro.id === projectId);
      let task = project.tasks.find((task) => task.name === taskName);

      console.log(task);
      task.done = ckecked;
      console.log(task);
    },
  },
};
</script>

<style scoped>
div.project-container {
  background-color: indianred;
}
</style>
