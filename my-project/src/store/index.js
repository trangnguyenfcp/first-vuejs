import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const storeData = {
    state: {
        students: [
            {
              name: "Chang Chang",
              phone: "0773554340",
              gender: "female",
              class: "A",
              address: "Thua Thien Hue",
            },
            {
              name: "Phong Hoang Nhu",
              phone: "0764917603",
              gender: "male",
              class: "B",
              address: "Thua Thien Hue",
            },
            {
              name: "Ngoc Ngoc",
              phone: "09053553416",
              gender: "female",
              class: "A",
              address: "Da Nang",
            },
            {
              name: "Chang Chang",
              phone: "0773554340",
              gender: "female",
              class: "A",
              address: "Thua Thien Hue",
            },
            {
              name: "Phong Hoang Nhu 2",
              phone: "0764917603",
              gender: "male",
              class: "B",
              address: "Thua Thien Hue",
            },
            {
              name: "Ngoc Ngoc 2",
              phone: "09053553416",
              gender: "female",
              class: "A",
              address: "Da Nang",
            },
          ]
    },
    getters: {
        studentsClassA: state => state.students.filter(students => students.class === "A")
    },
    mutations: {
      DELETE_STUDENT (state) {
        state.students.splice(0,1)
      }
    }
  }
  
    const store  = new Vuex.Store(storeData);

    export default store