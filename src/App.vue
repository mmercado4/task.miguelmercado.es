<template>
  <HeaderVue />
  <ManagerVue />
  <FooterVue />
</template>

<script>
import HeaderVue from "./components/Templates/Header.vue";
import FooterVue from "./components/Templates/Footer.vue";
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
@import url("https://fonts.googleapis.com/css2?family=Shippori+Antique&display=swap");

/*constants*/
:root {
  --primary-font: "Shippori Antique", sans-serif;
  --primary-color: #39a2db;
  --secondary-color: #073944;
  --background-color: #eff4f7;
  --white: #ffffff;
}

/*basic styles*/
body {
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  box-sizing: border-box;
}

#app {
  font-family: var(--primary-font);
}

h1 {
  font-size: 2.5em;
}

h1,
h2,
h3 {
  margin: 0;
}
</style>
