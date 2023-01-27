 console.log("mi edad")
let numero1= 18;
let numero2= 10;
let resultado= numero1+numero2;
console.log("la suma de numero1 y numero 2 es mi edad"+resultado);


document.getElementById("boton").onclick=function(params) {
   
    document.getElementById("frust").innerHTML = "intente abrir una imagen desde la funcion de javascrip y no puede hasta el momento";
}
/**document.getElementById("imagen").onclick=function name(params) {
    document.getElementById("demo").innerHTML="src=C:\Users\luisa\OneDrive\Escritorio\Fotos\nietos\Foto0017.jpg"
}*/
/**  
document.getElementById("boton_restart").addEventListener("click",function name(params) {
    console.log("hola mundo desde EventListener");
    
    document.getElementById("demo").innerHTML = "estamos probando el primer evento en js";
})*/
/**document.getElementById("boton").addEventListener("click",function(params) {
    console.log("hola mundo desde EventListene");
    document.getElementById("demo").innerHTML = "cel:2214888624";
})
*/
document.getElementById("boton_color").addEventListener("click",function(params) {
    document.body.style.backgroundColor="#FC0B0B"
});
document.getElementById("boton_default").addEventListener("click",function(params) {
    document.body.style.backgroundColor="#F5F7F5 "
});

 


const collection=document.getElementsByClassName("prueba");
for(let i=0;i<collection.length; i++){
    collection[i].style.backgroundColor="#1AF408 "
}
