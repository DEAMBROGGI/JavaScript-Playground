
var fechaInput = document.querySelector('#fechaInput') //Busco el input
var hoy = new Date(); //Defino la fecha de hoy

//ESTABLECE EL VALOR INICIAL CON LA FECHA DE HOY Y LE DA FORMATO DE FECHA ESTANDAR
function init(fecha, formato) { //La funcion init me permite establecer la fecha actual con el formato definido
    var fechaActual;  //Creo la variable fecha Actual en donde guardo el pre formato de la misma

    //Aplico los metpdps replace para modificar los datops de formato pretendido pasados por parametro por lo datos de la fecha de hoy
    fechaActual = formato.replace("DD", fecha.getDate())
                         .replace("MM", fecha.getMonth() + 1)//getMonthComienza desde 0 por eso se le agrega 1
                         .replace("YYYY", fecha.getFullYear())
    console.log(fecha.getMonth())
    var fechaConFormato = moment(fechaActual, "YYYY-MM-DD").format("YYYY-MM-DD")

    console.log(fechaConFormato)
    fechaInput.value = fechaConFormato
    formatInput()
}
init(hoy, "YYYY-MM-DD")

//ESCUCHADOR DE EVENTO
fechaInput.addEventListener('change', function (event) {
    var data = event.target.value
    console.log(data)
    formatInput()
})
//ESTABLECE EL FORMATO PERSONALIZADO DEL INPUT DATE VER CSS
function formatInput() {

    fechaInput.setAttribute(
        "data-date",
        moment(fechaInput.value, "YYYY-MM-DD")
            .format(fechaInput.getAttribute("data-date-format"))
    )

}

    