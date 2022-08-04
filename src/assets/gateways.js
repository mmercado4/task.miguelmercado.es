import { API_URL } from "./constants";

//tasks
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

export { getAllLists, saveNewList };
