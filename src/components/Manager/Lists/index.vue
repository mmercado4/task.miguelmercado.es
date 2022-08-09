<template>
  <div class="lists-container">
    <ListVue
      v-for="(list, index) in lists"
      :key="index"
      :list="list"
      @select-list="selectList"
      :selectedList="selectedList"
    />
  </div>
  <p>Selected: {{ this.selectedList }}</p>
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
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 15px;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 60vh;
  overflow-y: scroll;
  overflow-x: hidden;
}

div.lists-container::-webkit-scrollbar {
  width: 3px;
  border-radius: 2px;
}

div.lists-container::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 3px;
}

div.lists-container:hover::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

div.lists-container:hover::-webkit-scrollbar-thumb {
  background-color: var(--secondary-color);
  border-radius: 3px;
}

@media (min-width: 768px) {
  div.lists-container {
    width: 70%;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
