const input = document.getElementById( 'inputdetarea')
const boton = document.querySelector('.botondeagregartarea')
const contenedor = document.querySelector('#contenedordetareas')
const frase = document.querySelector('.frasefinal')
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

boton.addEventListener('click' , agregartarea)

 


 function agregartarea (e){
     e.preventDefault();
       
                 text = input.value ;
                 if(text !== "")    {
          
                const li = document.createElement("li");
                const p = document.createElement("p");
                 p.textContent = text;
    
                   li.appendChild(p);
                   li.appendChild(botondelogrado());
                   li.appendChild(botondeborrar());
                
                   contenedor.prepend(li);
                   input.value = "";
                   frase.style.display = "none";
                                   }
      
                        }
     function botondelogrado () {
        const botonlogrado = document.createElement("button");
        botonlogrado.textContent = "✓";
        botonlogrado.className = "botonlogrado";
        botonlogrado.addEventListener("click" , cambiodecolor)
        function cambiodecolor(e)  {
            e.target.parentElement.style.background='#00FFE8'; 
            botonlogrado.style.background='#00FFE8';
            document.querySelector('.botonparaborrar').style.background='#0FFE8';
           
                                  }
                        return botonlogrado
                                }
     function botondeborrar() {
              const botonpb = document.createElement("button");
                    botonpb.textContent = "X";
                    botonpb.className = "botonparaborrar";
                    botonpb.addEventListener('click', creadordeboton )
        
                    function creadordeboton (e) {
                         const item = e.target.parentElement;
                         contenedor.removeChild(item);
                         const items = document.querySelectorAll("li");
                          if (items.length === 0) {
                                        frase.style.display = "block";
                                                  }
                                                };
                                  return botonpb;
                              }

        
 
