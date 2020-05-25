// Targeting form
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelector("#peso-form").classList.add("hide");
  document.querySelector("#resultado-form").classList.remove("hide");

  const input = document.querySelector("#peso-input").value;
  console.log(input);

  const peso = 150;
  const preço = 6.9;

  const calculoPeso = parseFloat((input * preço) / peso).toFixed(2);
  console.log(calculoPeso);

  const resultadoInput = document.querySelector("#resultado-input");
  resultadoInput.value = `R$ ${calculoPeso} `;
});

// New calculus

document.querySelector("#novo-cálculo").addEventListener("click", reloadPage);

function reloadPage() {
  location.reload();
}

/* 

Developed by Lucas Talamini

Email: lucastalamini@hotmail.com

*/
