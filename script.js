const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const telefono = document.getElementById("telefono")
const email = document.getElementById("email")
const pass = document.getElementById("contraseña")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <4){
        warnings += `• El nombre no es valido <br>`
        entrar = true
    }
    if(apellido.value.length <4){
        warnings += `• El apellido no es valido <br>`
        entrar = true
    }
    if(telefono.value.length <9){
        warnings += `• El numero no es valido <br>`
        entrar = true
    }    
    if(!regexEmail.test(email.value)){
        warnings += `• El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 6){
        warnings += `• La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "¡Registro Completo!"
    }
})