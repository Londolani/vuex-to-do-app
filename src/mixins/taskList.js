import { mapGetters} from 'vuex';

export default{
    computed:{
        ...mapGetters(['getTaskListById','count']),
        taskList() {
            const taskId = this.$route.params.taskId;
            const task = this.getTaskListById(taskId); 
            //this.input = task.name+' ';
            return task;
        },
    }
}