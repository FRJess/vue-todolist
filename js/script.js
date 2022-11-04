// VUE

const { createApp } = Vue;

createApp({

  data(){
    return{
      logoImage: 'img/logo.png',
      errorMessage: '',
      newTaskName:'',
      tasks:[
        {
          name: 'Comprare il pane',
          done: false,
        },
        {
          name: 'Studiare Vue',
          done: true,
        },
        {
          name: 'Chiamare mamma',
          done: false,
        }
      ]
    }
  },

  methods:{
    removeTask(index){
      this.errorMessage ='';
      if(this.tasks[index].done){
        this.tasks.splice(index,1);
      }else{
        // this.isAlertShow = this.errorMessage,
        this.errorMessage = 'Wait a minute...You have to complete this task before to remove it.';
        // this.alertClass = ;
      }
    },
    createTask(){
      this.errorMessage ='';
      if(this.newTaskName.length < 5){
        this.errorMessage = 'Task name must have at least 5 characters.';
      }else{
        const newTask = {
          name: this.newTaskName,
          done: false
        }
        this.tasks.unshift(newTask);
        this.newTaskName = '';
      }
    }

  }

}).mount('#app')