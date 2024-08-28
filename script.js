
// Función para encriptar el texto
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

//Función para desencriptar el texto
function desencriptarTexto(texto){
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

//Función para que cuando se seleccione el textarea se ponga en blanco
document.getElementById("mensaje").addEventListener("focus", function() {
    const textarea = this;
    if (textarea.value === "Ingrese el texto aquí...") {
        textarea.value = ""; // Eliminar el texto predeterminado
    }
});

/*/Función para limitar el input y que no se puedan poner letras mayusculas ni acentos
document.getElementById("mensaje").addEventListener("input", function() {
    const textarea = this;
    textarea.value = textarea.value
        .toLowerCase() // Convierte todo el texto a minúsculas
        .normalize("NFD") // Normaliza el texto para poder eliminar acentos
        .replace(/[\u0300-\u036f]/g, ""); // Elimina acentos
});
*/
// Listener para el botón "Encriptar"
document.querySelector(".encriptar").addEventListener("click", function() {
    const textarea = document.getElementById("mensaje");
    const mensajeOriginal = textarea.value;

    // Aplica la función de encriptación al texto
    const mensajeEncriptado = encriptarTexto(mensajeOriginal);

    // Muestra el mensaje encriptado en el div output_texto
    const outputDiv = document.querySelector(".salida__texto");
    outputDiv.querySelectorAll('.copiar').forEach(button => button.remove());
    outputDiv.querySelectorAll('.mensajeFinal').forEach(p => p.remove());

    const encriptedParagraph = document.createElement('p');
    encriptedParagraph.classList.add('mensajeFinal');
    encriptedParagraph.textContent = mensajeEncriptado;
    outputDiv.appendChild(encriptedParagraph);

    // Oculta los elementos del mensaje por defecto
    document.querySelector(".muneco").style.display = "none";
    document.querySelector(".salida__texto__titulo").style.display = "none";
    document.querySelector(".texto__solicitado").style.display = "none";

    // Muestra el botón "copiar"
    const botonCopiar = document.createElement('button');
    botonCopiar.classList.add('copiar');
    botonCopiar.textContent = 'Copiar';
    outputDiv.appendChild(botonCopiar);

    outputDiv.style.justifyContent = 'space-between';
    botonCopiar.style.cursor = 'pointer';

        //Función para el botón copiar
        document.querySelector('.copiar').addEventListener('click', function() {
        const botonCopiar = document.querySelector('.copiar');
        const mensajeFinal = document.querySelector('.mensajeFinal');
        navigator.clipboard.writeText(mensajeFinal.textContent);
        botonCopiar.textContent = 'Texto copiado ✔';
        });

});

// Listener para el botón "Desencriptar"
document.querySelector(".desencriptar").addEventListener("click", function() {
    const textarea = document.getElementById("mensaje");
    const mensajeOriginal = textarea.value;

    // Aplica la función de desencriptación al texto
    const mensajeDesencriptado = desencriptarTexto(mensajeOriginal);

    // Muestra el mensaje desencriptado en el div output_texto
    const outputDiv = document.querySelector(".salida__texto");
    outputDiv.querySelectorAll('.copiar').forEach(button => button.remove());
    outputDiv.querySelectorAll('.mensajeFinal').forEach(p => p.remove());

    const encriptedParagraph = document.createElement('p');
    encriptedParagraph.classList.add('mensajeFinal');
    encriptedParagraph.textContent = mensajeDesencriptado;
    outputDiv.appendChild(encriptedParagraph);

    // Oculta los elementos del mensaje por defecto
    document.querySelector(".muñeco").style.display = "none";
    document.querySelector(".output_texto-titulo").style.display = "none";
    document.querySelector(".output_texto-parrafo").style.display = "none";

    // Muestra el botón "copiar"
    const botonCopiar = document.createElement('button');
    botonCopiar.classList.add('copiar');
    botonCopiar.textContent = 'Copiar';
    outputDiv.appendChild(botonCopiar);

    outputDiv.style.justifyContent = 'space-between';
    botonCopiar.style.cursor = 'pointer';

        //Función para el botón copiar
        document.querySelector('.copiar').addEventListener('click', function() {
        const botonCopiar = document.querySelector('.copiar');
        const mensajeFinal = document.querySelector('.mensajeFinal');
        navigator.clipboard.writeText(mensajeFinal.textContent);
        botonCopiar.textContent = 'Texto copiado ✔';
        });

});


//

function reemplazarVocales(texto, vocales, reemplazos) {  
    var textoModificado = "";  

    // Iterar sobre cada carácter del texto original  
    for (var i = 0; i < texto.length; i++) {  
        var caracterActual = texto[i];  
        var encontrado = false;  

        // Comprobar si el carácter actual es una vocal  
        for (var j = 0; j < vocales.length; j++) {  
            if (caracterActual === vocales[j]) {  
                textoModificado += reemplazos[j]; // Reemplazar la vocal por la cadena correspondiente  
                encontrado = true;  
                break; // Salir del bucle si se hace un reemplazo  
            }  
        }  

        // Si no es una vocal, conservar el carácter original  
        if (!encontrado) {  
            textoModificado += caracterActual;  
        }  
    }  

    return textoModificado; // Retornar el texto modificado  
}  

function restaurarTexto(textoModificado, vocales, reemplazos) {  
    var textoOriginal = "";  

    // Iterar sobre cada carácter del texto modificado  
    var i = 0; // Usar un índice manual para iterar  
    while (i < textoModificado.length) {  
        var encontrado = false;  

        // Comprobar si los caracteres en textoModificado coinciden con alguna cadena de reemplazo  
        for (var j = 0; j < reemplazos.length; j++) {  
            var reemplazo = reemplazos[j];  
            // Verificar que la cadena actual en textoModificado comience con el reemplazo  
            if (textoModificado.substr(i, reemplazo.length) === reemplazo) {  
                textoOriginal += vocales[j]; // Restaurar la vocal correspondiente  
                i += reemplazo.length; // Mover el índice hacia adelante  
                encontrado = true;  
                break; // Salir del bucle si se hace una restauración  
            }  
        }  

        // Si no es un carácter de reemplazo, conservar el carácter original  
        if (!encontrado) {  
            textoOriginal += textoModificado[i];  
            i++;  
        }  
    }  

    return textoOriginal; // Retornar el texto restaurado  
}  

// Ejemplo de uso  
//var textoOriginal = "Hola mundo aeiou"; // Texto a modificar  
var textoOriginal = ""; // Texto a modificar  
var vocales = ['a', 'e', 'i', 'o', 'u']; // Lista de vocales  
var reemplazos = ['ai', 'enter', 'ines', 'ober', 'ufat']; // Lista de cadenas de reemplazo  

var textoModificado = reemplazarVocales(textoOriginal, vocales, reemplazos);  
//console.log(textoModificado); // "H1l4 m5nd0"  

var textoRestaurado = restaurarTexto(textoModificado, vocales, reemplazos);  
//console.log(textoRestaurado); // "Hola mundo"  
