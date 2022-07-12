<template>
  <button
    :class="{ active: active }"
    :title="title"
    @click="action"
    class="round-button"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "RoundButtonVue",
  props: {
    title: String,
    action: Function,
    active: Boolean,
    iconPositionWhileActive: String,
  },
};
</script>

<style>
button.round-button {
  width: 60px;
  background-color: var(--primary-color);
  color: var(--white);
  height: 60px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
}

button.round-button > svg {
  transform: rotate(0deg);
  transition: transform 200ms;
}

button.active > svg {
  transform: rotate(45deg);
  transition: transform 200ms;
}
</style>
