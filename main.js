const vowel = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat',
}
const {a,e,i,o,u} = vowel

// Variables para alamcenar y manipular resultados
let textInput = document.querySelector('.left__input')
let resultInitial = document.querySelector('.rigth__initial')
let result = document.querySelector('.rigth__result')

// Captura de los botones
let btnResult = document.querySelector('.rigth__button')
let btnEncrypt = document.getElementById('btn_encrypt');
let btnDecrypt = document.querySelector('#btn_decrypt');
let btnCopy = document.querySelector('#btn_copy');

// Función que remueve cracateres especiales
function removeCharacter(text){
    return text.normalize('NFD')
        .replace(/[\u0300-\u0301]/g, '')
        .replace(/[&/\#^+()$~%.,;_'":*¿?¿|\[\]<>\{\`\-}]/g, '');
}

// función que agrega o remueve una clase para ocultar o mostrar los resultados
function addRemoveClass(){
    resultInitial.classList.add('dnone')
    result.classList.remove('dnone')
    btnResult.classList.remove('dnone')
}

// Función que encripta un mensaje
function encrypt(){
    let text = textInput.value
    let message = removeCharacter(text)

    message = message.toLowerCase().
        replaceAll('e', e).      
        replaceAll('i', i).     
        replaceAll('a', a).
        replaceAll('o', o).     
        replaceAll('u', u)
        
    result.textContent = message
    addRemoveClass()
    textInput.value = ''
}

// Función que desencripta un mensaje
function decrypt(){
    let text = textInput.value    
    let message = removeCharacter(text)
    
    message = message.toLowerCase().
        replaceAll(a, 'a').
        replaceAll(e, 'e').      
        replaceAll(i, 'i').      
        replaceAll(o, 'o').      
        replaceAll(u, 'u') 

    result.textContent = message 
    addRemoveClass()
    textInput.value = ''
}

// Función para copiar texto. Esta a suvez, limpia todos los contenedores y los regresa a su valor inicial
function copyText(){
    let messageEncrypt = result.textContent
    navigator.clipboard.writeText(messageEncrypt)
    result.textContent = ''
    textInput.value = ''    
    resultInitial.classList.remove('dnone')
    result.classList.add('dnone')
    btnResult.classList.add('dnone')
    textInput.focus()
}

// S e encarga de capturar los eventos de los botones
function main(){
    btnEncrypt.onclick = encrypt;
    btnDecrypt.onclick = decrypt;
    btnCopy.onclick = copyText
}

// Ejecuta todo el programa
main()

