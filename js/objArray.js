//Nuestra variable paises estaba tomada desde datospaises.js
//Quito el script de mi html donde se llamaba la archivo datapaises.js
//Creo una variable global paises o con el mismo nombre de la variable que tenia en el archivo js
var paises = []
var checkboxSelected = []
var textSearch = ""
var SearchParametro = ""

async function getData() {//la funcion getData es la encargada de recolectar el dato de nuestro archivo json, esta declarada asincrona (async), para poder determinarle el metodo await
    await fetch("../data/paises.json") //mediante el metodo fetch podes obtener la informacion datos en formato JSON, tanto desde carpetas locales como remotas (APIREST), se declara como await para detener la ejecucion del codigo hasta recibir la respuesta a la promesa realizada por el metodo fetch y asi continuar con el codigo ya con los datos necesarios
        .then(response => response.json())//La respuesta, recibida del metodo fecht es interpretada mediante el metodo json(), esta genera una nueva promersa 
        .then(json => paises.push(...json))//La respuesta a la promesa generada en la ultima linea es recibida y enviada a nuestra variable global paises mediante el metodo push
        console.log(paises)
        var id = 1
        paises.map(pais =>pais.id = id++)
    console.log(paises)
    displayCard(paises) //Llamamos a la funcion encaragada de mostrar nuestra nuestros cards en el html para que inicialize y realize el primer renderizado de nuestros cards


    //CREO LOS CHECKBOX DINAMICOS Y TRABAJO CON ELLOS DESDE EL INICIO DE LA CARGA DEL DOCUMENTO
    var unique = paises.map(pais => pais.continent) //Recorro el array de paises y separo de este la propiedad continent
    const dataArray = new Set(unique) //Dado al recorrer el array anterios me va a dar todas las propiedades, con el metodo set elimino los repetidos y dejo solo el primer elemento encontrado, el resto lo descarta
    var continents = [...dataArray] //guardo el dato obtenido con el metodo anterior en la variable continents

    var inputCheckbox = ""
    continents.forEach(continent => { //Recorro el array continenets recibido como parametro

        inputCheckbox += `<label class="micheckbox" ><input type="checkbox" class="checkboxCont" value="${continent}"> ${continent}</label>` //Creo el template de html para poder incorporarle el valor de cada uno de los elementos recorridos en el metodo forEach
    })
    document.querySelector('#checkboxContinent').innerHTML = inputCheckbox //Imprimo el resultado en html
    
    //INICIO A CAPTURAR Y ESCUCHAR LOS EVENTOS DE LOS CHECKBOX
    var checkbox = document.querySelectorAll(".checkboxCont") //Guardo los checkbos en creados dinamicamente en una variable

    checkbox.forEach(check => check.addEventListener("click", function (event) {
        var checked = event.target.checked
        
        if (checked == true) { //Establezcon un condicional que verifica si la propiedad/atributo checked del elemento html, es true o false, es decir si esta tildado o no el checkbox
            checkboxSelected.push(event.target.value) //Si esta tildado lo empujo lo guardo dentro de la variable local declarada anteriormente

            dataCheck(checkboxSelected)//LLamo y les paso el parametro a la funcion que se ocupara del filtrado dl array
        } else {
            checkboxSelected = checkboxSelected.filter(uncheck => uncheck !== event.target.value) //Este metodo lo utilizo para quitar del array en checkbox deschequeado

            dataCheck(checkboxSelected)//LLamo y les paso el parametro a la funcion que se ocupara del filtrado dl array

        } //En el caso que el checkbox sea destildado es decir pase de true a false, le  aplico a la varible checkboxSelected un filtros en el cual 

    }))

}

getData()//llamamos a la funcion getData para que sea inicializada




//Busco el elemento html y lo guardo en una variable.
var inputSearch = document.querySelector("#searchInput")
//Las siguientes tres variables van a ser  las encargadas de recolecatr la informacion proveniente de las entradas del usuario, InputSearc, checkbox y select para posteriormente ser aplicadas a los filtros

//Escuchar el evento de keyup

inputSearch.addEventListener("keyup", search)

//Creamos la funcion para mostrar los Paises Buscados

