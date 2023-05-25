const texto_encriptar = document.querySelector(".textarea1")
const texto_encriptado = document.querySelector(".textarea2")


function btnEncriptar(){
        const Textoencriptado = encriptar(texto_encriptar.value);
        texto_encriptado.value = Textoencriptado;
}
function btnDesencriptar(){
        const Textoencriptado = desencriptar(texto_encriptar.value);
        texto_encriptado.value = Textoencriptado;
}

function btnCopiar(){
    var textoacopiar = document.getElementById("textarea2");
    textoacopiar.select()
    document.execCommand("copy")
}

function encriptar(mensaje){
    let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    mensaje = mensaje.toLowerCase()
    for(let i = 0; i < matrizcodigo.length; i++){
        if(mensaje.includes(matrizcodigo[i][0])){
            mensaje = mensaje.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1])
        }
    }
    return mensaje
}

function desencriptar(mensaje){
    let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    mensaje = mensaje.toLowerCase()
    for(let i = 0; i < matrizcodigo.length; i++){
        if(mensaje.includes(matrizcodigo[i][1])){
            mensaje = mensaje.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0])
        }
    }
    return mensaje
}

