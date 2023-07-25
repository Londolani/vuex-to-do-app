<template>
  <div>
    <h2>To do List</h2>
    <add-task></add-task>
    <list-task></list-task>
  </div>
</template>

<script>
import ListTask from './components/ListTask.vue'
import AddTask from './components/AddTask.vue'

export default {
  name: 'App',
  components: {
    ListTask,
    AddTask
  }, 
  
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
