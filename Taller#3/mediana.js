function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento            
        }
    )
    const promedioLista = sumaLista / lista.length
    return promedioLista
}


///////////////////////////


function espar(numerito){
    if (numerito % 2 === 0) {
        return true
    } else {
        return false
    }
}




function calcularMediana (lista1){
    
    lista1.sort(function(a, b){return a - b}) //funcion para ordenar numeros de manera ascendente
    
    const mitadLista1 = parseInt(lista1.length / 2)

    let mediana;

    if (espar(lista1.length)){
        const elemeto1 = lista1[mitadLista1 - 1]
        const elemeto2 = lista1[mitadLista1]

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemeto1,
            elemeto2,
        ])
        mediana = promedioElemento1y2
    }else{
        mediana = lista1[mitadLista1]
    }

    return mediana
}