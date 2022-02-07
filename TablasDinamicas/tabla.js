function init(){

//Separo las diferentes regiones y las guiardo en un array
var regiones = []

var unique =data.map(region=>region.region)
const quitoRepetidas = new Set(unique)
regiones = [...quitoRepetidas]

//Inserto los titulos de las columnas dinamicamente en mi tabla
var rowregion = document.querySelector('#region')//Busco el encabezado de regiones
var rowDesempleo = document.querySelector('#desempleo')//Busco la fila de desempleo
var rowIngresos = document.querySelector('#ingreso')//Busco la fila de desempleo


//Separo los datos por region
var porRegion = []
var desempleoYhabitantes= []
var habitantes = []
regiones.forEach(region=>{//Primero separo cada una de las regiones
   
   porRegion.push({ //Creo un nuevo objeto con dos propiedades el nombre de la region y los datos agrupados de las mismas
       region:region, //Nombre de la region 
       data:data.filter(datos => datos.region === region)}) //Datos separados de cada region 
})

//Al objeto creado en la variable anterior y guardado en la variable por region lo recorro
porRegion.map(datos =>{
        desempleoYhabitantes.push({//creo un nuevo objeto y lo empujo a la variable desempleoYhabitantes
            region:datos.region, //agrego la propiedad region
            desempleados: datos.data.map(item=> item.desempleados), //agrego la propiedad desempleo recorriendo la propiedad data del objeto anterior y separando solo los valores de desempleo
            habitantes: datos.data.map(item=>item.habitantes),//agrego la propiedad desempleo recorriendo la propiedad data del objeto anterior y separando solo los valores de habitantes
            ingresos:datos.data.map(item=>item.ingresoPorHabitante),
            paises: datos.data.map(paises=>paises.pais)
        })
        
})

//Sumar los totales de cada region

desempleoYhabitantes.forEach(region => {
    
    //Sumo los desempleados
    let totalDesempleados = 0 //Creo la variable totalDesemplaedos con valor inicial de 0
     region.desempleados.forEach(desempleo=> {totalDesempleados += desempleo}) //recorro cada uno de los valores de desempleo por region y los sumo
    region.desempleados = totalDesempleados //Modifico cada uno de los objetos en su propiedad desempleados con el resultado de la suma

    //Sumo los habitantes
    let totalHabitantes = 0 //Creo la variable totalHabitantes con valor inicial de 0
     region.habitantes.forEach(habitantes=> {totalHabitantes += habitantes}) //recorro cada uno de los valores de habitantes por region y los sumo
    region.habitantes = totalHabitantes //Modifico cada uno de los objetos en su propiedad habitantes con el resultado de la suma

    //Calculo el promedio de ingreso y agrego la propiedad
    let totalIngresos = 0 //Creo la variable totalIngresos con valor inicial de 0
     region.ingresos.forEach(ingresos=> {return totalIngresos += ingresos/region.paises.length}) //recorro cada uno de los valores de ingreso por region y los sumo y los divido en la cantidad de paises
    region.ingresos = totalIngresos //Creo la propiedad ingresos y se la agrego al objeto con el valor resultante en total Ingresos

    //Creo las propiedades porcdeDesempleo 
     
    region.porcDesempleo = totalDesempleados*100/totalHabitantes //Creo la propiedad porcDesempleo y realizo el calculo con los valores obtenidos anteriormente de total de habitantes

//Una vez que recolecto todos los datos necesario confecciono mi tabla dinamicamente con estos

//EL METODO createElement()ME PERMITE CREAR ELEMNTOS DE HTML
//EL METODO append() ME PERMITE AGREGAR ELEMENTOS O VALORES A ELEMNTOS HTML
    var th = document.createElement("th") //creo elemento th
    var tddesempleo = document.createElement('td')
    var tdingresos = document.createElement('td')
    //Agrego el encabezado con los nombres de las regiones
    rowregion.append(th) //al tr seleccionado en la tabla le agrego el elemento creado th
    th.append(region.region) //al paso anterior le agrego en su interior el nombre de cada region

    //Agrego el porcentaje de desempleo
    rowDesempleo.append(tddesempleo) //al elemento html buscado en lineas 11 y guardado en la variable roeDesempleo le agrego el td creado anteriarmente mediante el metodo createElement
    tddesempleo.append(region.porcDesempleo.toFixed(2)) //Al elemento agregado anteriormente le agrego los datos de mi array y establesco solo dos decimales

    //Agrego el promedio de ingresos
    rowIngresos.append(tdingresos)
    tdingresos.append(region.ingresos.toFixed(2))

})

}
init()