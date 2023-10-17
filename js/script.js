document.addEventListener("DOMContentLoaded", function () {  //  permitir cargar todo en el DOM => DOMContentLoaded 

    const nav = document.querySelector('#nav'); // nav => id="nav"
    const abrir = document.querySelector('#abrir'); // abrir => id="abrir"
    const cerrar = document.querySelector('#cerrar'); // cerrar => id="cerrar"
    let tarjeta = document.querySelector('#tarjeta'); // mostrar tarjeta => id="tarjeta"

    abrir.addEventListener('click', () => {
        nav.classList.add("visible");
        tarjeta.style.display = "none"
    });

    cerrar.addEventListener('click', () => {
        nav.classList.remove("visible");
        tarjeta.style.display = "flex"
    });

});