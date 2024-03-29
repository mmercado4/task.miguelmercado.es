<template>
  <main>
    <div class="add-list-zone">
      <div class="add-list-input-container" :class="{ active: showForm }">
        <input
          type="text"
          class="add-list-input"
          placeholder="Add new task list"
          v-model="newList"
          @keypress="handleKeyPress"
        />
        <IconBase width="25" height="25" @click="addList"
          ><IconRightCaret
        /></IconBase>
      </div>
      <RoundButtonVue title="Add list" :action="handleClick" :active="showForm"
        ><IconBase width="25" height="25"><IconPlus /></IconBase>
      </RoundButtonVue>
    </div>

    <ListsVue
      :lists="lists"
      @remove-list="removeList"
      @store-list="storeList"
    />
  </main>
</template>

<script>
import ListsVue from "./Lists";
import RoundButtonVue from "../Templates/RoundButton.vue";
import IconBase from "../Templates/IconBase.vue";
import IconPlus from "../Icons/IconPlus.vue";
import IconRightCaret from "../Icons/IconRightCaret.vue";
import {
  saveNewList,
  deleteList,
  getAllLists,
  updateList,
} from "../../assets/gateways";

import { nanoid } from "nanoid";

export default {
  name: "ManagerVue",
  components: {
    ListsVue,
    RoundButtonVue,
    IconBase,
    IconPlus,
    IconRightCaret,
  },
  data() {
    return {
      showForm: false,
      newList: "",
      lists: [],
    };
  },
  async created() {
    let listArray = await getAllLists();
    this.lists = listArray;
  },
  methods: {
    handleClick() {
      let newStatus = !this.showForm;
      if (!newStatus) setTimeout(() => (this.newList = ""), 500);
      this.showForm = newStatus;
    },
    handleKeyPress(e) {
      if (e.code === "Enter") this.addList();
    },
    async addList() {
      let list = {
        id: nanoid(),
        name: this.newList,
        stored: false,
      };
      try {
        const response = await saveNewList(list);
        if (response.success) {
          this.handleClick();
          let updatedLists = [...this.lists];
          updatedLists.push(list);
          this.lists = updatedLists;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async removeList(id) {
      try {
        let result = await deleteList(id);
        if (result.success) {
          let updatedList = this.lists.filter((list) => list.id !== id);
          this.lists = updatedList;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async storeList(id) {
      try {
        let obj = {
          id: id,
          stored: true,
        };
        let result = await updateList(obj);
        if (result.success) {
          let updatedList = this.lists.filter((list) => list.id !== id);
          this.lists = updatedList;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
main {
  min-height: calc(100vh - 155px);
  position: relative;
}

.add-list-zone {
  position: absolute;
  right: 30px;
  top: -75px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  padding: 5px;
}

.add-list-zone > button {
  position: relative;
  z-index: 10;
}

.add-list-input-container {
  margin-right: 20px;
  overflow: hidden;
  position: relative;
}

.add-list-input {
  font-family: var(--primary-font);
  padding: 10px 25px;
  border: none;
  border-bottom: 1px solid var(--secondary-color);
  background-color: transparent;
  outline: none;
  font-size: 1.1em;
  text-align: end;
  transform: translateX(150%);
  transition: transform 0.5s ease;
}

.add-list-input-container > svg {
  position: absolute;
  right: -5px;
  top: 10px;
  color: var(--primary-color);
  cursor: pointer;
  transform: translateX(1000px);
  transition: transform 0.5s ease;
}

.add-list-input-container.active > .add-list-input,
.add-list-input-container.active > svg {
  transform: translateX(0);
  transition: transform 0.5s ease;
}
</style>
