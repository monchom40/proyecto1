var app = new Vue ({

    el: '#app' ,
    data: {

        titulo: 'Lista de tareas',
        tareas: [

            {
               texto: 'Aprender Vue 2',
               terminada: false
            },
            {
                texto: 'Aprender Angular 2',
                terminada: false
            },
            {
                texto: 'Aprender Ionic 2',
                terminada: false
             },
             {
                texto: 'Aprender Webdev 25 Gold',
                terminada: false
             }





        ],
        nuevaTarea: ''


    },
    methods: {

        agregarTarea: function() {
           var texto =  this.nuevaTarea.trim()  
           if (texto) {
               
              this.tareas.push({

                   texto: texto,
                   terminada : false

              })

              this.nuevaTarea = '';
             
           }
        },
        
        borrar: function(indice){
            this.tareas.splice(indice,1)
          }
        
    }



})