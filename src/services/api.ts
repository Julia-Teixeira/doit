import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

// link do vercel
// export const api = axios.create({
//   baseURL: "https://json-server-doit.vercel.app/",
// });
