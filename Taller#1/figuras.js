//Codigo del cuadrado

console.group("Cuadrado")

//const ladoCuadrado = 5
//console.log("Los lados del cuadrado son " + ladoCuadrado + "cm")

function perimetroCuadrado(lado){
    return lado * 4
}
//console.log("El perimetor es " + perimetroCuadrado + "cm")

function areaCuadrado(lado){
    return lado * lado
}
//console.log("El area del cuadrado es " + areaCuadrado + "cm^2")
console.groupEnd()




//Codigo del Triangulo
console.group("Triangulo")
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base
}


function areaTriangulo(base, altura){
    return (base * altura) / 2
}
console.groupEnd()



//Código del circulo
console.group("Circulos")
//radio
const radioCirculo = 4
console.log("El radio de circulo es: " + radioCirculo + "cm")
//diametro

function diametroCirculo(radio){
    return radio * 2
}

//PI
const PI = Math.PI
console.log("PI es: " + PI)

//circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI
}

//área
function areaCirculo(radio){
    return (radio * radio) * PI
}

console.groupEnd()



//Aquí interactuamos con el HTML


//CUADRADO
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value


    const perimetro = perimetroCuadrado(value)
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value


    const perimetro = areaCuadrado(value)
    alert(perimetro);
}


//TRIANGULO

function calcularAlturaTriangulo(){
    const inputLado1 = parseInt(document.getElementById("InputTrianguloLado1").value)
    const inputLado2 = parseInt(document.getElementById("InputTrianguloLado2").value)
    const inputBase = parseInt(document.getElementById("InputTrianguloBase").value)

    if (inputLado1 == inputLado2 || inputBase == inputLado1 || inputLado2 == inputBase) {
        if (inputLado1 == inputLado2) {
            const alturaTriangulo = altura(inputLado1, inputBase)
            alert(alturaTriangulo)
        }
        else if (inputBase == inputLado1) {
            const alturaTriangulo = altura(inputLado1, inputLado2)
            alert(alturaTriangulo)
        } else {
            const alturaTriangulo = altura(inputLado2, inputLado1)
            alert(alturaTriangulo)
        }

        function altura(a, b){
            return Math.sqrt(a**2 - (b**2 / 4))
        }
    }else{
        alert("esto no es un triangulo isósceles")
    }
}