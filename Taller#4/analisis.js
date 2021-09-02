//FUNCIONS HELPERS
function esPAr(numerito){
    return (numerito % 2 === 0)
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento            
        }
    )
    const promedioLista = sumaLista / lista.length
    return promedioLista
}

//Calculadoras de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2)

    if(esPAr(lista.length)){
        const personaMitad1= lista[mitad -1]
        const personaMitad2= lista[mitad]

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2])
        return mediana
    }else{
        const personaMitad = lista[mitad]
        return personaMitad
    }
}


//MEDIANA GENERAL
const salariosCol = colombia.map(
    function(persona){
        return persona.salary
    }
)

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB
    }
)

const medianaGeneral = medianaSalarios(salariosColSorted)


//Mediata TOP 10%



const spliceStart = (salariosColSorted.length * 90) / 100
const spliceCount = salariosColSorted.length - spliceStart

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
)

const medianaTop10 = medianaSalarios(salariosColTop10)









console.log("Mediana General " + medianaGeneral)
console.log("Mediana Top 10% " + medianaTop10)