// Tenemos un li de productos

const productos = [ //Este es un array de objetos
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

//console.log(productos.length);

const listaParaImprimir = document.getElementById('lista-de-productos').value;//Se le cambia el get por uno que traiga por ID 
const productosDelCliente = document.getElementById('nombredeInput').value; //Trae los datos correctamente 

// console.log(li);
// console.log(suinpiut);

// for (let i = 0; i < productos.length; i++) { //Se comenta codigo extra que no relaiza ninguna funcionalidad maravillosa
//   var d = document.createElement("div")
//   d.classList.add("producto")

//   var ti = document.createElement("p")
//   ti.classList.add("titulo")
//   ti.textContent = productos[i].nombre
  
//   var imagen = document.createElement("img");
//   imagen.setAttribute('src', productos[i].img);

//   d.appendChild(ti)
//   d.appendChild(imagen)

//   li.appendChild(d)

// }

// displayProductos(productos);
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = productosDelCliente.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}
const filtrado = (producto = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  