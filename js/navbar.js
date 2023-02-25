const navbar = document.getElementById("navbar");

let mostrarNavbar = document.createElement("div")
mostrarNavbar.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a id="navbar-logo" class="navbar-brand navbar" href="#"><img src="./img/leila-logo.png" id="navbar-imagen" class="animate__animated " alt="leila-logo"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse navPropia" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a id="irInicio" class="nav-link" href="#">Home</a>
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías</a>
            <ul class="dropdown-menu dropdown-menu-propio">
                <li><a class="dropdown-item" href="#">Pantalones</a></li>
                <li><a class="dropdown-item" href="#">Camisas</a></li>
                <li><a class="dropdown-item" href="#">Remeras</a></li>
                <li><a class="dropdown-item" href="#">Medias</a></li>
                <li><a class="dropdown-item" href="#">Camperas</a></li>
                <li><a class="dropdown-item" href="#">Otros</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Aiudaaa</a></li>
            </ul>
          </li> -->
          <li class="nav-item">
              <a class="nav-link" href="#">Ofertas</a>
          </li>
          <!-- <li class="nav-item">
              <a class="nav-link" href="#">Destacados</a>
          </li> -->
            <li class="nav-item">
            <a id="cargarProductos" class="nav-link" href="#">Cargar Productos</a>
          </li>

        </ul>
        <form id="formBuscar" class="d-flex" role="search">
            <input id="inputBuscar" class="form-control me-2" type="search" placeholder="Buscar por tipo">
            <button id="botonBuscar" class="btn btn-outline-success" type="button">Buscar</button>
        </form>

        <span id="span-carrito"><a id="chango" href="#"><img src="./img/carrito.png" id="icono-carrito" class="icono-cart" alt="carrito" title="Mostrar carrito"></a>
        </span>

      </div>
    </div>
    </nav>
`
navbar.append(mostrarNavbar)

const irInicio = document.getElementById("irInicio");
irInicio.addEventListener("click", () => {
  limpiarInner()
  mostrarProductos(productos);
})

const agregarItems = document.getElementById("cargarProductos");
agregarItems.addEventListener("click", () => {
  limpiarInner()
  verFormulario();
})

const navbarImagen = document.getElementById('navbar-imagen');
navbarImagen.addEventListener('click', () => {
  navbarImagen.classList.add('animate__hinge')
  setTimeout(() => {
    navbarImagen.classList.remove('animate__hinge')
  }, 3000)

  setTimeout(() => {
    navbarImagen.classList.add('animate__bounceInUp')
  }, 3000)

  setTimeout(() => {
    navbarImagen.classList.remove('animate__bounceInUp')
  }, 4000)
})