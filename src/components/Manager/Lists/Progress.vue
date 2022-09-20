<template>
  <div class="progress-indicator">{{ this.percent }} <span>%</span></div>
</template>

<script>
import { getNumberOfTask } from "@/assets/gateways";

export default {
  name: "ProgressVue",
  props: {
    list: String,
  },
  data() {
    return {
      percent: "",
    };
  },
  created() {
    getNumberOfTask(this.list).then((res) => {
      if (res.totalTask > 0) {
        console.log("%", res.doneTask / res.totalTask);
        this.percent = ((res.doneTask / res.totalTask) * 100).toFixed(0);
      } else {
        this.percent = 0;
      }
    });
  },
};
</script>

<style scoped>
.progress-indicator {
  margin-right: 30px;
  font-size: 1.4em;
  font-weight: 800;
  position: relative;
}

.progress-indicator > span {
  position: absolute;
  bottom: 3px;
  right: -12px;
  font-size: 10px;
}
</style>
