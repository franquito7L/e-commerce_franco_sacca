function sprint1() {
  const h1 = document.querySelector("h1");
  h1.innerText = "Productos";

  let cardsArray = [];
  for (let i = 1; i < 10; i++) {
    cardsArray.push(` 
        <div class="card">
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Auto</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="./producto.html" class="btn btn-primary">Ver mas</a>
                </div>
        </div>
    `); //batiks para el contenido
    let container = document.querySelector(".container"); //seleccionamos para poder agregar la card.
  }
  console.log("Intento " + cardsArray + "para ver si funciona");
  document.querySelector(".container").innerHTML = cardsArray.join("");
}

sprint1();
