function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const elementPrice = document.getElementById("inputPrice");    
    const priceValue = elementPrice.value;

    const elementDiscount = document.getElementById("inputDiscount");
    const discountValue = elementDiscount.value;
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const elementResult = document.getElementById("resultPrice");
    elementResult.innerText = "El precio con descuento son: $" + precioConDescuento;
}