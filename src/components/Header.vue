<template>
  <header>{{ msg }}</header>
</template>
<script>
export default {
  name: "HeaderVue",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
header {
  width: 100%;
  min-height: 100px;
  background-color: aquamarine;
}
</style>
