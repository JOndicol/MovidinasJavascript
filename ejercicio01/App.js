
Array.prototype.suma = function(){
    let suma = 0
    for(let i = 0; i< this.length; i++){
        suma += this[i]
    }
    return suma
 }
 
 Array.prototype.concatenar = function(){
     let cadena = new String()
     for(let i = 0; i< this.length; i++){
         cadena = cadena.concat(this[i])
     }
     return cadena
 }
 
 testArray = [0,9,8,10]
 testArray2 = [0,9,"farlopini","pollo",13,"MARADONA"]
 console.log(testArray.suma())
 console.log(testArray.concatenar())
 console.log(testArray2.concatenar())

let patata = {}
let cartaDeRestaurante = [
    {
        primero: "patatas",
        segundo: "hamburguesa",
        postre: "chocolat"
    },
    {
        primero: "lentejas",
        segundo: "merluza",
        postre: "mousse"
    },{
        primero: "verde para grillos",
        segundo: "chuletillas",
        postre: "thor-hijas"
    }
]