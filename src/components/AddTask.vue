<template>
  <div >
    <form class="task-form" @submit.prevent="onSubmit">
      <label for="task">Task:</label>
      <input name="task" type="text" v-model="input" placeholder="Enter your task here">
      <label for="task">Task Description:</label>
      <textarea v-model="description" placeholder="Enter your task description here"></textarea>
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      input: '',
      description: '',
    };
  },
  methods: {
    ...mapActions(['addTask']),
    onSubmit() {
      if (this.input.trim() !== '') {
        const newTask = {
          id: new Date().toString(),
          description: this.description,
          done: false,
          name: this.input,
        };
        this.addTask(newTask);
      }
      this.input = '';
      this.description = '';
    },
  },
};
</script>

<style>
.task-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
textarea {
  width: 60%;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 2px solid #4caf50;
  border-radius: 4px;
}

button[type="submit"] {
  padding: 10px 20px;
  background-color: #4caf50;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #45a049;
}
</style>
