let colores =['azul','rojo','verde']

console.log('FOR IN...')

for(let i in colores){
    console.log(i, colores[i])
}

console.log('FOR OF...')

for(let color of colores){
    console.log(color)
}

console.log('FOR EACH...')

function muestraColor(color, pos){
    console.log(pos, color)
}

colores.forEach(muestraColor)

console.log('FUNCION FLECHA...')
colores.forEach((color,pos) => {
    console.log(pos, color)
})

var miCalculadora = (function(){
    function suma(n1, n2){
        return n1 + n2
    }
    function resta(n1, n2){
        return n1 - n2
    }
    function multiplica(n1, n2){
        return n1 * n2
    }
    function divide(n1, n2){
        return n1 / n2
    }

    console.log('funciones autoejecutables')

    return{
        suma: suma,
        resta: resta,
        multiplica: multiplica,
        divide: divide
    }
})()

console.log(miCalculadora.divide(10,5))
console.log(miCalculadora.suma(12,8))

let mascotas = ['pez', 'perro', 'gato', 'periquitos']

let pelicula = {
    titulo: 'The Expendables',
    duracion: 120,
    descripcion: 'BIBA STALONE'
}

let prop = 'titulo'

console.log(pelicula.titulo)
console.log(pelicula['titulo'])
//console.log(pelicula.prop)
console.log(pelicula[prop])

mascotas.push('ninfa')
console.log(mascotas)

let ultimaMascota = mascotas.pop()
console.log(mascotas)
console.log(ultimaMascota)

mascotas.unshift(ultimaMascota)
console.log(mascotas)

let mascotasDelMedio = mascotas.splice(1, 2, 'Guacamayo')
console.log(mascotas)

let copiaMascotas = [].concat(mascotas)
copiaMascotas.push('serpiente')
console.log(mascotas)
console.log(copiaMascotas)

let copiaMascotas_diferenteReferencia = [...mascotas]
console.log(copiaMascotas_diferenteReferencia)


//let descripcion = pelicula.descripcion
//let duracion = pelicula.duracion
//let titulo = pelicula.titulo

let{titulo, descripcion, duracion} = pelicula

console.log('Titulo: ' + titulo + ', ' + 'duracion: ' + duracion + ', ' + 'descripcion: ' + descripcion)

let[ninfa, p, ..._] = copiaMascotas
console.log(_)

let peli1 = pelicula
peli1.titulo = 'The Expendables 2'
console.log(pelicula)

peli1 = Object.assign({}, pelicula)
peli1.titulo = 'The Expendables 3'
console.log(pelicula)
console.log(peli1)

let peli2 = {...pelicula, descripcion: 'Una descripcion'}
pelicula.duracion = 100
console.log(pelicula)
console.log(peli2)

console.log(`Titulo: ${titulo}, descripcion: ${descripcion}, duracion: ${duracion}`)

function Pelicula(titulo, descripcion, duracion, estreno){
    this.titulo = titulo
    this.descripcion = descripcion
    this.duracion = duracion
    this.estreno = estreno
    //this.estaEstrenada = function(){
      //  return new Date().getFullYear() >= this.estreno
    //}
}

let peliculaConConstructor = new Pelicula('Alien', 'Saga alien', '150', 2018)
let peliculaConConstructor2 = new Pelicula('Godzilla Contraataca', 'Chuston fenomenal', '120', 2021)

Pelicula.prototype.estaEstrenada = function(){
    return new Date().getFullYear() >= this.estreno
}

console.log(peliculaConConstructor)
console.log(peliculaConConstructor.estaEstrenada())
console.log(peliculaConConstructor2)
console.log(peliculaConConstructor2.estaEstrenada())

String.prototype.repetir = function(numeroRepeticiones){
    nuevoString = ""
    for(let i = 0; i < numeroRepeticiones; i++){
        nuevoString = nuevoString.concat(this)
    }
    return nuevoString
    //return new Array(num+1).join(this) Esto hace lo mismo que todo lo anterior
}

var cadena = "Penny..."
cadena = cadena.repetir(3)
console.log(cadena)

class Serie{
    constructor(titulo, descripcion, episodios, episodiosVistos = 0){
        this.titulo =  titulo
        this.descripcion = descripcion
        this.episodios = episodios
        this.episodiosVistos = episodiosVistos
    }
    episodiosPorVer(){
        return this.episodios - this.episodiosVistos
    }
}

let twd = new Serie('The walking dead', 'Una serie', 200, 190)
let got = new Serie('Game of Thrones', 'Una serie', 140, 40)
let banshee = new Serie('Banshee', 'Una serie', 240, 240)
console.log(twd)
console.log(twd.episodiosPorVer())

const nums = [2,4,5,7,9,10,12]

const tripleNums = nums.map((n) => n*3)
console.log(tripleNums)

const soloPares = nums.filter((n) => (n%2==0))
console.log(soloPares)

const sumaNumPares = soloPares.reduce((acc,n) => {
    return acc += n
}, 0)
console.log(sumaNumPares)

const series = [twd, got, banshee]

function seriesVistas(misSeries){
    let seriesVistas = misSeries.filter((n) => n.episodiosPorVer()==0)
    return seriesVistas
}

console.log(seriesVistas(series))