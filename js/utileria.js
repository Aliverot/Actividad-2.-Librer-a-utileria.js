// 1. Valida formato de correo electrónico
function validarCorreo(correo) {
    // Verifica que tenga texto, una @, más texto, un punto y texto final
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}   

// 2. Solo letras mayúsculas/minúsculas, acepta vocales acentuadas
function soloLetras(texto) {
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}

// 3. Validar longitud de un número 
function validarLongitud(numero, maxLongitud) {
    let textoNumero = numero.toString();
    return textoNumero.length === maxLongitud;
}

// 4. Número entero — calcula edad a partir de fecha de nacimiento
function calcularEdad(fechaNacimiento) {
    let fechaNac = new Date(fechaNacimiento);
    let fechaActual = new Date();    
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    let mes = fechaActual.getMonth() - fechaNac.getMonth();    
    // Si el mes actual es menor al mes de nacimiento, o si es el mismo mes pero el día de hoy es menor
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNac.getDate())) {
        edad--; 
    }
    return edad;
}

// 5. Validar si es mayor de edad
function esMayorDeEdad(fechaNacimiento) {
    let edad = calcularEdad(fechaNacimiento);
    return edad >= 18;
}

// 6. Validar contraseña segura (mayúscula, minúscula, número, carácter especial y min 8 caracteres)
function validarPassword(password) {
    let tieneMayuscula = /[A-Z]/.test(password);
    let tieneMinuscula = /[a-z]/.test(password);
    let tieneNumero = /[0-9]/.test(password);
    let tieneEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    let longitudValida = password.length >= 8;

    return tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial && longitudValida;
}

// SECCIÓN LIBRE

// 7. Confirmar si dos contraseñas son exactamente iguales
function coincidenPasswords(password, confirmarPassword) {
    return password === confirmarPassword;
}

// 8. Formatear un número de teléfono a (XXX) XXX-XXXX
function formatearTelefono(numero) {
    let texto = numero.toString();    
    if (texto.length === 10 && !isNaN(texto)) {
        return "(" + texto.substring(0, 3) + ") " + texto.substring(3, 6) + "-" + texto.substring(6, 10);
    }    
    return texto;
}