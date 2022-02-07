//Diferente formatos que podemos pasarle al constructor Date
//Ver libreria Moment

var objFecha1 = new Date();
var objFecha2 = new Date("May 14, 2011");
var objFecha3 = new Date("May 14, 2011 20:21:22");
var objFecha4 = new Date(2011, 4, 14);
var objFecha5 = new Date(2011, 4, 14, 20, 21, 22);
var objFecha6 = new Date("04/11/1983")
var objFecha7 = new Date("11/04/1983")
var objFecha8 = new Date("04-11-1983")
var futureDate = new Date('11/21/2022')
var endbootcamp = new Date('04/21/2022')

var dia = objFecha1.getDate();
var mes = objFecha1.getMonth() + 1;//getMonth() inicia desde 0 por eso se les pasa +1
var anio = objFecha1.getFullYear();
var fechaConcat = dia + "/" + mes + "/" + anio

var local = objFecha1.toLocaleString()
var localStr = objFecha1.toLocaleDateString()

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; //Creo opciones para el formato de fecha seleccionada
var localfch2 = objFecha4.toLocaleDateString('es-AR', options) //Establesco tipo de uso horario y opciones
var fechasString = objFecha6.toDateString()

var formatos = document.getElementById('formatos')

var resta = objFecha1.getTime() - objFecha6.getTime()

var enDias = Math.floor(resta / (1000 * 60 * 60 * 24)) //Las fechas se calculan en milisegundos por eso se inicia en mil por 60 lo paso a segundos y asi continuo con las distintas unidades de tiempo
var enMeses = Math.floor(resta / (1000 * 60 * 60 * 24 * 30))
var enAños = Math.floor(resta / (1000 * 60 * 60 * 24 * 30 * 12))



var formatoHtml = `
 <ul>
 <li>${objFecha1}</li>
 <li>${objFecha2}</li>
 <li>${objFecha3}</li>
 <li>${objFecha4}</li>
 <li>${objFecha5}</li>
 <li>${objFecha6}</li>
 <li>${objFecha7}</li>
 <li>${objFecha8}</li>
 <li> Concat ${fechaConcat}</li>
 <li>${local}</li>
 <li>${localStr}</li>
 <li>${localfch2}</li>
 <li>${fechasString}</li>
 </ul>
 `
formatos.innerHTML = formatoHtml


var date1 = ""
var date2 = ""
var fecha1 = document.querySelector('#fecha1')
fecha1.addEventListener('change', function (event) {
    date1 = event.target.value

    calcularFechas()
})
var fecha2 = document.querySelector('#fecha2')
fecha2.addEventListener('change', function (event) {
    date2 = event.target.date
    calcularFechas()
})

function calcularFechas() {
    console.log("Deberas calcular años meses y dias desde tu nacimiento")

}

var mundial = endbootcamp.getTime() - objFecha1.getTime()
var Segundos = Math.floor(mundial / (1000))
var Minutos = Math.floor(mundial / (1000 * 60))
var Horas = Math.floor(mundial / (1000 * 60 * 60))
var Dias = Math.round(mundial / (1000 * 60 * 60 * 24))
var Meses = mundial / (1000 * 60 * 60 * 24 * 30)

console.log("Tiempos hasta finalizar BootCamp")
console.error('Segundos ' + Segundos)
console.warn("Minutos " + Minutos)
console.warn('Horas ' + Horas)
console.log("Dias " + Dias)
console.log("Meses " + Meses)

console.log(fecha1)


//Diferencia con libreria moment
var resta1 = moment(objFecha1) //Establezco las fecha en formato standar de moment
var resta2 = moment(objFecha6)

var dias = resta1.diff(resta2, 'days') //Aplico el metodo diff de moment y a la mayor fecha le resta la menor calculara en dias para poder operar
var meses = Math.floor(dias / 30) //Obtengo el entero de meses redondeado hacia abajo 
var años = Math.floor(dias / 365) //Obtengo el entero redondeado hacia abajo de años

//Calculo los dias restantes, resto el total de dias al entero de meses por 30
var diasTranscurridos = dias - meses * 30

//Calculo los meses transcurridos, redondeando hacia abajo los meses y calculando los totales menos los años (ya redondeados hacias abajo)*365 dias de un año y el resultante lo diviso por los meses que posee un año
var mesesTranscurridos = Math.floor((dias - años * 365) / 30)


console.log("trasncurrieron desde mi nacimienmto " + años + " años, " + mesesTranscurridos + " meses, " + diasTranscurridos)