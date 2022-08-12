import { API_URL } from "./constants";

//lists
const getAllLists = async () => {
  let request = await fetch(`${API_URL}/task/lists`);
  let result = await request.json();

  return result;
};

const saveNewList = async (obj) => {
  let opts = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(obj),
  };
  let response = await fetch(`${API_URL}/task/lists`, opts);
  let data = await response.json();
  return data;
};

const deleteList = async (id) => {
  let opts = {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  };
  let response = await fetch(`${API_URL}/task/lists/${id}`, opts);
  let data = await response.json();

  return data;
};

export { getAllLists, saveNewList, deleteList };
