console.log(1)
setTimeout(() => {
    console.log(2)
}, 0)
console.log(3)

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

function getPeliculasDeGenero(genero){
    let xhr = new XMLHttpRequest()
    xhr.open('GET', `https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`)

    xhr.addEventListener('readystatechange', ()=> {
        if(xhr.status === 200 && xhr.readyState === 4){
            let datos = JSON.parse(xhr.responseText)
            console.log(datos)
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

getGenerosPeliculas((resp) => {
    let genero = elegirGenero(resp)
    console.log(genero)
    getPeliculasDeGenero(genero)
})
