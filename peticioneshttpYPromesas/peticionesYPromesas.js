new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(1)
    }, 2000)
}). then((resp) =>{

    console.log(resp)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 2000)
    })

    .then((resp) => {
        console.log(resp)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(3)
            }, 1000)
        })
    })
    .then((resp) => {
        console.log(resp)
    })
})

function promesaSiTuNovioTeDejaSolaDimeloYYoPasoABuscarte(sola){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(sola){
                console.log("HOLA, TE VI CAMINANDO EN LO OSCURO SOLA, EN EL JUEGO TU TIENES LA BOLA")
                resolve(true)
            }else{
                console.log("POBRE DIABLA, SE DICE QUE SE TE HA VISTO POR LA CALLE VAGANDO")
                reject(false)
            }
        })
    })
}

promesaSiTuNovioTeDejaSolaDimeloYYoPasoABuscarte(false)
.then(resp => console.log("PRECAUSION QUE LLEGARON LOS PERROS SALVAJES"))
.catch(err => console.log("NO NOS CULPEN DE LO QUE PASE"))