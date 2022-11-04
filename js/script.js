// VUE

const { createApp } = Vue;

createApp({

  data(){
    return{
      logoImage: 'img/logo.png',
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
  }

}).mount('#app')