import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      count: 0,
      taskList:[
        {id: 0,name: 'buy groceries',done:false, description:' buying groceries for the month that will accomodate the whole house'},
        {id:1,name:'wash the car',done:false,description:'washing the car so that it stays clean and attractive'},
        {id:2,name:'play video games',done:false,description:'playing my favorite video games so i enjoy my free time'}
      ]
    }
  },
  mutations: {
    addTask(state,newTask) {
      state.taskList.push(newTask)
    },
    removeTask(state,taskId){
      state.taskList = state.taskList.filter((task)=> task.id !== taskId)
    },
    editTask(state,{taskId,updatedName}){
      const taskToUpdate = state.taskList.find((task) => task.id === taskId);
      if (taskToUpdate) {
        taskToUpdate.name = updatedName;
      }
      /*state.taskList.map( (task) => task.id !== taskId )//? state.taskList:{taskId,updatedName} )
      state.taskList.push(updatedName)
      /*
      state.taskList = state.taskList.filter((task)=> task.id !== taskId)
      state.taskList.push(updatedName)
      /*if (taskToUpdate) {
        //taskToUpdate.name = updatedName;
        state.taskList.push(updatedName)
      }*/
    },
    markTaskAsDone(state, taskId) {
        const taskToUpdate = state.taskList.find((task) => task.id === taskId);
        if (taskToUpdate) {
          taskToUpdate.done = !taskToUpdate.done;
        }
    }    
  },
  actions:{
    addTask({commit},newTask){
        commit('addTask',newTask)
    },
    removeTask({commit},taskId){
        commit('removeTask',taskId)
    },
    editTask({commit},{taskId,updatedName}){
        commit('editTask',{taskId,updatedName})
    },
    markAsDone({ commit }, taskId) {
        commit('markTaskAsDone', taskId);
    }
  },
  getters:{
    getTaskList: (state) => state.taskList,
    getTaskListById: (state) =>  (id) => {
        const task = state.taskList[id] ? state.taskList[id] : null;
        return task
    },
  },
})

export default store;

//const app = createApp(App)

//app.use(store)