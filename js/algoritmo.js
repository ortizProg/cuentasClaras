//Declaracion de las vatiables
const respuestas = [
    
];

function tipoDePersona() {
    // Obtener inputs

    const inputTipoDePersona = document.getElementById("inputTipoDePersona");

    // Resultado inputs

    const valueTipoDePersona = inputTipoDePersona.value;

    respuestas.push(
        {
            pregunta: "TipoDePersona",
            respuesta: valueTipoDePersona
        }
    );

    comprobarTipoDePersona(respuestas[0].respuesta);

}
function desaparecerFormulario(numeroFormulario) {
    const formulario = document.getElementById(numeroFormulario);
    const desaparecerForm = formulario.style.display = "none";
    return desaparecerForm;
}

function aparecerFormulario(numeroFormulario) {
    const formulario = document.getElementById(numeroFormulario);
    const aparecerFormulario = formulario.style.display = "flex"
    return aparecerFormulario;
}

function cambiarTitulo (Titulo, Mensaje) {
    let elementoTitulo = document.getElementById(Titulo);
    let nuevoMensaje = elementoTitulo.innerText = Mensaje;
    return nuevoMensaje;
}

function comprobarTipoDePersona(persona) {
        if (persona == "Persona Natural") {
            desaparecerFormulario("formulario1");
            aparecerFormulario("formulario2");
            cambiarTitulo("tituloDelFormulario", "¡Continuemos!");
        } else if (persona == "Persona Jurídica") {
            
        } else {
            
        }  
    } 

function comprobarObligacionPN () {
    // Obtener Inputs
    const inputIngresosBrutos = document.getElementById("inputIngresosBrutos");
    const inputPatrimonioBruto = document.getElementById("inputPatrimonioBruto");
    const inputConsumoTarjetaCredito = document.getElementById("inputConsumoTarjetaCredito");
    const inputComprasYConsumos = document.getElementById("inputComprasYConsumos");
    const inputConsignacionesBancarias = document.getElementById("inputConsignacionesBancarias");

    // Obtener el valor de los inputs

    const ListValues = [
        
    ];
    
    const meterObjetosEnLista = (idElemento) => {
        ListValues.push(
            {
                id: idElemento.id,
                input: idElemento,
                valor: idElemento.value
            }
        );
    };

        // Meter elementos

        meterObjetosEnLista(inputIngresosBrutos);
        meterObjetosEnLista(inputPatrimonioBruto);
        meterObjetosEnLista(inputConsumoTarjetaCredito);
        meterObjetosEnLista(inputComprasYConsumos);
        meterObjetosEnLista(inputConsignacionesBancarias);

        // Verificacion

        const buscadorDeSi = ListValues.filter(
            function(elemento) {
                return elemento.valor == "Si";
            }
        );

        console.log(buscadorDeSi);

    }
//Inicio codigo
