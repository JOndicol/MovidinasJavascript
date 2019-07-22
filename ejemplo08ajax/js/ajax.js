function dameLoMio(){
    var ajax = new XMLHttpRequest()
    ajax.open("GET", "http://localhost:8082/armas")//http://localhost/data.json
    ajax.onreadystatechange = function(){
        if(ajax.status == 200 && ajax.readyState == 4){
            var datos = JSON.parse(ajax.response)
            console.log(datos)
        }
    }
    ajax.send()
}

function guardoUnArma(){
    var ajax = new XMLHttpRequest()
    ajax.open("POST", "http://localhost:8082/armas")
    ajax.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    ajax.onreadystatechange = function(){
        if(ajax.status == 200 && ajax.readyState == 4){
            var datos = JSON.parse(ajax.response)
            console.log(datos)
        }
    }
    ajax.send= function(){
        JSON.stringify(
            {
                nombre: "ajax",
                calibre: "Calibrao"
            }
        )
    }
}

dameLoMio()
guardoUnArma()