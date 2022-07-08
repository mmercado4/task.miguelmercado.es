import { API_URL } from "./constants";

//tasks
const getAllLists = async () => {
  let request = await fetch(`${API_URL}/task/lists`);
  let result = await request.json();

  return result;
};

export { getAllLists };