function search(event) { //Se va a ocupar de buscar y filtrar los datos del array de paises que se encuntra en el archivo datos.js

    var val = event.target.value //Capturo el valor obtenido en la variable val
    textSearch = val
    var data = []
    //Trabajamos con con condicionales anidados y convinados con los datos recolectados de InputSearch, select y checkbox, realizando filtros cruzados entre estos para garantizar que cualquier cambio que el musuario realize sera visible en el renderizado de las cards modificando su valor
    
    //EN ESTE CODIGO Y EN LA GRAN MAYORIA LOS CONDICIONALES JUEGAN UN ROL FUNDAMENTAL

    if (checkboxSelected.length > 0) { //En este bloque de condicionales verificamos si los checkbox poseen algun valor tildado

        checkboxSelected.map(continent => { //recorremos el array generado por los checkbox tildados
           
            //El metodo switch nos ayuda a tomar desiciones en relacion a nuestro codigo, en este caso toma como parametro el valor del select, y de acuerdo al valor de ste ejecuta una accion diferente
            switch (SearchParametro) {//La variable encerrada entre parentesis determina el valor a evaluar
                case 'Capitales': //Case evalua el valor de la variable
                    data.push(...paises.filter(pais => pais.capital.toLowerCase().includes(val.toLowerCase()) && pais.continent == continent))
                    //Cuando hablamos de filtros cruzados no referemos a no solo evaluar como en este caso el valor del imputSearch sino tambien combinarlo con el resultado que poseen los checkbox y select
                    //De este modo logramos que nuestro array de paises se filtre por todos los parametros ingresados por el usuario 
                    break;   //Determina el fin del codigo a ejecutar y el salto al proximo case
                case 'Paises':
                    data.push(...paises.filter(pais => pais.name.toLowerCase().includes(val.toLowerCase()) && pais.continent == continent))
                    break;
                default://El valor de default sera aquel que se ejecutara en caso de que el usuario en este caso no realize ninguna seleccion en el select
                    data.push(...paises.filter(pais => pais.name.toLowerCase().includes(val.toLowerCase()) || pais.name.toLowerCase().includes(val.toLowerCase()) && pais.continent == continent))
            }


        })
    } else if (textSearch == undefined && checkboxSelected.length === 0) {
        { data.push(...paises) }
    }
    else {
        switch (SearchParametro) {
            case 'Capitales':
                data.push(...paises.filter(pais => pais.capital.toLowerCase().includes(val.toLowerCase())))
                break;
            case 'Paises':
                data.push(...paises.filter(pais => pais.name.toLowerCase().includes(val.toLowerCase())))
                break;
            default:
                data.push(...paises.filter(pais => pais.name.toLowerCase().includes(val.toLowerCase())))
        }
    }
    //Guardo el resultado del filtro de paises por name en la variable data
    // Vean que tanto el valor a buscar de paises.name como el dato ingresado en el input val estan con el metodo toLowerCase para igualar los dos a minusculas y evitar la sensibilidad a la mayuscula 
    displayCard(data) //LLamo a la funcion displayCard y le paso como parametro el resultado obtenido en el filtro guardado en la variable data

}
//C


function dataCheck(checkboxSelected) {
    var data = []

    if (checkboxSelected.length > 0) {

        checkboxSelected.map(continent => {
            if (textSearch != undefined) {
                switch (SearchParametro) {
                    case 'Capitales':
                        data.push(...paises.filter(pais => pais.continent == continent && pais.capital.toLowerCase().includes(textSearch.toLowerCase())))
                        break;
                    case 'Paises':
                        data.push(...paises.filter(pais => pais.continent == continent && pais.name.toLowerCase().includes(textSearch.toLowerCase())))
                        break;
                    default:
                        data.push(...paises.filter(pais => pais.continent == continent && pais.name.toLowerCase().includes(textSearch.toLowerCase())))
                }

            } else if (textSearch == undefined && checkboxSelected.length == 0) {
                {
                    data.push(...paises)
                }
            }
            else {
                switch (SearchParametro) {
                    case 'Capitales':
                        data.push(...paises.filter(pais => pais.continent == continent))
                        break;
                    case 'Paises':
                        data.push(...paises.filter(pais => pais.continent == continent))
                        break;
                    default:
                        data.push(...paises.filter(pais => pais.continent == continent))
                }
            }
        })
    } else {
        switch (SearchParametro) {
            case 'Capitales':
                data.push(...paises.filter(pais => pais.capital.toLowerCase().includes(textSearch.toLowerCase())))
                break;
            case 'Paises':
                data.push(...paises.filter(pais => pais.name.toLowerCase().includes(textSearch.toLowerCase())))
                break;
            default:
                data.push(...paises.filter(pais => pais.name.toLowerCase().includes(textSearch.toLowerCase())))
        }
    }

    displayCard(data)
}

function selectSearch(event) {//Captura el valor proveniente del select y lo envia a nuestra variable global SearchParametro
    var val = event.target.value
    SearchParametro = val
    console.log(SearchParametro)


}

document.querySelector('#select').addEventListener('change', selectSearch)


function displayCard(data) { //La funcion display recibe el parametro data desde cualquiera de la funciones que necesitana afectar la visualizacion de las card, getData, search, dataCheck

    var toDisplay = []

    if (data) {

        toDisplay = []
        toDisplay.push(...data)
    }

    else {
        toDisplay = []
        toDisplay.push(...paises)
    }


    var templateHtml = "" //creo la variable html la cual guardara las cards dinamicas para posteriormente poder ser mostradas en html


    toDisplay.map(pais => { //al array guardado en toDisplay lo recorro por medio de map 
        // a la variable html mediante += le guardo las cards dinamicas en formato texto para que pueda ser leido en nuestro archivo html
        // el texto entre comillas cruzadas es aconsejable primero armarlo en html, verificar como se ve y definirlo en este
        // una vez que esta OK copiarlo y pegarlo entre las comillas, y posteriormente le incrustamos las variables mediante ${}

        templateHtml += `    
        <div class="boxCard">
        <div class="imgCard">
        <img src="${pais.bandera}">
        </div>
        <div class="dataCard">
        <h2>${pais.name}</h2>
            <p>Capital:${pais.capital}</p>
            <p>Continente:${pais.continent}</p>
           
            <button class="botonCards"><a href="detalle.html?id=${pais.id}?id=${pais.area}">Ver mas</a></button>
        </div>
        </div>
        `

    })

    document.querySelector('#mainCards').innerHTML = templateHtml //Imprimimos en html las cards guardadas en el variable html

}

//EVALUA EL CODIGO
//VERAS QUE LOS CONDICIONALES JUEGAN UN PAPEL FUNDAMENTAL EN COMO NUESTRO CODIGO SE VA A COMPORTAR
// Y SOBRE LA EXPERIENCIA QUE NUESTRO USUARIO TENDRA EN SU INTERACCION
//PRESTA ATENCION EN EL ARMADO DE LOS BLOQUES Y SI TE ES MAS SENSILLO SEPARA LAS FUNCIONES EN DIFERENTES ARCHIVOS JS


