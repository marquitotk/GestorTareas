(
    function()
    {
        //variables
        var lista=document.getElementById("lista"), 
         tareasInput=document.getElementById("tareainput"),
         btnNuevaTarea=document.getElementById("btn-agregar");
      
      //funciones
    var AgregarTarea=function()
                    {
                        var tarea = tareasInput.value;
                        var nuevatarea=document.createElement("li");
                        var enlace=document.createElement("a");
                        var contenido=document.createTextNode(tarea);
                        if(tarea==="")
                        {
                            tareasInput.setAttribute("placeholder","=> Agregar una Tarea Valida  <=");
                            tareasInput.className="error";
                            return false;
                        }
                        //agregar contenido al enlace --> a
                        enlace.appendChild(contenido);
                        //le establece un atributo --><a href ="#">contenido</a>
                        enlace.setAttribute("href","#");
                        // al li(viñeta) se va agregar contedio de <li><a href ="#">contenido</a></li> 
                        nuevatarea.appendChild(enlace);
                        //agregar nueva tarea a la lista 
                        lista.appendChild(nuevatarea);

                        tareasInput.value="";

                        for(var i=0;i<=lista.children.length-1;i++)
                        {
                          lista.children[i].addEventListener("click",function()
                          {
                            this.parantNode.removeChild(this);
                          }
                          );
                        }
                     };
                     var comprobarInput=function()
                     {
                       tareasInput.className="";
                       tareasInput.setAttribute("placeholder","-> Agregar una Tarea <-");
                     }

                     var eliminarTarea=function()
                     {
                       this.parantNode.removeChild(this);
                     }
                     //EVENTOS
                     tareasInput.addEventListener("click",comprobarInput);
                     btnNuevaTarea.addEventListener("click",AgregarTarea);
                     
                     for(var i=0;i<=lista.children.length-1;i++)
                     {
                         lista.children[i].addEventListener("click",eliminarTarea);
                     }

  }());