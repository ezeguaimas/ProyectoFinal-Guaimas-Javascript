//ARRAY
const productos = []

//CONSTRUCTOR
class Producto {
    constructor(codigo, tipo, color, talle, stock, precio, foto) {
        this.codigo = codigo.toString().toUpperCase();
        this.tipo = tipo.toString().toUpperCase();
        this.color = color.toString().toUpperCase();
        this.talle = talle.toString().toUpperCase();
        this.stock = parseInt(stock);
        this.precio = parseFloat(precio);
        this.foto = foto;
    }
}

fetch('json/productos.json')
    .then((res) => res.json())
    .then((data) => {
        data.forEach((producto) => {
            productos.push(new Producto(producto.codigo, producto.tipo, producto.color, producto.talle, producto.stock, producto.precio, producto.foto));
        })
        mostrarProductos(productos)
    })

//CARRITO
let carrito = []

//ALMACENAR EN LS
const mandarAlLocalStorage = (clave, valor) => { localStorage.setItem(clave, valor) };
const carritoEnLocalStorage = JSON.parse(localStorage.getItem("carritoLs"));

//OPERADOR TERNARIO
carritoEnLocalStorage ? carrito = carritoEnLocalStorage : carrito = []