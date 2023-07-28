<template>
    <div>
        <router-link to="/add">
            <button class="add-button" @click="showForm">Add new Task</button>
        </router-link>
    <div class="card" v-for="task in taskList" :key="task.id">
      <div class="card-header" >
        <router-link :to="'/description/' + task.id">
            <strike v-if="task.done"><p>{{ task.name }}</p></strike>
            <p v-if="!task.done">{{ task.name }}</p>
        </router-link>
        <div class="buttons">
            <button class="done-button" @click="markAsDone(task.id)"> {{ task.done ? 'Undo':'Done'}}</button>
            <router-link :to="'/edit/'+ task.id">
                <button class="edit-button">Edit</button>
            </router-link>
            <button class="remove-button" @click="remove(task.id)">Remove</button>
        </div>
        <!--<form v-if="edit" class="task-form" @submit.prevent="editTaskName(task.id)">
            <input name="task" type="text" v-model="input">
            <button  type="submit">Update Task</button>
        </form>-->
      </div>
    </div>
    <router-view></router-view>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    props: ['name', 'id'],
    data(){
        return{
            input: this.name,
            edit:false
        }
    },
    computed:{
        ...mapGetters(['getTaskList','count']),
        taskList() {
            return this.getTaskList; 
        }
    },
    methods: {
        ...mapActions(['removeTask','editTask','markAsDone']),
        /*editTaskName(taskId) {
            this.editTask({ taskId:taskId, updatedName: this.input }); 
            this.edit = !this.edit;
            this.input='';
        },*/remove(taskId){
            this.removeTask(taskId)
        },
      /*editTask() {
        //this.input = this.name;
        this.$emit('newId',this.taskId);
        this.edit = !this.edit;
        this.newInput();
        this.input='';
      },*/
      newInput(){
        this.$emit('newInput', this.input);
      },
      showForm(){
        this.edit = !this.edit;
      }
    },
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    border-color: #4CAF50;
  }

  .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  
  p {
    font-size: 18px;
    margin: 0;
    padding: 10px;
    text-decoration: none;
  }
  
  .buttons {
    display: flex;
    align-items: center;
  }
  
  button {
    padding: 8px 16px;
    margin-left: 8px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .edit-button {
    background-color: green;
    color: #fff;
  }
  
  .remove-button {
    background-color: red;
    color: #fff;
  }
  
  .done-button {
    background-color: black;
    color: #fff;
  }

  .add-button{
    background-color: green;
    color: #fff;
    padding: 8px 16px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .task-form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  </style>
  