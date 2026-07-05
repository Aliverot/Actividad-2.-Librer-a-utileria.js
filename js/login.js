function procesarLogin(event) {
    // Evita que la página se recargue al enviar el formulario
    event.preventDefault(); 
    let correo = document.getElementById("correoLogin").value;
    let password = document.getElementById("passwordLogin").value;

    // 1. Validar el formato del correo usando utileria.js
    if (!validarCorreo(correo)) {
        alert("¡Error de formato! Por favor, ingresa un correo electrónico válido.");
        return; 
    }

    // 2. Validar que la contraseña cumpla con los requisitos usando utileria.js
    if (!validarPassword(password)) {
        alert("¡Contraseña no válida! Recuerda que debe tener mínimo 8 caracteres, al menos una mayúscula, una minúscula, un número y un carácter especial.");
        return; 
    }

    // Si ambas validaciones pasan correctamente
    alert("Validaciones pasadas correctamente.");    
}