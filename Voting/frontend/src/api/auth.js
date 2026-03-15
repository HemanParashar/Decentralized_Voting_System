import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

/* ---------- AUTH APIs ---------- */

// Login (admin / voter)
export const loginUser = (data) => {
  return API.post("/auth/login", data);
};

// Signup (admin / voter)
export const signupUser = (data) => {
  return API.post("/auth/signup", data);
};
