import { getToken, setToken, removeToken } from "@/utils/auth";

//存储用户的令牌和角色信息
const state = {
  token: getToken(),
  roles: [],
  // 其他用户信息
};
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
};
const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username } = userInfo;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "admin" || username === "jerry") {
          commit("SET_TOKEN", username);
          setToken(username);
          resolve();
        } else {
          reject("用户名、密码错误");
        }
      }, 100);
    });
  },
  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const roles = state.token === "admin" ? ["admin"] : ["editor"];
        commit("SET_ROLES", roles);
        resolve({ roles });
      }, 1000);
    });
  },
  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      commit("SET_TOKEN", "");
      commit("SET_ROLES", []);
      removeToken();
      resolve();
    });
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
