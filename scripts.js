// Mostrar la fecha y hora actual
function actualizarHora() {
    const fechaActual = new Date();
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const opcionesHora = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };

    const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesFecha);
    const horaFormateada = fechaActual.toLocaleTimeString('es-ES', opcionesHora);

    document.getElementById('hora-actual').textContent = `${fechaFormateada}, ${horaFormateada}`;
}

// Actualizar la hora cada segundo
setInterval(actualizarHora, 1000);
actualizarHora();

// Funcionalidad para el menú desplegable
document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector('.menu-toggle');
    const menu = document.getElementById('navbarMenu');

    // Escuchar el evento de clic en el botón de menú
    toggler.addEventListener('click', function () {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });
});