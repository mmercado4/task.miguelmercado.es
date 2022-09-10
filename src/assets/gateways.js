import { API_URL } from "./constants";

//lists
const getAllLists = async () => {
  return fetcher(`${API_URL}/task/lists`);
};

const saveNewList = async (obj) => {
  let opts = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(obj),
  };
  return fetcher(`${API_URL}/task/lists`, opts);
};

const updateList = async (obj) => {
  let opts = {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(obj),
  };
  return fetcher(`${API_URL}/task/lists`, opts);
};

const deleteList = async (id) => {
  let opts = {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  };
  return fetcher(`${API_URL}/task/lists/${id}`, opts);
};

//task
const getTaskInOneList = async (list) => {
  return fetcher(`${API_URL}/task/tasks/list/${list}`);
};

///task/tasks/list/:list/taskcounter

const fetcher = async (url, opts = null) => {
  let data = await fetch(url, opts);
  let response = await data.json();
  return response;
};

export { getAllLists, saveNewList, deleteList, updateList, getTaskInOneList };
