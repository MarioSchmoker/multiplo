let btnCalcular = document.getElementById("btnCalcular");
//hay 2 errores en tu code. num11 y num21 no se usan nunca
let num11 = document.getElementById("num1");
let num22 = document.getElementById("num2");
rotulo1.innerHTML = "Ingrese 1° número";
rotulo2.innerHTML = "Ingrese 2° número";

function esMultiplo(num11: number, num22: number): boolean {
  return num11 % num22 === 0;
}

btnCalcular.addEventListener("click", () => {
  //sabes de donde obtiene su valor num1.value y num2.value????
  let num11: number = Number(num1.value);
  let num22: number = Number(num2.value);

  if (esMultiplo(num11, num22)) {
    console.log(num11, " es múltiplo de ", num22);
  } else {
    console.log(num11, " no es múltiplo de ", num22);
  }
});
//salvando los detalles esta bien tu solucion
