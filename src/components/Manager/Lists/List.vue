<template>
  <div class="list">
    <div class="list-content" @click="handleClick" v-bind:class="animation">
      <h3>
        {{ list.name.length > 30 ? list.name.slice(0, 20) + "..." : list.name }}
      </h3>
      <TaskContainerVue v-if="isActive" :listId="list.id" />
    </div>
    <div class="list-actions">
      <IconBase
        @click="handleStoreClick"
        iconName="Archive task collection"
        :iconColor="isActive ? 'var(--primary-color)' : 'white'"
        ><IconArchive
      /></IconBase>
      <IconBase
        @click="handleTrashClick"
        iconName="Delete task collection"
        :iconColor="isActive ? 'var(--primary-color)' : 'white'"
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
import TaskContainerVue from "../Tasks/TaskContainer.vue";

export default {
  name: "ListVue",
  props: {
    list: Object,
    selectedList: String,
  },
  emits: ["remove-list", "select-list", "store-list"],
  components: { IconBase, IconTrash, IconArchive, TaskContainerVue },
  data() {
    return {
      animation: "",
    };
  },
  updated() {
    if (this.selectedList === this.list.name) this.animation = "active";
    else if (this.animation === "active") this.animation = "inactive";
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
      if (confirm(`Remove ${this.list.name}?`)) {
        this.$emit("remove-list", this.list.id);
      }
    },
    handleStoreClick() {
      if (confirm(`Store ${this.list.name}?`)) {
        this.$emit("store-list", this.list.id);
      }
    },
  },
};
</script>

<style scoped>
div.list {
  background-color: var(--primary-color);
  color: white;
  margin: 10px;
  width: 80%;
  border-radius: 3px;
  opacity: 1;
  position: relative;
  z-index: 1;
  border: 2px solid var(--primary-color);
}

div.list-content {
  width: auto;
  min-height: 50px;
  cursor: pointer;
  padding: 20px;
  height: 100vh;
  max-height: 50px;
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
  z-index: 10;
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

div.list:hover > .list-actions,
div.list.active > .list-actions {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.3s ease;
}

/*Animations*/
div.list-content.active {
  animation: activate-list-animation 0.3s ease forwards;
}

div.list-content.inactive {
  animation: inactive-list-animation 0.3s ease;
}

@keyframes activate-list-animation {
  0% {
    max-height: auto;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
  }
  70% {
    max-height: 50vh;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
  100% {
    max-height: 50vh;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    background-color: white;
    color: var(--primary-color);
  }
}

@keyframes inactive-list-animation {
  0% {
    max-height: 50vh;
    background-color: white;
    color: var(--primary-color);
  }
  100% {
    max-height: auto;
    background-color: var(--primary-color);
    color: white;
  }
}
</style>
