<template>
  <main>
    <div class="add-list-zone">
      <input
        type="text"
        class="add-list-input"
        :class="{ active: showForm }"
        placeholder="Add new list"
        v-model="newList"
        @keypress="handleKeyPress"
      />
      <RoundButtonVue title="Add list" :action="handleClick" :active="showForm"
        ><IconBase width="25" height="25"><IconPlus /></IconBase>
      </RoundButtonVue>
    </div>

    <ListsVue />
  </main>
</template>

<script>
import ListsVue from "./Lists";
import RoundButtonVue from "../Templates/RoundButton.vue";
import IconBase from "../Templates/IconBase.vue";
import IconPlus from "../Icons/IconPlus.vue";
import { saveNewList } from "../../assets/gateways";

import { nanoid } from "nanoid";

export default {
  name: "ManagerVue",
  components: {
    ListsVue,
    RoundButtonVue,
    IconBase,
    IconPlus,
  },
  data() {
    return {
      showForm: false,
      newList: "",
    };
  },
  methods: {
    handleClick() {
      let newStatus = !this.showForm;
      if (!newStatus) setTimeout(() => (this.newList = ""), 500);
      this.showForm = newStatus;
    },
    handleKeyPress(e) {
      if (e.code === "Enter") {
        let obj = {
          id: nanoid(),
          name: this.newList,
          stored: false,
        };

        saveNewList(obj)
          .then((response) => {
            if (response.success) {
              console.log(response);
              this.handleClick();
            }
          })
          .catch((error) => console.error(error));
      }
    },
  },
};
</script>

<style scoped>
main {
  min-height: calc(100vh - 100px);
  position: relative;
}

.add-list-zone {
  position: fixed;
  right: 30px;
  bottom: 60px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
  padding: 5px;
}

.add-list-input {
  margin-bottom: 20px;
  font-family: var(--primary-font);
  padding: 10px;
  border: none;
  border-bottom: 1px solid var(--secondary-color);
  background-color: transparent;
  transform: translateX(300px);
  transition: transform 0.5s ease;
  outline: none;
  font-size: 1.1em;
  text-align: end;
}

.add-list-input.active {
  transform: translateX(0);
  transition: transform 0.5s ease;
}
</style>
