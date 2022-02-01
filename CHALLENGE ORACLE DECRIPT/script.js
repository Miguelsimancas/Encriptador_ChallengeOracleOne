function encriptar() { // esta funcion toma los valores ingresados en la caja1 y los encripta
    var texto = document.getElementById("input-texto").value;
    var encriptado = texto.replace(/[eèêëé]/gi,'enter').replace(/[iíìîï]/gi,'imes').replace(/[oóòôõö]/gi,'ober').replace(/[aáàâãä]/gi,'ai').replace(/[uùûüú]/gi,'ufat');
    document.getElementById("msg").value = encriptado;

    if (texto == "") { 
        alert(" \uD83D\uDE08 No has ingresado nada para encriptar");
        return true;
    }
}

function desencriptar () {
        var texto2 = document.getElementById("input-texto").value;
        var desencriptar = texto2.replace(/ai/gi,'a').replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ober/gi,'o').replace(/ufat/gi,'u');
    
        document.getElementById("msg").value = desencriptar;
}

function copiar() {
    var paraCopiar = document.getElementById("msg");

    paraCopiar.select();
    document.execCommand('copy');
    alert('\uD83D\uDC4D Copiado!');

}


/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/