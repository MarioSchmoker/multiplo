let btnCalcular = document.getElementById("btnCalcular");
let num11 = document.getElementById("num1");
let num21 = document.getElementById("num2");
rotulo1.innerHTML = "Ingrese 1° número";
rotulo2.innerHTML = "Ingrese 2° número";

function esMultiplo(num1: number, num2: number): boolean {
  return num1 % num2 === 0;
}

btnCalcular.addEventListener("click", () => {
  let num11: number = Number(num1.value);
  let num22: number = Number(num2.value);

  if (esMultiplo(num11, num22)) {
    console.log(num11, " es múltiplo de ", num22);
  } else {
    console.log(num11, " no es múltiplo de ", num22);
  }
});
