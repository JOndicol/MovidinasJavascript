function Calculadora(){
    this._display = 0;
}

Calculadora.prototype.sumar = function(valor){
    this._display += valor
}

Calculadora.prototype.restar = function(valor){
    this._display = this._display - valor
}

Calculadora.prototype.multiplicar= function(valor){
    this._display = this._display * valor
}

Calculadora.prototype.dividir= function(valor){
    this._display = this._display / valor
}

Calculadora.prototype.getDisplay = function(){
    return this._display
}
Calculadora.prototype.reset = function(){
    this._display = 0
}

/*
var cadena = new String()

function agregarElemento(id){
    cadena = cadena.concat(id)
    document.getElementById("resultado").value = cadena
}
function mostrarResultado(){
    cadena = ""
    var inputAOperar = new String()
    inputAOperar = document.getElementById("resultado").value
    for (let i = 0; i < inputAOperar.length; i++) {
        if(inputAOperar[0] == "+" || inputAOperar[0] == "-" || inputAOperar[0] == "*" || inputAOperar[0] == "/"){
            cadena="Operacion no valida"
            document.getElementById("resultado").value = cadena
            break
        }else if (inputAOperar[inputAOperar.length-1] == "+" || inputAOperar[inputAOperar.length-1] == "-" || inputAOperar[inputAOperar.length-1] == "*" || inputAOperar[inputAOperar.length-1] == "/") {
            cadena="Operacion no valida"
            document.getElementById("resultado").value = cadena
            break
        } else {
            if(inputAOperar[i] == '+'){
                let aux_prim = new Number(inputAOperar[i-1])
                let aux_sec = new Number(inputAOperar[i+1])
                cadena = aux_prim + aux_sec
            }
            if(inputAOperar[i] == '-'){
                let aux_prim = new Number(inputAOperar[i-1])
                let aux_sec = new Number(inputAOperar[i+1])
                cadena = aux_prim - aux_sec
            }
            if(inputAOperar[i] == '*'){
                let aux_prim = new Number(inputAOperar[i-1])
                let aux_sec = new Number(inputAOperar[i+1])
                cadena = aux_prim * aux_sec
            }
        }
        
    }
    document.getElementById("resultado").value = cadena
    cadena = ""
}
*/