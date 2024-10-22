// function sprint1() {
// const h1 = document.querySelector("h1");
// h1.innerText = "Productos";

// let cardsArray = [];
// for (let i = 1; i < 10; i++) {
//     cardsArray.push(` 
//         <div class="card">
//             <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">Auto</h5>
//                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     <a href="./producto.html" class="btn btn-primary">Ver mas</a>
//                 </div>
//         </div>
//     `); //batiks para el contenido
//     let container = document.querySelector(".container"); //seleccionamos para poder agregar la card.
// }
// console.log("Intento " + cardsArray + "para ver si funciona");
// document.querySelector(".container").innerHTML = cardsArray.join("");
// }

// sprint1();
const data = [{
    id: 1,
    title: "McLaren 650S",
    detail:
      "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/26/2015_McLaren_650S_GT3_(19443180443).jpg",
    price: 250_000,
    stock: 8,
    category: "mclaren",
  },
  {
    id: 2,
    title: "McLaren MSO 720S",
    detail:
      "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
    img: "https://tse2.mm.bing.net/th?id=OIP.4qKm2lVvigBwC_BNXjUcEwHaEK&pid=Api&P=0&h=180",
    price: 250_000,
    stock: 8,
    category: "mclaren",
  },
  {
    id: 3,
    title: "McLaren Senna 2020",
    detail:
      "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
    img: "https://rmsothebys-cache.azureedge.net/5/6/5/0/6/7/565067a5560e3379aac81c260bdbf9481f9c9e2f.jpg",
    price: 250_000,
    stock: 8,
    category: "mclaren",
  },
  {
    id: 4,
    title: "Mercedes-AMG S",
    detail:
      "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
    img: "https://tse2.mm.bing.net/th?id=OIP.EkbnlX_PFLTEfSyeByjP5gHaEK&pid=Api&P=0&h=180",
    price: 250_000,
    stock: 8,
    category: "mercedes",
  },
  {
    id: 5,
    title: "Mercedes-AMG One",
    detail:
      "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
    img: "https://cdn.motor1.com/images/mgl/kJGq4/s1/mercedes-amg-one.jpg",
    price: 250_000,
    stock: 8,
    category: "mercedes",
  },
  {
    id: 6,
    title: "Mercedes W14 F1",
    detail:
      "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
    img: "https://tse4.mm.bing.net/th?id=OIP.r853wTG9ZKwIe9ORTUexRwHaEK&pid=Api&P=0&h=180",
    price: 250_000,
    stock: 8,
    category: "mercedes",
  },
  {
    id: 7,
    title: "Ferrari 250 GTO 1962",
    detail:
      "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
    img: "https://media.revistagq.com/photos/655609fa4aab4dd59aa03aee/16:9/w_1280,c_limit/https___hypebeast.com_image_2023_11_RM-Sothebys-Sells-1962-Ferrari-for-51.7-Million-USD-2.jpg",
    price: 850_000,
    stock: 8,
    category: "ferrari",
  },
  {
    id: 8,
    title: "Ferrari Tunning",
    detail:
      "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
    img: "http://3.bp.blogspot.com/-3H4SHnnuDNY/UlVkN7fVOaI/AAAAAAAA6_0/qcq1hcwFXgo/s00/Ferrari-458-Italia-mansory-tuning-1920x1080.jpg",
    price: 450_000,
    stock: 8,
    category: "ferrari",
  },
  {
    id: 9,
    title: "Ferrari 125 S",
    detail:
      "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
    img: "https://tse1.mm.bing.net/th?id=OIP.Uxjq5kfyjoBfM9xZBE9T6AHaEK&pid=Api&P=0&h=180",
    price: 950_000,
    stock: 8,
    category: "ferrari",
  },];
  
  
  function renderCards(cards) {
    const h1 = document.querySelector("h1");
    h1.innerText = "Productos";
  
    const container = document.querySelector("section");
  
    const cardHTML = cards.map((producto) => `<div class="card d-flex align-items-center flex-column m-2" style="width: 18rem">
               <img class="imagen" src= "${producto.img}" alt=Imagen ${producto.id} width=55% >
                        <h5>${producto.title}</h5>
                        <p class="text-center">${producto.detail}</p>
                       <p>${producto.price}</p>
                       <p>${producto.stock}</p>
                      <a href="productos.html?prod=${producto.id}" class="btn btn-primary">Ver más</a>
               </div>
          `).join("");
    container.innerHTML = cardHTML;
  };
  function sprint() {
    renderCards(data);
  };
  
  sprint();
  
  const buttonSearch = document.getElementById("search");
  const buttonReset = document.getElementById("reset");
  const input = document.getElementById("search-input");
  const ul = document.getElementById("result-list");
  const searchList = () => {
    const filterData = data.filter((producto) => producto.title.toLowerCase().includes(input.value.toLowerCase()));
    if (filterData.length > 0) {
      renderCards(filterData);
    } else {
      document.querySelector("section").innerHTML = "<p>No se encontraron resultados</p>";
    }
  };
  
  const resetInput = () => {
    input.value = "";
    renderCards(data);
  };
  
  
  const filterByCategory = (category) => {
    const filteredData = category === "todos"?data: data.filter(producto => producto.category === category);
    renderCards(filteredData);
  };
  
  buttonSearch.addEventListener("click", searchList);
  buttonReset.addEventListener("click", resetInput);
  
  const categoryButtons = document.querySelectorAll(".category-btn");
  categoryButtons.forEach(button => {
    button.addEventListener("click", () =>
    filterByCategory(button.dataset.category));
  });


