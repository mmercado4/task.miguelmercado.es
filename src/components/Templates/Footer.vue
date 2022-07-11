<template>
  <footer>
    <p>
      Made with
      <IconBase iconName="brand" iconColor="#073944"><IconBrand /></IconBase>
    </p>
  </footer>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconBrand from "../Icons/IconBrand.vue";

export default {
  name: "FooterVue",
  components: {
    IconBrand,
    IconBase,
  },
};
</script>
<style scoped>
footer {
  width: 100%;
  height: 50px;
  color: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}
</style>
