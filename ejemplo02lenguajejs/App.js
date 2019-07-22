console.log("Mi primer log en nodejs")
var variableGlobal = "Mi variable globlal declarada"
funcionEjemplo()
funcionEjemploAllet()

function funcionEjemplo(){
    var variableLocal = "Estoy de mañana"
    for(var i = 0; i < 10; i++){
        console.log("contenido de i " + i);
    }
    console.log("valor de la i al final " + i)
}


function funcionEjemploAllet(){
    var otraVariableLocal = "Estoy de mañana muy de mañana"
    shitvar = "YISUS"
    for(let i = 0; i < 10; i++){
        console.log("contenido de i " + i);
    }
    console.log(shitvar)
}

console.log("Evaluacion de tipos de datos")
var tipoDeDatoNumerico = 8
var tipoDeDatoString = "Vinito del malo"
var tipoDeDatoDate = new Date();
var referenciaAUnaFecha = tipoDeDatoDate
cambiarFecha(tipoDeDatoDate)
console.log("Fecha original " + referenciaAUnaFecha)
console.log("Fecha cambiada " + tipoDeDatoDate)

function cambiarFecha(fecha){
    fecha.setFullYear(1999)
    console.log("Fecha cambiada a " + fecha)
}

console.log("Dime el tipo de la variable numero " + typeof tipoDeDatoNumerico)
console.log("Dime el tipo de la variable String " + typeof tipoDeDatoString)
console.log("Dime el tipo de la variable Date " + typeof tipoDeDatoDate)

operacionesNumericas(1,3,5,7)
operacionesNumericas()

function operacionesNumericas(){
    let miNumero = new Number(3.141592654)
    console.log("valor almacenado " + miNumero.valueOf())
    console.log("valor almacenado " + miNumero.toFixed())
    console.log("valor almacenado " + miNumero.toFixed(4))
}

devuelveParametros()
devuelveParametros(1)
devuelveParametros("mega", "guay")
devuelveParametros(1,2,3,4,5,6,7,8,9,0)


function devuelveParametros(mega, guay){
    console.log("Numero de parametros recibidos " + arguments.length)
    console.log("Numero de parametros esperado " + arguments.callee.length)
    if(arguments.length == arguments.callee.length){
        console.log(mega + " " + guay)
    }
    if(arguments.length == 1){
        console.log("Con " + mega + " me conformo.")
    }
}

amoLosArrays()

function amoLosArrays(){
    let unArray = new Array()
    let otroArray = [0,5,10,15,20]
    unArray[0] = 7
    unArray[1] = "SeComeTosLosCagaos"
    console.log("Ultimo elemento del mapa = " + unArray[unArray.length-1])
    let miMapitaTete = new Array()
    miMapitaTete['clave'] = "valor"
    let persona = new Array()
    persona.nombre = "Wilson"
    persona.apellido = "Martineli"
    persona.funcion = devuelveParametros
    persona.funcion("soy","genital")
}

function Ordenador(cpu, memoriaRAM, memoriaROM, placaBase){
    this.cpu = cpu
    this.memoriaRAM = memoriaRAM
    this.memoriaROM = memoriaROM
    this.placaBase = placaBase

    this.montarmeElPc = function(){
        return "Vaya PC mas pepino que tienes con un " + cpu + " y " + memoriaRAM + " de RAM"
    }
}

var miPc = new Ordenador("I7","16GB","1TB","ASUS")
console.log(miPc.montarmeElPc())