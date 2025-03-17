import { productosTotales } from './clases.js';
import { productosEnHtml, cerrarCarrito, toggleSidebar, vaciarCarrito, cargarCarrito} from './functions.js'


const header = document.querySelector('header');
header.innerHTML = `<h1>Tienda Apple <i class="fa-brands fa-apple"></i></h1>`;


//crear boton carrito
const carritoBtn= document.createElement('button');
carritoBtn.className ='carritoBtn';
carritoBtn.id = 'carritoBtn';
carritoBtn.innerHTML = `<i class="fas fa-shopping-cart"></i> <span id="contadorCarrito">0</span>`;
const main = document.querySelector('main');
main.appendChild(carritoBtn);

//crear sidebar 
const sidebar = document.createElement('div');
sidebar.className ='sidebar';
sidebar.id= 'sidebar';
sidebar.innerHTML =`
<div class="sidebarContainer">
   <button class="closeBtn" id="closeBtn"> <i class="fas fa-times"></i>
   </button>
   <h2>Carrito de compras</h2>
   <div id="carritoVacio" style="display: none;">El carrito está vacío</div>
   <div id="carritoItems"></div>
   <div id="totalCarrito">Total:<div id="totalCarrito">Total: $0 USD</div></div>
   <button id="comprarBtn">Comprar</button>
   <button id="vaciarBtn">Vaciar carrito</button>
</div>
`
document.body.appendChild(sidebar)
//abrir carrito
const carritoBoton = document.getElementById('carritoBtn')
carritoBoton.addEventListener('click', toggleSidebar)
//cerrar carrito
const closeBtn = document.getElementById('closeBtn')
closeBtn.addEventListener('click', cerrarCarrito)


const vaciarBtn = document.getElementById('vaciarBtn');
vaciarBtn.addEventListener('click', vaciarCarrito);



productosEnHtml(productosTotales)
cargarCarrito();
