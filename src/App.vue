<template>
  <HeaderVue msg="Task Manager" />
  <ManagerVue />
  <FooterVue />
</template>

<script>
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";
import ManagerVue from "./components/Manager";

export default {
  name: "App",
  components: {
    HeaderVue,
    FooterVue,
    ManagerVue,
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

h1,
h2,
h3 {
  margin: 0;
}
</style>
