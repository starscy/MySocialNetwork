import * as axios from "axios";

const api = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "2b28b903-7304-4d2f-a35c-890a6721433e",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 50) {
    return api
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
};

export const authApi = {
  getAuth() {
    return api.get("auth/me").then((response) => {
      return response.data;
    });
  },
  logIn(email, password, remember) {
    return api
      .post("auth/login", { email, password, remember })
      .then((response) => {
        return response.data;
      });
  },
  logOut() {
    return api.delete("auth/login").then((response) => {
      return response.data;
    });
  },
};

export const followUnfollow = {
  follow(userId) {
    return api.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },

  unfollow(userId) {
    return api.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const profile = {
  getProfile(userId) {
    return api.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  getStatus(userId) {
    return api.get(`profile/status/${userId}`).then((response) => {
      return response.data;
    });
  },
  setStatus(status) {
    return api.put(`profile/status`, { status: status }).then((response) => {
      return response.data;
    });
  },
};
