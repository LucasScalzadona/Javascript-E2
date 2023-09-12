const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log("-----Ejercicio A");

const PizzasImpar = (() => {
  const PizzasImpar = pizzas.filter((pizza) => pizza.id % 2 === 1);
  console.log("Pizzas con un ID impar:", PizzasImpar);
})();

console.log("-----Ejercicio B");

const PizzasBaratas = (() => {
  const PizzasBaratas = pizzas.filter((pizza) => pizza.precio < 600);
  console.log("Pizzas con un precio menor a 600:", PizzasBaratas);
})();

console.log("-----Ejercicio C");

const NombrePrecio = (() => {
  const info = pizzas.map((pizza) => console.log(pizza.nombre, pizza.precio));
})();

console.log("-----Ejercicio D");

const Mostraringredientes = (() => {
  const ingredientes = pizzas.map((pizza) => {
    console.log(
      `La pizza ${pizza.nombre} contiene los siguientes ingredientes:`
    );
    pizza.ingredientes.map((ingrediente) => console.log(ingrediente));
    console.log("");
  });
})();
