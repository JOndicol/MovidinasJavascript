function inicialize(){
    var miH1 = document.createElement("h1")
    var miTxt = document.createTextNode("Un texto muy mono")
    miH1.append(miTxt)

    var miBody = document.body
    miBody.append(miH1)
}

function verCampos(){
    var parrafo1 = document.getElementById("parrafo1")
    console.log(parrafo1)
    var parrafo2 = document.querySelector("body p")
    console.log(parrafo2)
    var parrafos = document.getElementsByClassName("titulo")
    console.log(parrafos)
    var varListo = document.getElementsByTagName("li")
    console.log(varListo)
}