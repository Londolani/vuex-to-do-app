import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      taskList:[
        {id: 1,name: 'buy groceries'},
        {id:2,name:'wash the car'},
        {id:3,name:'play video games'}
      ]
    }
  },
  mutations: {
    add(state,newTask) {
      state.taskList.push(newTask)
    },
    remove(state,taskId){
        state.taskList.filter((task)=> task.id !== taskId)
    }
  },
  actions:{
    add({commit},newTask){
        commit('add',newTask)
    },
    remove({commit},taskId){
        commit('remove',taskId)
    }
  },
  getters:{
    getTaskList: (state) => state.taskList,
  },
})

const app = createApp({App})

// Install the store instance as a plugin
app.use(store)