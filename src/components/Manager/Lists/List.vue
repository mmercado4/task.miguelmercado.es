<template>
  <div class="list" v-bind:class="{ active: isActive }">
    <p @click="handleClick">{{ list.name }}</p>
    <!-- <TaskVue
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
      @do-task="doTask"
    /> -->
  </div>
</template>

<script>
// import TaskVue from "./Task.vue";

export default {
  name: "ListVue",
  props: {
    list: Object,
    selectedList: String,
  },
  // components: { TaskVue },
  data() {
    return {
      tasks: [
        {
          id: 3331,
          name: "Crear estructura",
          done: false,
          description: "Crear proyecto en gitlab y subir a producción",
        },
        {
          id: 3332,
          name: "Añadir campos y secciones",
          done: true,
          description: "Añadir los campos de datos personales",
        },
      ],
    };
  },
  computed: {
    isActive() {
      return this.selectedList === this.list.name;
    },
  },
  methods: {
    doTask({ id, checked }) {
      this.tasks = this.tasks.map((task) => {
        if (task.id === parseInt(id)) {
          task.done = checked;
        }
        return task;
      });
    },
    handleClick() {
      this.$emit("select-list", this.list.name);
    },
  },
};

//buscar tareas en base de datos según se inicie
</script>

<style scoped>
div.list {
  background-color: white;
  cursor: pointer;
}

div.list.active > p {
  color: red;
  font-weight: bold;
}
</style>
