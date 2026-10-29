import { guardarDatos, recuperarDatos } from "./storage"

let agenda=[]
inicio()

async function inicio(){
    agenda=await recuperarDatos()
    inicializar();
}

let elid = getIdFromHash();


function getIdFromHash() {
  const hash = new URLSearchParams(location.hash.slice(1));
  return hash.get("id");
}

function inicializar() {

  // nombre y telefono de ese id
  const elemento = agenda.find((elemento) => elemento.id == elid);

  document.querySelector("#nombre").value = elemento.nombre;
  document.querySelector("#telefono").value = elemento.telefono;
}

document.querySelector("#formulario").addEventListener("submit",(ev)=> {
  ev.preventDefault();
  
const obj={
        id:elid,
        nombre:document.querySelector("#nombre").value,
        telefono:document.querySelector("#telefono").value
    }
    // eliminar el id a mano
    agenda=agenda.filter((elemento)=>elemento.id!=elid);
    agenda.push(obj)
    guardarDatos(agenda)
    alert("Los datosadfioasklfaslk djflk asdjf")
});

