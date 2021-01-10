import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    //存放状态
    username: "foo",
    age: 18,
  },
  mutations: {
    add(state) {
      state.age += 2;
    },
  },
  actions: {
    addCountAction(context) {
      context.commit("add");
    },
  },
});
export default store;
