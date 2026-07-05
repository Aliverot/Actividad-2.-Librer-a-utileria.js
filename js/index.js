// Función automática para poner los paréntesis y guion al salir de la caja de teléfono
        function aplicarFormatoTelefono() {
            let campoTelefono = document.getElementById("telefono");
            let valor = campoTelefono.value;
            
            // Si cumple con los 10 dígitos exigidos, lo formateamos visualmente con tu función libre
            if (validarLongitud(valor, 10)) {
                campoTelefono.value = formatearTelefono(valor);
            }
        }

        // Función que se ejecuta al dar clic en "Registrarse"
        function procesarRegistro(event) {
            event.preventDefault(); // Evita que la página se recargue

            // Captura de valores
            let nombre = document.getElementById("nombre").value;
            let correo = document.getElementById("correo").value;
            let telefono = document.getElementById("telefono").value;
            let fechaNac = document.getElementById("fechaNacimiento").value;
            let pass = document.getElementById("password").value;
            let confPass = document.getElementById("confirmarPassword").value;

            // 1. Validar Nombre
            if (!soloLetras(nombre) || nombre.trim() === "") {
                alert("¡Error en el Nombre! Debe contener solo letras y no estar vacío.");
                return;
            }

            // 2. Validar Correo
            if (!validarCorreo(correo)) {
                alert("¡Error en el Correo! El formato ingresado no es válido.");
                return;
            }

            // 3. Validar Teléfono (quitamos el formato visual para medir los números puros)
            let numerosPuros = telefono.replace(/\D/g, ""); 
            if (!validarLongitud(numerosPuros, 10)) {
                alert("¡Error en el Teléfono! Debe contener exactamente 10 dígitos numéricos.");
                return;
            }

            // 4. Validar Fecha de Nacimiento
            if (fechaNac === "") {
                alert("Por favor, selecciona tu fecha de nacimiento.");
                return;
            }

            // 5. Validar Contraseña Segura
            if (!validarPassword(pass)) {
                alert("¡Contraseña insegura! Debe tener mínimo 8 caracteres, incluir al menos una mayúscula, una minúscula, un número y un carácter especial.");
                return;
            }

            // 6. Validar Coincidencia de Contraseñas
            if (!coincidenPasswords(pass, confPass)) {
                alert("¡Las contraseñas no coinciden! Por favor, verifica e intenta de nuevo.");
                return;
            }

            // SI TODO ESTÁ BIEN: Calculamos edad y mostramos la ventana modal obligatoria
            let edadCalculada = calcularEdad(fechaNac);
            let mensaje = document.getElementById("mensajeEdad");
            
            if (esMayorDeEdad(fechaNac)) {
                mensaje.innerHTML = "Tu edad calculada es <strong>" + edadCalculada + " años</strong>.<br><br>¡Felicidades! Eres mayor de edad y puedes completar tu registro con éxito.";
            } else {
                mensaje.innerHTML = "Tu edad calculada es <strong>" + edadCalculada + " años</strong>.<br><br>Lo sentimos, eres menor de edad. No cumples con los requisitos para registrarte.";
            }

            // Abrir la ventana modal cambiando el estilo CSS
            document.getElementById("ventanaModal").style.display = "flex";
        }

        function cerrarModal() {
            // Ocultar la ventana modal de nuevo
            document.getElementById("ventanaModal").style.display = "none";
        }