// VUE

const { createApp } = Vue;

createApp({

  data(){
    return{
      logoImage: 'img/logo.png',
      errorMessage: '',
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
        this.errorMessage = 'You have to complete this task before to remove it '
      }
    }

  }

}).mount('#app')