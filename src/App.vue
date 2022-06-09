<template>
  <Header msg="Tus muertos" />
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #eaeaea;
}

#app {
  font-family: consolas;
}
</style>
