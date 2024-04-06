document.getElementById('registration-form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Validación de campos vacíos
    if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
        return;
    }

    // Validación de formato de correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        event.preventDefault();
        return;
    }

    // Mostrar mensaje de confirmación con detalles del registro
    var ticketType = document.getElementById('ticket-type').value;
    var confirmationMessage = 'Detalles de la compra:\n\n';
    confirmationMessage += 'Nombre: ' + name + '\n';
    confirmationMessage += 'Correo Electrónico: ' + email + '\n';
    confirmationMessage += 'Teléfono: ' + phone + '\n';
    confirmationMessage += 'Tipo de Entrada: ' + ticketType + '\n';

    alert(confirmationMessage);

    // Mostrar mensaje adicional de confirmación
    mostrarMensajeAdicional();

    // Evitar que el formulario se envíe realmente
    event.preventDefault();
});

// Función para mostrar el mensaje adicional de confirmación
function mostrarMensajeAdicional() {
    alert('Gracias por su compra. Hemos enviado un correo de confirmación.');
}
