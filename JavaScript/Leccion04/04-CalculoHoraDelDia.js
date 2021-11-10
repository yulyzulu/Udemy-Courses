/*
6am-11am - Buenos dias
12pm-18pm- Buenas tardes
19pm-24pm - Buenas noches
0am-6am- Durmiendo
*/

let hour = 20;
let saludo;

if (hour >= 6 && hour <= 11) {
  saludo = "Buenos días";
} else if ( hour >= 12 && hour <= 18) {
  saludo = "Buenas tardes";
} else if (hour >= 19 && hour <= 24) {
  saludo = "Buenas noches";
} else if (hour >= 0 && hour < 6) {
  saludo = "Durmiendo";
} else {
  saludo = "Hora incorrecta";
}

console.log(saludo); // Buenas noches
