/* const precioOriginal = 100;
const descuento = 50;

const porcentajeDelPrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajeDelPrecioConDescuento) / 100;

console.log ({
    precioOriginal, descuento, procentajeDelPrecioConDescuento, precioConDescuento,
});
 */

function calcularPrecioConDescuento (precio, descuento){    
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (porcentajePrecioConDescuento * precio) /100;
    
    return (precioConDescuento);
}

/* function calcularDescuento () {
    const input = document.getElementById("inputPrice");
    const value = input.value;

    const input2 = document.getElementById("inputDiscount");
    const value2 = input2.value;

    const precioConDescuentoo = calcularPrecioConDescuento(value, value2);
   
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es de: $" + precioConDescuentoo;
} */

function calcularDescuento () {
    const input = document.getElementById("inputPrice");
    const value = input.value;

    const input2 = document.getElementById("inputCoupon");
    const value2 = input2.value;

    let descuento; 

    switch(value2){
        case "FelipeStore": descuento = 30;
        break;
        case "Bienvenid@s": descuento = 35;
        break;
        case "EmpiezaHoy": descuento = 50;
        break;
        
    }

    const precioConDescuentoo = calcularPrecioConDescuento(value, descuento);
   
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es de: $" + precioConDescuentoo + ". Tu ahorro fue del: " + descuento + "%.";
}

 
