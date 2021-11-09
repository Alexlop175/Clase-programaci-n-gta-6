function cambiabeige(){
   document.getElementById("fondo").style.backgroundColor="beige";
}

function cambiablanco(){
   document.getElementById("fondo").style.backgroundColor="white";
}

function cambiaceleste(){
   document.getElementById("fondo").style.backgroundColor="lightblue"
}

function agregar(){
   var Lista = document.getElementById("lista");
   var Dato  = document.getElementById("dato").value;
   var li = document.createElement("li");
   li.textContent = Dato;
   Lista.appendChild(li);
}

function eliminar(){
   var Lista = document.getElementById("lista");
   Lista.removeChild(lista.lastElementChild);
}