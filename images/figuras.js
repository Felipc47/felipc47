
function perimetroCuadrado (lado) {
return lado * 4;
};

function areaCuadrado (lado){
return lado * lado;
}


function areaTriangulo (baseTriangulo, alturaTriangulo){
    return (baseTriangulo * alturaTriangulo) / 2;
}

function perimetroTriangulo (lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}



function diametroCirculo (radioCirculo){
    return radioCirculo * 2;
}


 function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
  }

function areaCirculo (radioCirculo){
    return (radioCirculo * radioCirculo) * Math.PI;
}


function calcularPerimetroCuadrado (){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert (perimetro);
}

function calcularAreaCuadrado (){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert (area);
}


  

function calcularPerimetroTriangulo (){
    const input = document.getElementById("ladoTriangulo1");
    const value = input.value;

    const input2 = document.getElementById ("ladoTriangulo2");
    const value2 = input2.value;
    
    const input3 = document.getElementById("baseTriangulo");
    const value3 = input3.value;

    const perimetroDelTriangulo = perimetroTriangulo(Number(value), Number(value2), Number(value3));
    alert(perimetroDelTriangulo);

}




function calcularAreaTriangulo (){
    const input = document.getElementById ("baseTriangulo");
    const valueBase = input.value;

    const input2 = document.getElementById ("inputTrianguloH");
    const valueH = input2.value;

    const areaTriangulo1 = areaTriangulo(valueBase, valueH);
    alert (areaTriangulo1);

}


function calcularAreaCirculo () {
    const input = document.getElementById("radioCirculo");
    const value = input.value;

    const areaDelCirculo = areaCirculo(value).toFixed(4);
    alert(areaDelCirculo);
}

function calcularPerimetroCirculo (){
    const input = document.getElementById ("radioCirculo");
    const value = input.value;

    const perimetroDelCirculo = perimetroCirculo(value).toFixed(4);
    alert(perimetroDelCirculo);
}


function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
  }
