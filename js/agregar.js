const renderizarFormulario = document.getElementById("agregarProducto");

function verFormulario() {

    let mostrarFormulario = document.createElement("div")
    mostrarFormulario.innerHTML = `
            <form id="form-ingresar">
                <div class="form-titulo">
                    <label class="form-label h2">Ingrese un nuevo producto</label>
                </div>
                <hr>
                <div class="mb-3">
                    <input id="input-codigo" class="form-control me-2" type="text" placeholder="Ingrese el código de producto" required>
                    <br>
                    <input id="input-tipo" class="form-control me-2" type="text" placeholder="Tipo de producto" required>
                    <br>
                    <input id="input-color" class="form-control me-2" type="text" placeholder="Color" required>
                    <br>
                    <select id="input-talle" class="form-select" required>
                        <option selected disabled>Seleccione el talle</option>
                        <option value="s">Small</option>
                        <option value="m">Medium</option>
                        <option value="l">Large</option>
                    </select>
                    <br>
                    <input id="input-stock" class="form-control me-2" type="text" placeholder="Stock" required>
                    <br>
                    <input id="input-precio" class="form-control me-2" type="text" placeholder="Precio" required>
                    <br>
                    <input id="input-foto" class="form-control me-2" type="text" placeholder="Link de la foto del producto" required>
                    <br>
                </div>
                <hr>
                <button id="botonForm" class="btn btn-success btn-lg" type="submit">Ingresar Producto</button>
                <button id="botonForm" class="btn btn-danger" type="reset">Reset</button>
            </form>
        `
    renderizarFormulario.append(mostrarFormulario);

    const formIngresar = document.getElementById("form-ingresar");
    formIngresar.addEventListener("submit", (event) => {
        event.preventDefault()

        Swal.fire({
            title: 'Los datos ingresados son correctos?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, son correctos',
            cancelButtonText: 'No, quiero modificarlos'
        }).then((respuesta) => {

            if (respuesta.isConfirmed) {
                const inputCodigo = document.getElementById("input-codigo");
                const inputTipo = document.getElementById("input-tipo");
                const inputColor = document.getElementById("input-color");
                const inputTalle = document.getElementById("input-talle");
                const inputStock = document.getElementById("input-stock");
                const inputPrecio = document.getElementById("input-precio");
                const inputFoto = document.getElementById("input-foto");

                productos.push(new Producto(inputCodigo.value, inputTipo.value, inputColor.value, inputTalle.value, inputStock.value, inputPrecio.value, inputFoto.value));
                mandarAlLocalStorage("productosLs", JSON.stringify(productos));
                document.getElementById('form-ingresar').reset();

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Producto ingresado correctamente!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    })
}