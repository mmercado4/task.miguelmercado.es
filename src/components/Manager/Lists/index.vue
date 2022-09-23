<template>
  <div class="lists-container" ref="containerRef">
    <ListVue
      v-for="(list, index) in lists"
      :key="index"
      :list="list"
      @select-list="selectList"
      @click="expand(index)"
      v-bind="$attrs"
      :selectedList="selectedList"
    />
    <div class="cover" id="cover"></div>
  </div>
</template>

<script>
import ListVue from "./List.vue";

export default {
  name: "ListsVue",
  inheritAttrs: false, //TODO: APRENDER QUÈ HACE ESTO QUE PARECE QUE ES NECESARIO PARA EMITIR UN EVENTO DESDE EL NIETO
  props: {
    lists: Array,
  },
  components: {
    ListVue,
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
    expand(index) {
      console.log(
        this.$refs.containerRef.children[index].getBoundingClientRect()
        //TODO: CONTINUAR POR AQUI
      );
    },
  },
};
</script>

<style scoped>
div.lists-container {
  width: 90%;
  margin: 0 auto;
  padding: 0 15px;
  columns: 250px;
  column-gap: 1.5em;
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
</style>
