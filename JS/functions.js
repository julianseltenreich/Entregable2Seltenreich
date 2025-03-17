//funciones
import { productosTotales } from './clases.js';
import { getInfoStorage, setInfoStorage, clearInfoStorage, removeInfoStorage } from './storage.js';

let carrito = [];
export function productosEnHtml(){
  const contenedor = document.getElementById('articulos');
  productosTotales.forEach((producto) =>{ 
     const card = document.createElement('div');
     card.classList.add('card');
     card.innerHTML = `
           <img src= '${producto.img}' alt='${producto.nombre}' class='productoImg'>
           <h3>${producto.nombre}</h3>
           <p>Precio: ${producto.precio} USD</p>
           <p>Color: ${producto.color}</p>
           <p>Memoria: ${producto.memoria}</p>
           <button class='botonCompra'>Comprar</button>
           `
    contenedor.appendChild(card)
    const boton = card.querySelector('.botonCompra')
    boton.addEventListener('click', () => agregarAlCarrito(producto));
    

}
);
}

export function cargarCarrito() {
  const carritoStorage = getInfoStorage('carrito');
  if (carritoStorage) {
    carrito = carritoStorage; 
  }
  actualizarCarrito();
}


export function actualizarCarrito(){
  const carritoItems = document.getElementById('carritoItems');
  const totalCarrito = document.getElementById('totalCarrito');
  const carritoVacio = document.getElementById('carritoVacio');
 


  carritoItems.innerHTML = '';
  if (carrito.length === 0){
    carritoVacio.style.display = 'block';
    totalCarrito.textContent = '$0.00';
    return;
  }
  carritoVacio.style.display = 'none';
  let total = 0;
  carrito.forEach((producto, index) => {
    const item = document.createElement('div');
    item.classList.add('carritoItem');
    item.innerHTML = `
        <p> ${producto.nombre} , ${producto.precio} USD </p>
        <button class='botonQuitar' data-index="${index}"><i class="fa-solid fa-trash"></i></button>
    `;
    carritoItems.appendChild(item);
    total += producto.precio;
  });
  totalCarrito.innerText = `Total: $${total} USD`;
  const botonesQuitar = document.querySelectorAll('.botonQuitar');
  botonesQuitar.forEach((boton) => {
    boton.addEventListener('click', (e) => quitarProducto(e.target.dataset.index));
  });
}


export function agregarAlCarrito(producto){
  carrito.push(producto);
  setInfoStorage('carrito', carrito);
  actualizarCarrito();
  actualizarContadorCarrito();
}
export function quitarProducto(index) {
  carrito.splice(index, 1);
  removeInfoStorage('carrito', carrito);
  actualizarCarrito();
  actualizarContadorCarrito();

}
export function toggleSidebar(){
  const sidebar = document.getElementById('sidebar');
  const carritoBtn = document.getElementById('carritoBtn');
  sidebar.classList.toggle('mostrarSidebar');
  carritoBtn.classList.toggle('ocultarSidebar');
    
}

export function cerrarCarrito(){
  const sidebar = document.getElementById('sidebar');
  const carritoBtn = document.getElementById('carritoBtn');
  sidebar.classList.remove('mostrarSidebar');
  carritoBtn.classList.remove('ocultarSidebar');
}

export function vaciarCarrito(){
  carrito = [];
  clearInfoStorage();
  actualizarCarrito();
  actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
  const contador = document.getElementById('contadorCarrito');
  if (contador) {
    contador.textContent = carrito.length;
    contador.style.display = carrito.length > 0 ? 'inline' : 'none';
  }
}
