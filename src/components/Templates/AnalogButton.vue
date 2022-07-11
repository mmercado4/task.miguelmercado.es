<template>
  <button class="analog-button" @click="action">{{ text }}</button>
</template>

<script>
export default {
  name: "AnalogButton",
  props: {
    text: String,
    action: Function,
  },
};
</script>

<style scoped>
button.analog-button {
  background-color: var(--primary-color);
  color: var(--white);
  font-family: var(--primary-font);
  border-radius: 8px;
  box-shadow: var(--secondary-color) 4px 4px 1px;
  transition: transform 200ms, box-shadow 200ms;
  padding: 10px 20px;
  border: none;
}

button.analog-button:active {
  transform: translateX(4px) translateY(4px);
  box-shadow: var(--secondary-color) 0px 0px 0px;
}
</style>
