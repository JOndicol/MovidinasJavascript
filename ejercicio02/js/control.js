function initialize(){
    calculadora = new Calculadora()
    display = document.getElementById("display")
    resetDisplay = false
    operador = ""
    ultimoValor = 0
}

function agregarDisplay(numero){
    if(resetDisplay){
        display.value = ""
        resetDisplay = false
    }
    display.value = display.value + numero 

}
function pulsarSuma(){
    if(!resetDisplay){
        calculadora.sumar(new Number(display.value))
        operador = '+'
        ultimoValor = new Number(display.value)
    }
    display.value = calculadora.getDisplay()
    resetDisplay = true
}

function pulsarResta(){
    if(!resetDisplay){
        calculadora.restar(new Number(display.value))
        operador = '-'
        ultimoValor = new Number(display.value)
    }
    display.value = calculadora.getDisplay()
    resetDisplay = true
}

function pulsarMulti(){
    if(!resetDisplay){
        calculadora.multiplicar(new Number(display.value))
        operador = '*'
        ultimoValor = new Number(display.value)
    }
    display.value = calculadora.getDisplay()
    resetDisplay = true
}

function showDisplay(){
    if(!resetDisplay){
        ultimoValor = new Number(display.value)
    }
    if(operador == '+'){
        calculadora.sumar(ultimoValor)
        display.value = calculadora.getDisplay()
        resetDisplay = true
    }
    if(operador == '-'){
        calculadora.restar(ultimoValor)
        display.value = calculadora.getDisplay()
        resetDisplay = true
    }
    if(operador == '*'){
        calculadora.multiplicar(ultimoValor)
        display.value = calculadora.getDisplay()
        resetDisplay = true
    }
}