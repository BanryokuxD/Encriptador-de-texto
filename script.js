const textArea=document.querySelector(".textArea");
const mensaje=document.querySelector(".mensaje");


function encriptar (stringEncriptada){
    var matrizLetras = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for (var i = 0;i<matrizLetras.length;i++){
       
        if(stringEncriptada.includes(matrizLetras[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizLetras[i][0],matrizLetras[i][1])
        }
    }
    return stringEncriptada

}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""
    mensaje.style.backgroundImage = "none"
}

function desencriptar (stringDesenncriptada){
    var matrizLetras = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesenncriptada = stringDesenncriptada.toLowerCase()

    for (var i = 0;i<matrizLetras.length;i++){
       
        if(stringDesenncriptada.includes(matrizLetras[i][1])){
            stringDesenncriptada = stringDesenncriptada.replaceAll(matrizLetras[i][1],matrizLetras[i][0])
        }
    }
    return stringDesenncriptada

}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""
    
}

const $btn =document.getElementById("btn");

$btn.addEventListener('click', e=>{
    mensaje.select();
    document.execCommand('copy');

})