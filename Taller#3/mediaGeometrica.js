function calcMediaGeometrica(lista) {
    const multiplicacion = lista.reduce(
        function (a, b) {
            return a * b
        }
    )
    
    if (multiplicacion <= 0) {
        return "No pueden haber valores iguales a cero o menores"
    }else{
        return multiplicacion ** (1 / lista.length)
    }
}