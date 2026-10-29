import { guardarDatos, recuperarDatos } from "./storage"

let agenda=[]
inicio()

async function inicio(){
    agenda=await recuperarDatos()
    show()
}




function show() {

let salida=`<table>
       <thead>
       <th>Nombre</th>
       <th>Telefono</th>
       <th>Eliminar</th>
       <th>Editar</th>
       </thead>
       <tbody>
       `
         for (let elemento of agenda) {
            salida+=`
            <tr>
            <td>${elemento.nombre}</td>
            <td>${elemento.telefono}</td>
            <td><button onclick="eliminar(${elemento.id})">Eliminar</button></td>
            <td><a href="editarContacto.html#id=${elemento.id}">Editar</a></td>
            </tr>
            `
         }
         salida+=`</tbody></table>`
         document.querySelector("#salida").innerHTML=salida
}

function eliminar(id) {
    agenda=agenda.filter((elemento)=>elemento.id!=id);
    guardarDatos(agenda)
    show()
}

window.eliminar=eliminar