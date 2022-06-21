<template>
  <Header msg="Task" />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
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
