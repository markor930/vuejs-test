import Vue from 'vue'
import Vuex from 'vuex'
import User from './user'
Vue.use(Vuex)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

const state = {

    title: "Learn Vuex, the counter test",

    // 1. 在vuex-store中定義資料
    status: "線上",
    friend: "Mr. Huang",

    count: 0,

    axiosData: [],
}

/*computed*/
const getters = {

    getCountClick(state) {
        return state.count + "click(s)";
    }
}

/*call methods*/
const actions = {

    store_add(context) {
        context.commit('setAddCount')
    },

    store_less(context) {
        context.commit('setLessCount');
    },

    sendAxiosInfo(info) {
        info.commit('getAxiosData');
    },
}


/*methods*/
const mutations = {

    setAddCount(state) {
        state.count++;
    },

    setLessCount(state) {
        state.count--;
    },

    getAxiosData(data) {
        // 抓取10筆資料
        axios.get("https://randomuser.me/api/?results=10") //外部json
            .then(function (response) {
                //console.log(response); //顯示object - data
                data.axiosData = response.data.results;
                console.log(data.axiosData);
            })
            .catch(function (error) {
                // 抓取失敗
                console.log(error);
            });
    }

}

// 將每個vuex-store.js內 進行modules的集中與分類
const modules = {

    a: User,
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules
})