// 1. Modificar el texto y estilos
function modificarTexto() {
    let parrafo = document.getElementById("parrafo");
    parrafo.textContent = "Texto modificado con JavaScript!";
    parrafo.style.color = "red";
    parrafo.style.fontSize = "20px";
}

// 2. Agregar y eliminar elementos en la lista
function agregarElemento() {
    let lista = document.getElementById("lista");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Nuevo Elemento";
    lista.appendChild(nuevoElemento);
}

function eliminarElemento() {
    let lista = document.getElementById("lista");
    if (lista.children.length > 0) {
        lista.removeChild(lista.lastElementChild);
    }
}

function cambiarImagen() {
    // Obtiene el valor seleccionado en el <select>
    let nuevaImagen = document.getElementById("selectorImagen").value;
    
    // Cambia la imagen mostrada
    document.getElementById("imagen").src = nuevaImagen;
}

let caja = document.getElementById("caja");
caja.addEventListener("mouseover", function() {
    caja.classList.add("resaltado");
});

caja.addEventListener("mouseout", function() {
    caja.classList.remove("resaltado");
});