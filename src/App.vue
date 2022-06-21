<template>
  <Header msg="Task Manager" />
  <Main />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Main from "./components/Main";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Main,
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
