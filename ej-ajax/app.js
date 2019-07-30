function getGenerosPeliculas(cb){
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://ejemplos-dc1c1.firebaseio.com/generos.json')

    xhr.addEventListener('readystatechange', ()=> {
        if(xhr.status === 200 && xhr.readyState === 4){
            let resp = JSON.parse(xhr.responseText)
            let listaGeneros = getArrayFromObject(resp)
            cb(listaGeneros)
        }
    })

    xhr.send()
}

function getPeliculasDeGenero(genero, cb){
    let xhr = new XMLHttpRequest()
    xhr.open('GET', `https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`)

    xhr.addEventListener('readystatechange', ()=> {
        if(xhr.status === 200 && xhr.readyState === 4){
            let datos = JSON.parse(xhr.responseText)
            cb(datos)
        }
    })

    xhr.send()
}
function getArrayFromObject(obj){
    let valores = []
    for(var key in obj){
        let val = obj[key]
        valores.push(val)
    }
    return valores
}
function elegirGenero(datos){
    let generoAElegir = prompt(`Elige un genero entre los siguientes: ${datos}`)
    return generoAElegir
}

function mostrarGeneros(){
    getGenerosPeliculas((resp) => {
        let display = document.getElementById("generos")
        for(let v in resp){
            let opcion = document.createElement("option") 
            let genero = document.createTextNode(resp[v])
            opcion.appendChild(genero)
            display.appendChild(opcion)
        }

        display.addEventListener('change', mostrarPelis)
    })
}

function mostrarPelis(){
    
    let display = document.getElementById("generos")
    let genero = display.options[display.selectedIndex].text
    getPeliculasDeGenero(genero, (datos) =>{
        let display = document.getElementById("peliculas")
        display.innerHTML = ""

        for(let v in datos){
            let opcion = document.createElement("option") 
            let genero = document.createTextNode(datos[v])
            opcion.appendChild(genero)
            display.appendChild(opcion)
        }
    })
    
}

 mostrarGeneros()