// VUE

const { createApp } = Vue;

createApp({

  // MY OBJECTS
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

  // MY FUNCTIION
  methods:{

    //remove task done from tasks-area
    removeTask(index){
      //empty error message
      this.errorMessage = '';

      //check if task is completed
      if(this.tasks[index].done){
        this.tasks.splice(index,1);

      //error message if task to remove is not completed
      }else{
        this.errorMessage = 'Wait a minute...You have to complete this task before to remove it.';
      }
    },

    //create task to add to tasks-area
    createTask(){
      //empty error message
      this.errorMessage = '';

      //check if task name is more than 5 characters
      if(this.newTaskName.length < 5){
        this.errorMessage = 'Task name must have at least 5 characters.';
      
      //create a new task using input  
      }else{
        const newTask = {
          name: this.newTaskName,
          done: false
        }
        //add new task to tasks-area
        this.tasks.unshift(newTask);
        this.newTaskName = '';
      }
    }
  }

}).mount('#app')