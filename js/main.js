//1. creo una lista della spesa
const listaSpesa = ["pane", "acqua", "vino", "pasta"];
console.log(listaSpesa);

let i = 0;
// 2' per ogni elemento dell'array creo un elemento <li>
const listaContainer = document.getElementById("lista-spesa");

while (i < listaSpesa.length){
const listaProdotti = document.createElement("li");
// 3. inserisco l'elemento creato nell HTML
listaProdotti.innerHTML=listaSpesa[i];
listaContainer.append(listaProdotti);
           i++;
}
console.log(listaContainer);