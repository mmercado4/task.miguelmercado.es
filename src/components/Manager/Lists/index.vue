<template>
  <div class="project-container">
    <ListVue v-for="(list, index) in lists" :key="index" v-bind:list="list" />
  </div>
</template>

<script>
import ListVue from "./List.vue";
import { nanoid } from "nanoid";
import { getAllLists } from "../../../assets/gateways";

export default {
  name: "ListsVue",
  components: {
    ListVue,
  },
  data() {
    return {
      lists: [],
      newList: "",
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
