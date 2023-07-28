<template>
    <div>
        <h4 v-if="taskList">{{ taskList.name }}</h4>
        <form class="task-form" @submit.prevent="editTaskName()">
            <input name="task" type="text" v-model="input">
            <button  type="submit">Update Task</button>
        </form>
    </div>
</template>

<script>
import taskList from '../mixins/taskList'
import { mapActions} from 'vuex';
export default {
    mixins: [taskList],
    data(){
        return{
            input: '',
        }
    },
    methods:{
        ...mapActions(['editTask']),
        editTaskName() {
            if (this.input.trim() !== '') {
                /*const newTask = {
                    id: this.$route.params.taskId,
                    description: this.description,
                    done: false,
                    name: this.input,
                };
                console.log('route id is '+this.$route.params.taskId)*/
                this.editTask({ taskId:this.$route.params.taskId, updatedName: this.input}); 
                this.input='';
            }
        }
    }
  };
  </script>