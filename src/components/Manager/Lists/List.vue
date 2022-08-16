<template>
  <div class="list" v-bind:class="animation">
    <h3 @click="handleClick">
      {{ list.name.length > 25 ? list.name.slice(0, 20) + "..." : list.name }}
    </h3>
    <div class="list-actions">
      <IconBase iconName="Archive task collection" iconColor="#fff"
        ><IconArchive
      /></IconBase>
      <IconBase
        @click="handleTrashClick"
        iconName="Delete task collection"
        iconColor="#fff"
        ><IconTrash
      /></IconBase>
    </div>

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
import IconArchive from "@/components/Icons/IconArchive.vue";

export default {
  name: "ListVue",
  props: {
    list: Object,
    selectedList: String,
  },
  emits: ["remove-list", "select-list"],
  components: { IconBase, IconTrash, IconArchive },
  data() {
    return {
      animation: "appear",
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
  updated() {
    if (this.selectedList === this.list.name) this.animation = "active";
    else this.animation = "inactive";
  },
  // computed: {
  //   isActive() {
  //     if (this.selectedList === this.list.name) return true;
  //     else return false;
  //   },
  // },
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
      if (confirm(`Remove ${this.list.name}?`)) {
        this.$emit("remove-list", this.list.id);
      }
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
  opacity: 1;
  position: relative;
}

div.list-actions {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
  position: absolute;
  top: 8px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

div.list-actions > svg {
  width: 15px;
  margin: 5px;
  transition: transform 0.3s ease;
  transform: scale(1);
}

div.list-actions > svg:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

div.list:hover > .list-actions {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.3s ease;
}

/*Animations*/
div.list.active {
  animation: activate-list-animation 0.3s ease forwards;
}

div.list.inactive {
  animation: inactive-list-animation 0.3s ease;
}

@keyframes activate-list-animation {
  0% {
    max-height: auto;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
  }
  100% {
    max-height: 50vh;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
}

@keyframes inactive-list-animation {
  0% {
    max-height: 50vh;
  }
  100% {
    max-height: auto;
  }
}
</style>
