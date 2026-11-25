const EDAD_MINIMA = 14;

export const reglasRegistro = {
    usuario: campos => validarNombre(campos.usuario.value),
    correo: campos => validarEmail(campos.correo.value),
    password: campos => validarPassword(campos.password.value),
    repetir: campos => validarRepetirPassword(campos.repetir.value, campos.password.value),
    nacimiento: campos => validarFechaNacimiento(campos.nacimiento.value),
    acepto: campos => validarAceptar(campos.acepto.checked)
};

export const reglasContacto = {
    nombre: campos => validarNombre(campos.nombre.value),
    email: campos => validarEmail(campos.email.value),
    telefono: campos => validarTelefonoLlamada(campos.telefono.value, campos.llamar.checked),
    motivo: () => null,
    mensaje: campos => validarLongitud(campos.mensaje.value, campos.mensaje.minLength, campos.mensaje.maxLength)
};

export function validarObligatorio(valor) {
    if (valor.trim() === "") {
        return "Este campo es obligatorio.";
    }
    return null;
}

export function validarNombre(valor) {
    if (valor.trim().length < 3) {
        return "El nombre debe tener al menos 3 caracteres.";
    }
    return null;
}

export function validarEmail(valor) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patron.test(valor)) {
        return "Escribe un correo válido, por ejemplo nombre@correo.com.";
    }
    return null;
}

export function validarPassword(valor) {
    if (valor.length < 8) {
        return "La contraseña debe tener al menos 8 caracteres.";
    }
    if (!/[A-Z]/.test(valor)) {
        return "La contraseña debe incluir al menos una mayúscula.";
    }
    if (!/[0-9]/.test(valor)) {
        return "La contraseña debe incluir al menos un número.";
    }
    return null;
}

export function validarRepetirPassword(valor, password) {
    if (valor !== password) {
        return "Las contraseñas no coinciden.";
    }
    return null;
}

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mesesDiferencia = hoy.getMonth() - fechaNacimiento.getMonth();
    const todaviaNoCumple = mesesDiferencia < 0 ||
        (mesesDiferencia === 0 && hoy.getDate() < fechaNacimiento.getDate());
    if (todaviaNoCumple) {
        edad--;
    }
    return edad;
}

export function validarFechaNacimiento(valor) {
    if (valor === "") {
        return "Indica tu fecha de nacimiento.";
    }
    const nacimiento = new Date(valor);
    if (nacimiento > new Date()) {
        return "La fecha de nacimiento no puede ser futura.";
    }
    if (calcularEdad(nacimiento) < EDAD_MINIMA) {
        return "Debes tener al menos " + EDAD_MINIMA + " años para registrarte.";
    }
    return null;
}

export function validarAceptar(marcada) {
    if (!marcada) {
        return "Debes aceptar las condiciones para continuar.";
    }
    return null;
}

export function validarTelefono(valor) {
    if (valor.trim() === "") {
        return null;
    }
    const patron = /^(\+34)?[6-9][0-9]{8}$/;
    if (!patron.test(valor.replace(/\s/g, ""))) {
        return "Escribe un teléfono válido de 9 dígitos, por ejemplo 612345678.";
    }
    return null;
}

export function validarLongitud(valor, minimo, maximo) {
    const longitud = valor.trim().length;
    if (longitud < minimo) {
        return "El mensaje debe tener al menos " + minimo + " caracteres.";
    }
    if (longitud > maximo) {
        return "El mensaje no puede superar los " + maximo + " caracteres.";
    }
    return null;
}

export function validarTelefonoLlamada(telefono, llamar){
    if (llamar && telefono.trim() === ""){
        return "Indica un teléfono para que podamos llamarte.";
    }
    return validarTelefono(telefono);
}

