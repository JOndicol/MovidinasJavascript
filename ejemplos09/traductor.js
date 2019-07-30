var traductor = (function(){
    let ingles = {
        'hola' : 'hello',
        'adios' : 'bye'
    }
    let frances = {
        'hola' : 'salut',
        'adios' : 'au revoir'
    }
    function traducir(palabra, idioma){
        if(idioma == 'en'){
            return ingles[palabra]
        }
        else if(idioma == 'fr'){
            return frances[palabra]
        }
    }    
    console.log('ejecutando traductor')

    return{
        traducir: traducir,
        translate: traducir
    }
})()