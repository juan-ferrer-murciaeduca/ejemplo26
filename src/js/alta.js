import { guardarDatos, recuperarDatos } from "./storage";

let agenda=[]
inicio()

async function inicio(){
    agenda=await recuperarDatos()
}

document.querySelector("#formulario").addEventListener("submit",(ev)=> {
    ev.preventDefault();

    const obj={
        id:Date.now(),
        nombre:document.querySelector("#nombre").value,
        telefono:document.querySelector("#telefono").value
    }

    agenda.push(obj)
    guardarDatos(agenda)

    alert("se ha insertado")

        // document.querySelector("#nombre").value=""
        // document.querySelector("#telefono").value=""
    console.log(agenda)
});