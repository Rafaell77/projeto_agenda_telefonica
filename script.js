
const form = document.querySelector("form");
const tableBody = document.querySelector("table tbody");

function addRow(nome, telefone) {
  const newRow = tableBody.insertRow();
  const nomeCell = newRow.insertCell();
  const telefoneCell = newRow.insertCell();
  nomeCell.textContent = nome;
  telefoneCell.textContent = telefone;
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const nome = event.target.nome.value;
  const telefone = event.target.telefone.value;

  
  if (!nome || !telefone) {
    alert("Por favor, preencha todos os campos."); 
    return;
  }

  addRow(nome, telefone);

  
  event.target.reset();
});
