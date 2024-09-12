

const h1 = document.querySelector("h1");
h1.innerText = "Productos";

// let array = [];
// for (let i = 1 ; i < 10 ; i++) {
//   array.push(`
//     `)
// }
let cardsArray = [];
for (let i = 1; i < 10; i++) {
    cardsArray.push(` 
        <div class="card">
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">Tarjeta numero ${i}.</p>
            </div>
        </div>
    `); //batiks para el contenido
    let container = document.querySelector(".container"); //seleccionamos para poder agregar la card.
  }
  console.log("Intento " + cardsArray + "para ver si funciona");
  document.querySelector(".container").innerHTML = cardsArray.join('');