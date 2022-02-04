var paises = []
var checkboxSelected = []
var textSearch = ""
var SearchParametro = ""

async function getData() {//la funcion getData es la encargada de recolectar el dato de nuestro archivo json, esta declarada asincrona (async), para poder determinarle el metodo await
    await fetch("../data/paises.json") //mediante el metodo fetch podes obtener la informacion datos en formato JSON, tanto desde carpetas locales como remotas (APIREST), se declara como await para detener la ejecucion del codigo hasta recibir la respuesta a la promesa realizada por el metodo fetch y asi continuar con el codigo ya con los datos necesarios
        .then(response => response.json())//La respuesta, recibida del metodo fecht es interpretada mediante el metodo json(), esta genera una nueva promersa 
        .then(json => paises.push(...json))//La respuesta a la promesa generada en la ultima linea es recibida y enviada a nuestra variable global paises mediante el metodo push
        var id = 1
        paises.map(pais =>pais.id = id++)
    console.log(paises)
     //Llamamos a la funcion encaragada de mostrar nuestra nuestros cards en el html para que inicialize y realize el primer renderizado de nuestros cards

    
    console.log(location)
    console.log(location.search)
    var id = location.search.split("?id=").filter(Number)
    console.log(id)
    var selectedId = Number(id[0])
    console.log(selectedId)
    var pais = paises.find(function(pais) {
        return pais.id == selectedId
        
    })
    console.log(pais)
    var templateHtml = `    
    <div class="boxCard">
    <div class="imgCard">
    <img src="${pais.bandera}">
    </div>
    <div class="dataCard">
        <h2>${pais.name}</h2>
        <p>Capital:${pais.capital}</p>
        <p>Continente:${pais.continent}</p>
        <p>Moneda:${pais.currency}</p>
        <p>Poblacion:${pais.poblacion}</p>
        <p>Area:${pais.area}</p>
     
    </div>
    </div>
    `
    console.log(templateHtml)
    document.querySelector('#mainCards').innerHTML = templateHtml
}

getData()//llamamos a la funcion getData para que sea inicializada