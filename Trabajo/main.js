document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío automático del formulario
    validateForm();
});

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const nickname = document.getElementById("nickname").value.trim();
    const mail = document.getElementById("mail").value.trim();
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;
    const birthdate = document.getElementById("birthdate").value;
    const address = document.getElementById("adress").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón para validar correo
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,18}$/; // Patrón para contraseña

    // Validar campos obligatorios
    if (!name || !nickname || !mail || !pass1 || !pass2 || !birthdate) {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    // Validar formato del correo
    if (!emailRegex.test(mail)) {
        alert("Por favor, ingresa un correo válido.");
        return;
    }

    // Validar contraseñas iguales
    if (pass1 !== pass2) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Validar formato de contraseña
    if (!passwordRegex.test(pass1)) {
        alert("La contraseña debe tener entre 6 y 18 caracteres, al menos un número y una mayúscula.");
        return;
    }

    // Validar edad mínima (13 años)
    const birthDate = new Date(birthdate);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 13) {
        alert("Debes tener al menos 13 años para registrarte.");
        return;
    }

    alert("Formulario validado correctamente. ¡Gracias por registrarte!");
}
