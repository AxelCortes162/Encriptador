const textArea = document.querySelector(".tex-area")
const mensaje = document.querySelector(".mensaje")
const seccionDerecha = document.querySelector(".cuadro-derecho")


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"
function btnEncriptar(){
    if(textArea.value.length == 0){
        swal("Debes ingresar un texto.","", "error")
    } else{
        if (!/^[a-z\s]+$/g.test(textArea.value)){
            swal("¡ERROR!", "Lee las indicaciones.", "error")
        }
        else{
            swal("Encriptación correcta", "", "success")
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    seccionDerecha.style.backgroundImage = "none"
    document.querySelector(".btn-encriptar") 
    document.getElementById("copy").style.display = "show"
    document.getElementById("copy").style.display = "inherit"
    document.getElementById("resultado").style.display = "show"
    document.getElementById("resultado").style.display = "inherit"
        }
    }
}

function btnDesencriptar(){
    if(textArea.value.length == 0){
        swal("Debes ingresar un texto.","", "error")
    } else{
        if (!/^[a-z\s]+$/g.test(textArea.value)){
            swal("¡ERROR!", "Lee las indicaciones.", "error")
        }
        else{
            swal("Desencriptación correcta", "", "success")
        
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = ""
    seccionDerecha.style.backgroundImage = "none"
    document.getElementById("copy").style.display = "show"
    document.getElementById("copy").style.display = "inherit"
    document.getElementById("resultado").style.display = "show"
    document.getElementById("resultado").style.display = "inherit"
        }
    }
}
function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
    
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
   
    }
    return stringDesencriptada
}

function copiar(){
    var contenido = document.querySelector(".mensaje");
    contenido.select()
    document.execCommand("cut") 
    swal("¡Bien!", "Se copió con exito", "success");
}

