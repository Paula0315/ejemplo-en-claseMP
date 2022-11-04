var array;

function cargarpagina(){
 array = [ 
    {nombre:"Maria",codigo:"192034",doc:"1004898311",prog:"ing. de sistemas"},
    {nombre:"Maria",codigo:"192034",doc:"1004898311",prog:"ing. de sistemas"},
    {nombre:"Maria",codigo:"192034",doc:"1004898311",prog:"ing. de sistemas"},
 ];
}

function calcular (){
    var nombre = $("#nombre").val();
    for(let i=0; i<array.length; i++){
      if(nombre==array[i].nombre){
        console.log("EL NOMBRE ENCONTRADO ES:"+ nombre);
        break;
      }
      else{
          console.log("SU NOMBRE"+nombre+"NO FUE ENCONTRADO");
      }
    }
}