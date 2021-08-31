const precioOriginal = 250
const descuento = 18

function calcularPrecioConDescuento(precio, descuento){
    const procentajePrecioCondescuento = 100 - descuento
    const precioConDescuento = (precio * procentajePrecioCondescuento) / 100

    return precioConDescuento
}

function ButtonPriceDiscont(){
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = inputPrice.value

    const InputDiscont = document.getElementById("InputDiscont")
    const DiscontValue = InputDiscont.value

    const precioConDescuento = calcularPrecioConDescuento(priceValue, DiscontValue)

    const resultP = document.getElementById("ResultP")

    resultP.innerText = "El precio con descuento es $"+ precioConDescuento

}


//COUPONS
const coupons = [
    "RickAndMorty",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function ButtonPriceDiscontCoupon(){

    const InputPriceCoupon = document.getElementById("InputPriceCoupon")
    const priceCouponValue = InputPriceCoupon.value

    const InputCoupon = document.getElementById("InputCoupon")
    const CouponValue = InputCoupon.value
    
    let descuento;

    switch(CouponValue) {
        case "RickAndMorty":
          descuento = 15
        break
        case "pero_no_le_digas_a_nadie":
          descuento = 30
        break
        case "es_un_secreto":
          descuento = 25
        break
      }

      const precioConDescuento = calcularPrecioConDescuento(priceCouponValue, descuento)

      const ResultPCoupon = document.getElementById("ResultPCoupon")
      ResultPCoupon.innerText = "El precio con descuento es de $" + precioConDescuento
}

// console.log({
//     precioOriginal,
//     descuento,
//     procentajePrecioCondescuento,
//     precioConDescuento,
// })