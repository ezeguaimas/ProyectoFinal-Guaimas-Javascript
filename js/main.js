const tituloH1 = document.getElementById("tituloH1")
const titulo = "Tienda de Cosas Random"
let letra = 0;

let letraTemp = setInterval(function () {
    let textoActual = tituloH1.innerHTML;
    textoActual += titulo[letra];
    tituloH1.innerHTML = textoActual;
    letra++;
    letra >= titulo.length && clearInterval(letraTemp);
}, 130);

const cardProducto = document.getElementById("contenedorProductos")

function mostrarProductos(arrayProductos) {
    arrayProductos.forEach(producto => {
        let productoMostrado = document.createElement("div")
        productoMostrado.innerHTML = `
    <div id="cardItem" class="cardItem">
        <div id="cardBody" class="card" style="width: 18rem;">
            <img src="${producto.foto}" class="card-img-top card-imagen" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.tipo}</h5>
                <p class="card-text">Color ${producto.color}</p>
                <h6 class="card-title card-precio">$${producto.precio}</h6>
                <hr>
                <button id=${producto.codigo} class="btn btn-primary text-center">Agregar al carrito</button>
            </div>
        </div>
    </div>
    `
        cardProducto.append(productoMostrado);

        const agregarAlCarrito = document.getElementById(producto.codigo)

        agregarAlCarrito.addEventListener("click", () => {
            meterAlCarrito(producto),
            mandarAlLocalStorage("carritoLs", JSON.stringify(carrito)),

                Toastify({
                    text: 'Producto agregado al carrito!',
                    duration: 2000,
                    gravity: 'bottom',
                    position: 'right'
                }).showToast();
        })
    })
}
function limpiarInner() {
    document.getElementById("contenedorProductos").innerHTML = ``;
    document.getElementById("carritoAbajo").innerHTML = ``;
    document.getElementById("busqueda").innerHTML = ``;
    document.getElementById("titulo-carrito").innerHTML = ``;
    document.getElementById("comprar").innerHTML = ``;
    document.getElementById("agregarProducto").innerHTML = ``;
    document.getElementById("paymentBrick_container").innerHTML = ``;
}