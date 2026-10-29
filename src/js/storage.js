
const url = new URL("https://juanpesao-633d6-default-rtdb.firebaseio.com/contacto34324234.json");

export async function recuperarDatos() {
  const datatype = await fetch(url);
  const datos = await datatype.json();
  if (!datos) {
    return [];
  } else {
    return datos;
  }
}


export async function guardarDatos(datos) {
  const datosJSON = JSON.stringify(datos);
  const datatype = await fetch(url, {
    method: "PUT",
    body: datosJSON,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await datatype.json();
  console.log(response);
}