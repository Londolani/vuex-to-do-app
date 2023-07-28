<template>
    <div>
        <div v-if="taskList" class="task-details">
            <h3> Task</h3>
            <p class="task-name">{{ taskList.name }}</p>
            <h3>Description</h3>
            <p class="task-description">{{ taskList.description }}</p>
        </div>
        <button class="back-button" @click="$router.push('/')">Back to Home</button>
    </div>
</template>

<script>
  import taskList from '../mixins/taskList'
  export default {
    mixins: [taskList],
  };
  </script>

<style scoped>
.back-button{
    background-color: green;
    color: #fff;
    padding: 8px 16px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
.task-details {
  padding: 20px;
  border: 1px solid green;
  border-radius: 5px;
  background-color: white;
  margin: 20px auto;
  max-width: 400px;
}

.task-details h3 {
  font-size: 18px;
  margin-bottom: 5px;
  color: green;
}

.task-details .task-description {
  font-size: 16px;
}
</style>




