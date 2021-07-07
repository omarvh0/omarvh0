let empezar = document.getElementById('empezar')
let cont_inp_comp = document.getElementById('cont-inp-comp')
let siguiente = document.getElementById('siguiente')
let comprobar = document.getElementById('comprobar')
let space = document.getElementById('spaceForProblems')
let input = document.getElementById('input')
let spaceResolution = document.getElementById('spaceForResolution')
let correccion = document.getElementById('correcion')
let minHtml = document.getElementById('minutos')
let segHtml = document.getElementById('segundos')
let time = document.getElementById('time')

let number

let minutos = 2
let segundos = 0
let once = true

let idTiempo

let apretado = false
let apretSolucion = false
let once2 = false

let showResolution1
let godOrBad 

let rpta

let lenghtInicial = problemasPucp.length

let cont = 0

let buenas = 0
let malas = 0
let blanco = 0

empezar.addEventListener('click', empezarF)
siguiente.addEventListener('click', siguienteF)
comprobar.addEventListener('click', comprobarF)

// boton empezar
function empezarF() {
    empezar.style.display = 'none'
    cont_inp_comp.style.display = 'flex'
    siguiente.style.display = 'inline'

    siguienteF()
}


// boton siguiente
function siguienteF() {
    if(problemasPucp.length > 0) {

        comprobar.style.display = 'inline'

        if((apretado == false || apretSolucion == false) && once2 == true) {
            rpta = input.value.toLowerCase().trim()
            acumulacionBuenasMalasBlanco()

            problemasPucp.splice(number, 1)
            cont++
        } else {
            once2 = true
        }
    
        apretado = false
        apretSolucion = false
        input.disabled = false

        number = randomNumber(0, problemasPucp.length)

        if(cont < lenghtInicial) { // mostrar problema en pantalla
            let imgProblema = problemasPucp[number].imgProblema
            space.innerHTML = "<img class='imgsize' src='" + imgProblema + "'>"  

            segundos = 0
            minutos = 2
            correrTiempo()

        } else {
            time.innerHTML = "¡Terminaste!"
            input.disabled = true
            comprobar.style.display = 'none'

            space.innerHTML = "<p>Tuviste <strong>" + buenas + "</strong> correctas <i class='fas fa-check-circle'></i></p>" + "<p>Tuviste <strong>" + malas + "</strong> incorrectas <i class='fas fa-times-circle'></i></p>" + "<p>Dejaste <strong>" + blanco + "</strong> en blanco <i class='fas fa-circle'></i></p>"
            clearInterval(idTiempo)
        }
        
        
        input.value = ""
        correccion.innerHTML = "Corrección"
        spaceResolution.innerHTML = "Solución"

    
    } else {
        time.innerHTML = "¡Terminaste!"
        input.disabled = true
        comprobar.style.display = 'none'

        space.innerHTML = "<p>Tuviste <strong>" + buenas + "</strong> correctas <i class='fas fa-check-circle'></i></p>" + "<p>Tuviste <strong>" + malas + "</strong> incorrectas <i class='fas fa-times-circle'></i></p>" + "<p>Dejaste <strong>" + blanco + "</strong> en blanco <i class='fas fa-circle'></i></p>"
        clearInterval(idTiempo)

        correccion.innerHTML = "Corrección"
        spaceResolution.innerHTML = "Solución"
    }


}


// boton comprobar
function comprobarF() {
    comprobar.style.display = 'none'
    rpta = input.value.toLowerCase().trim()
    console.log(rpta)

    if(problemasPucp[number].respuesta == rpta) { // si la respuesta es correcta
        correccion.innerHTML = "<p class='god' id='god'>¡Correcto!</p>" + "<a class='showResolution' id='showResolution'> Ver solución </a>"
        showResolution1 = document.getElementById('showResolution')
        godOrBad = document.getElementById('god')
        showResolution1.addEventListener('click', mostrarSolucion)
    } else { // si la respuesta es incorrecta
        correccion.innerHTML ="<p class='bad' id='bad'>¡Incorrecto!<p>" + "<a class='showResolution' id='showResolution'> Ver resolución </a> "
        showResolution1 = document.getElementById('showResolution')
        godOrBad = document.getElementById('bad')
        showResolution1.addEventListener('click', mostrarSolucion)
    }

    apretado = true
    input.disabled = true
    clearInterval(idTiempo)
}

// boton ver solucion
function mostrarSolucion() {

    let imgResolucion = problemasPucp[number].imgResolucion
    spaceResolution.innerHTML = "<img class='imgResolutionSize' src='" + imgResolucion + "'>" // mostrar solucion en pantalla
    
    acumulacionBuenasMalasBlanco()

    problemasPucp.splice(number, 1)
    
    apretSolucion = true
    cont++

    showResolution1.style.display = 'none'
    godOrBad.style.marginBottom = "0"
}

function acumulacionBuenasMalasBlanco() {
    if(problemasPucp[number].respuesta == rpta) {
        buenas++
    } else if(rpta == "") {
        blanco++
    } else if(problemasPucp[number].respuesta != rpta) {
        malas++
    }
}


// tiempo
function correrTiempo() {
    clearInterval(idTiempo)
    idTiempo = setInterval(cargarSegundo, 1000)
}

function cargarSegundo() {
    if (!(minutos == 0 && segundos == 0)) {
        let txtSegundos

        if(segundos < 0) {
            segundos = 59
        }
    
        if(segundos < 10) {
            txtSegundos = `0${segundos}`
        } else {
            txtSegundos = segundos
        }
        
        segHtml.innerHTML = txtSegundos
        segundos--
    
        cargarMinutos(segundos)
    } else {
        if(once == true) {
            segHtml.innerHTML = "00"
            once = false
        }
    }
}

function cargarMinutos(segundos){
    let txtMinutos 

    if (segundos == -1 && minutos != 0) {
        setTimeout(()=> {
            minutos-- 
        }, 50) 
    }

    if(minutos < 10) {
        txtMinutos = `0${minutos}`
    } else {
        txtMinutos = minutos
    }

    minHtml.innerHTML = txtMinutos
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


