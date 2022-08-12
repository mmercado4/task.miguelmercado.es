<template>
  <div class="list" v-bind:class="{ active: isActive }">
    <h3 @click="handleClick">
      {{ list.name.length > 25 ? list.name.slice(0, 20) + "..." : list.name }}
    </h3>
    <IconBase @click="handleTrashClick" iconName="trash" iconColor="#fff"
      ><IconTrash
    /></IconBase>
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
import IconBase from "@/components/Templates/IconBase.vue";
import IconTrash from "@/components/Icons/IconTrash.vue";

export default {
  name: "ListVue",
  props: {
    list: Object,
    selectedList: String,
  },
  emits: ["remove-list"],
  components: { IconBase, IconTrash },
  data() {
    return {
      // tasks: [
      //   {
      //     id: 3331,
      //     name: "Crear estructura",
      //     done: false,
      //     description: "Crear proyecto en gitlab y subir a producción",
      //   },
      //   {
      //     id: 3332,
      //     name: "Añadir campos y secciones",
      //     done: true,
      //     description: "Añadir los campos de datos personales",
      //   },
      // ],
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
    handleTrashClick() {
      this.$emit("remove-list", this.list.id);
    },
  },
};

//buscar tareas en base de datos según se inicie
</script>

<style scoped>
div.list {
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
  padding: 20px;
  margin: 10px;
  width: 80%;
  border-radius: 3px;
  height: 100vh;
  max-height: 50px;
}

div.list.active {
  animation: activate-list-animation 0.3s ease forwards;
}

@keyframes activate-list-animation {
  0% {
    max-height: auto;
  }
  100% {
    max-height: 50vh;
  }
}
</style>
