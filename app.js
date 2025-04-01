let order = [
    ["Canadiano", "London Fog", "Apocalypse Latte"],
    ["Blueberry Bagel", "Everything Bagel", "Everything"]
];

console.log("drink menu length: ", order[0].length);
console.log("pastry menu length: ", order[1].length);
console.log(order[1][0]); //Blueberry Bagel
console.log(order[0][1]); //London Fog
console.log(order[0][2]); //Apocalypse Latte

let category = 0; //drink menu
let index = 0; //canadiano
console.log(order[category][index]);

for (drink of order[0]) { console.log(drink); } //log all drinks

order[0][order[0].length] = "flat white"; //add "flat white" drink
console.log("updated drink menu length: ", order[0].length);

category = 0; // drink menu (again)
index = 3; //london fog
console.log(order[category][index]);