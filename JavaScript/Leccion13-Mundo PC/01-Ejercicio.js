
class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }
  get tipoEntrada(){
    return this._tipoEntrada;
  }
  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }
  get marca() {
    return this._marca;
  }
  set marca(marca) {
    this._marca = marca;
  }
}

// Clase Raton que hereda de DispositivoEntrada
class Raton extends DispositivoEntrada {
  static contadorRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }
  get idRaton() {
    return this._idRaton;
  }
  toString() {
    return `Ratón: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
  }
}

//Clase de Teclado que hereda de DispositivoEntrada
class Teclado extends DispositivoEntrada {
  static contadorTeclados = 0;
  constructor(tipoEntrada, marca){
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }
  get idTeclado() {
    return this._idTeclado;
  }
  toString() {
    return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
  }
}


class Monitor{
  static contadorMonitores = 0;

  constructor(marca, tamaño){
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamaño = tamaño;
  }

  get idMonitor(){
    return this._idMonitor;
  }

  get marca(){
    return this._marca;
  }

  set marca(marca){
    this._marca = marca;
  }

  get tamaño(){
    return this._tamaño;
  }

  set tamaño(tamaño){
    this._tamaño = tamaño;
  }

  toString() {
    return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;
  }
}

// Clase Computadora
class Computadora {
  static contadorComputadoras = 0;

  constructor(nombre, monitor, teclado, raton) {
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
  }

  get idComputadora(){
    return this._idComputadora;
  }

  get nombre(){
    return this._nombre;
  }

  set nombre(nombre){
    this._nombre = nombre;
  }

  get monitor() {
    return this._monitor;
  }

  set monitor(monitor){
    this._monitor = monitor;
  }

  get teclado(){
    return this._teclado;
  }

  set teclado(teclado) {
    this._teclado = teclado;
  }

  get raton(){
    return this._raton;
  }

  set raton(raton){
    this._raton = raton;
  }

  toString() {
    return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._teclado} \n ${this._raton}`;
  }

}

class Orden{
  static contadorOrdenes = 0;

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = [];
  }

  get idOrden(){
    return this._idOrden;
  }

  agregarComputadora(computadora) {
    this._computadoras.push(computadora);
  }

  mostrarOrden() {
    let computadorasOrden = ''
    for (let computadora of this._computadoras) {
      computadorasOrden += `\n${computadora}`;
    }
    console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
  }
}

let raton1 = new Raton('USB', 'HP');
console.log(raton1.toString()); // Ratón: [idRaton: 1, tipoEntrada: USB, marca: HP]

let raton2 = new Raton('Bluetooth', 'Dell');
// A contuación manda a llamar el método set marca
raton2.marca = 'HP';
console.log(raton2.toString()); //Ratón: [idRaton: 2, tipoEntrada: Bluetooth, marca: HP] 

let teclado1 = new Teclado('Bluetooth', 'MSI');
let teclado2 = new Teclado('USB', 'Acer');
console.log(teclado1.toString()); // Teclado: [ idTeclado: 1, tipoEntrada: Bluetooth, marca: MSI]
console.log(teclado2.toString()); // Teclado: [ idTeclado: 2, tipoEntrada: USB, marca: Acer]

let monitor1 = new Monitor('HP', 15);
let monitor2 = new Monitor('Dell', 27);
console.log(monitor1.toString()); //Monitor: [idMonitor: 1, marca: HP, tamaño: 15]
console.log(monitor2.toString()); // Monitor: [idMonitor: 2, marca: Dell, tamaño: 27]

let computadora1 = new Computadora('HP', monitor1, teclado1, raton1);
console.log(computadora1.toString());
// otra forma de llamar el método toString() es con las template string:
console.log(`${computadora1}`);
// Computadora 1: HP  
//  Monitor: [idMonitor: 1, marca: HP, tamaño: 15]  
//  Teclado: [idTeclado: 1, tipoEntrada: Bluetooth, marca: MSI]  
//  Ratón: [idRaton: 1, tipoEntrada: USB, marca: HP]

let computadora2 = new Computadora('Armada', monitor2, teclado2, raton2);
console.log(computadora2.toString());
// Computadora 2: Armada  
//  Monitor: [idMonitor: 2, marca: Dell, tamaño: 27]  
//  Teclado: [idTeclado: 2, tipoEntrada: USB, marca: Acer]  
//  Ratón: [idRaton: 2, tipoEntrada: Bluetooth, marca: HP] 

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();
// Orden: 1, Computadoras:  
// Computadora 1: HP  
//  Monitor: [idMonitor: 1, marca: HP, tamaño: 15]  
//  Teclado: [idTeclado: 1, tipoEntrada: Bluetooth, marca: MSI]  
//  Ratón: [idRaton: 1, tipoEntrada: USB, marca: HP] 
// Computadora 2: Armada  
//  Monitor: [idMonitor: 2, marca: Dell, tamaño: 27]  
//  Teclado: [idTeclado: 2, tipoEntrada: USB, marca: Acer]  
//  Ratón: [idRaton: 2, tipoEntrada: Bluetooth, marca: HP] 
// Computadora 1: HP  
//  Monitor: [idMonitor: 1, marca: HP, tamaño: 15]  
//  Teclado: [idTeclado: 1, tipoEntrada: Bluetooth, marca: MSI]  
//  Ratón: [idRaton: 1, tipoEntrada: USB, marca: HP] 

let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();
// Orden: 2, Computadoras:  
// Computadora 2: Armada  
//  Monitor: [idMonitor: 2, marca: Dell, tamaño: 27]  
//  Teclado: [idTeclado: 2, tipoEntrada: USB, marca: Acer]  
//  Ratón: [idRaton: 2, tipoEntrada: Bluetooth, marca: HP] 
// Computadora 1: HP  
//  Monitor: [idMonitor: 1, marca: HP, tamaño: 15]  
//  Teclado: [idTeclado: 1, tipoEntrada: Bluetooth, marca: MSI]  
//  Ratón: [idRaton: 1, tipoEntrada: USB, marca: HP] 