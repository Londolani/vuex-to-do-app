<template>
    <div>
    <div class="card">
      <div class="card-header">
        <strike v-if="strike"><p>{{ name }}</p></strike>
        <p v-if="!strike">{{ name }}</p>
        <div class="buttons">
            <button class="done-button" @click="updateStatus"> {{ strike ? 'Undo':'Done'}}</button>
            <button class="edit-button" @click="showForm">Edit</button>
            <button class="remove-button" @click="removeTask(id)">Remove</button>
        </div>
      </div>
    </div>
    <form v-if="edit" class="task-form" @submit.prevent="editTask">
        <input name="task" type="text" v-model="input">
        <button  type="submit">Update Task</button>
    </form>
    </div>
  </template>
  
  <script>
  export default {
    props: ['name', 'id'],
    data(){
        return{
            strike:false,
            input: this.name,
            edit:false
        }
    },
    methods: {
      editTask() {
        //this.input = this.name;
        this.$emit('newId',this.taskId);
        this.edit = !this.edit;
        this.newInput();
        this.input='';
      },
      newInput(){
        this.$emit('newInput', this.input);
      },
      removeTask(id) {
        this.$emit('removeTask', id);
      },
      updateStatus(){
        this.strike = !this.strike;
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
  .task-form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  </style>
  