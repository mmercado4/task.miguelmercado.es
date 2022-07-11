<template>
  <header>
    <h1>Tasks</h1>
  </header>
</template>
<script>
export default {
  name: "HeaderVue",
};
</script>
<style>
header {
  width: 100%;
  min-height: 50px;
  margin: 0;
}

header h1 {
  animation: gather-letters-animation 1s ease;
  letter-spacing: 2px;
  transform: translateX(0);
  color: var(--secondary-color);
}

@keyframes gather-letters-animation {
  0% {
    letter-spacing: 10px;
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    letter-spacing: 2px;
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
