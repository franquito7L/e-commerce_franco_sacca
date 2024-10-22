const autos = document.querySelector("main");

const data = [
  {
    id: 1,
    title: "Ferrari F8 Tributo",
    detail:
      "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
    img: "http://media.architecturaldigest.com/photos/56269c5865d006e97f33dbe6/master/pass/ferrari-unveils-2016-f12tdf-01-new.jpg",
    price: 250_000,
    stock: 8,
  },
  {
    id: 2,
    title: "Ferrari Vision GT",
    detail:
      "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
    img: "https://cdn.autopapo.com.br/box/uploads/2022/11/28132510/ferrari-vision-gt-prata-frente-parado.jpg",
    price: 250_000,
    stock: 8,
  },
  {
    id: 3,
    title: "Ferrari F8 Tributo",
    detail:
      "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
    img: "https://photo-voiture.motorlegend.com/hd/ferrari-458-italia-56511.jpg",
    price: 250_000,
    stock: 8,
  },
  {
    id: 4,
    title: "Ferrari 458 Italia",
    detail:
      "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
    img: "http://3.bp.blogspot.com/-BUnCk6UPasI/T9LvYQGDBlI/AAAAAAAABIM/avIzt2gpYHY/s1600/f1.jpg",
    price: 250_000,
    stock: 8,
  },
  {
    id: 5,
    title: "Ferrari F430 2007",
    detail:
      "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
    img: "http://noticias.coches.com/wp-content/uploads/2014/07/ferrari_f430-scuderia-2007_r26.jpg",
    price: 250_000,
    stock: 8,
  },
  {
    id: 6,
    title: "Ferrari Fond d'ecran",
    detail:
      "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
    img: "https://images6.alphacoders.com/518/518851.jpg",
    price: 250_000,
    stock: 8,
  },
  {
    id: 7,
    title: "Ferrari 250 GTO 1962",
    detail:
      "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
    img: "https://media.revistagq.com/photos/655609fa4aab4dd59aa03aee/16:9/w_1280,c_limit/https___hypebeast.com_image_2023_11_RM-Sothebys-Sells-1962-Ferrari-for-51.7-Million-USD-2.jpg",
    price: 850_000,
    stock: 8,
  },
  {
    id: 8,
    title: "Ferrari Tunning",
    detail:
      "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
    img: "http://3.bp.blogspot.com/-3H4SHnnuDNY/UlVkN7fVOaI/AAAAAAAA6_0/qcq1hcwFXgo/s00/Ferrari-458-Italia-mansory-tuning-1920x1080.jpg",
    price: 450_000,
    stock: 8,
  },
  {
    id: 9,
    title: "Ferrari 125 S",
    detail:
      "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
    img: "https://tse1.mm.bing.net/th?id=OIP.Uxjq5kfyjoBfM9xZBE9T6AHaEK&pid=Api&P=0&h=180",
    price: 950_000,
    stock: 8,
  },
];

const productos = data.map(
  (producto) =>
    `<div class="card d-flex align-items-center flex-column m-2" style="width: 18rem">
       <h1 class="text-center">${producto.title}</h1>
       <img class="imagen" src= "${producto.img}" alt="Imagen" width="55%">
       <p class="text-center">${producto.detail}</p>
       <strong>${producto.price}</strong>
       <span>${producto.stock}</span>
       <a href="carrito.html" class="btn btn-primary">Agregar al carrito</a>
   </div>`
);

autos.innerHTML = productos.join("");