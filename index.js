const carrito = document.getElementByid("carrito");
const elementos1 = document.getElementById("lista-1");
const elementos2 = document.getElementById("losta-2");
const lista = document.querySelector("alista-carrito tbody");
const vaciarcarrito = document.getElementById("vaciar-carrito");

cargarEventlistenners();

function cargarEventlistenners() {
    elementos1.addEventListener("click", comprarelemento);
    elementos2.addEventListener("click", comprarelemento);
    carrito.addEventListener("click",eliminarelemeto);
    vaciarcarrito.addEventListener("click",vaciarcarrito);
}

function comprarelemento(e) {
    e.preventDefault();
    if(e.target.classlist.contains("agregar-carrito")) {
        const elemento = e.target.parentelement.parentelement;
        leerdatoselementos(elemento);
    }
}

function leerdatoselementos( elemento) {
    const infoelemento = {
        imagen: elemento.querySelector("img").src,
        titulo: elemento.querySelector("h3").textcontent,
        precio: elementos1.querySelector("precio").textcontent,
        id: elemento.querySelector("a").getatribute("data-id")
    }
    insertarcarrito(infoelemento);
}
