// authService.js
import db from "../../mock/db.json";

export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const user = db.users.find(u => u.email === email && u.password === password);
    if (user) {
      resolve({ user, token: "fake-jwt-token" });
    } else {
      reject(new Error("Invalid credentials"));
    }
  });
};

export const signupUser = (data) => {
  return new Promise((resolve, reject) => {
    const exists = db.users.some(u => u.email === data.email);
    if (exists) return reject(new Error("User already exists"));
    const user = { id: db.users.length + 1, ...data };
    db.users.push(user); // لاحظ: دي بس في الذاكرة، مش بتعدل JSON file فعلياً
    resolve({ user, token: "fake-jwt-token" });
  });
};

export const getCurrentUser = (token) => {
  return new Promise((resolve, reject) => {
    if (token === "fake-jwt-token") resolve({ user: db.users[0] });
    else reject(new Error("Invalid token"));
  });
};
