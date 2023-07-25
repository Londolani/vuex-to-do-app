<template>
    <div>
      <form class="task-form" @submit.prevent="addTask">
        <label for="task">Task:</label>
        <input name="task" type="text" v-model="input" placeholder="Enter your task here">
        <button type="submit">Add Task</button>
      </form>
    </div>
</template>
  
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      input: ''
    }
  },
  methods: {
    ...mapActions(['addTask']),
    addTask() {
      if(this.input.trim() !==''){
        const newTask = {
        id : new Date().toString(),
        name: this.input
      };
      this.addTask(newTask)
      }
      this.input = '';
    }
  }
}
</script>
  
  <style>
  .task-form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
    margin-right: 10px;
  }
  
  input[type="text"] {
    width: 60%;
    padding: 10px 20px;
    margin-right: 10px;
    box-sizing: border-box;
    border: 2px solid #4CAF50;
    border-radius: 4px;
  }
  
  button[type="submit"] {
    padding: 10px 20px;
    background-color: #4CAF50;
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #45a049;
  }
  </style>
  