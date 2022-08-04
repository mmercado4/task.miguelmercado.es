<template>
  <div class="lists-container">
    <ListVue
      v-for="(list, index) in lists"
      :key="index"
      :list="list"
      @select-list="selectList"
      :selectedList="selectedList"
    />
    <p>Selected: {{ this.selectedList }}</p>
  </div>
</template>

<script>
import ListVue from "./List.vue";

export default {
  name: "ListsVue",
  components: {
    ListVue,
  },
  props: {
    lists: Array,
  },
  data() {
    return {
      selectedList: "",
    };
  },
  methods: {
    selectList(list) {
      if (list === this.selectedList) this.selectedList = "";
      else this.selectedList = list;
    },
  },
};
</script>

<style scoped>
div.lists-container {
  width: 80%;
  display: block;
  margin: 0 auto;
}
</style>
