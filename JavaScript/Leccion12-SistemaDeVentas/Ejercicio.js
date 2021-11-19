
class Producto {
  static contadorProductos = 0;

  constructor(nombre, precio){
    this._idProducto = ++Producto.contadorProductos;
    this._nombre = nombre;
    this._precio = precio;
  }

  get idProducto(){
    return this._idProducto;
  }

  get nombre(){
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get precio(){
    return this._precio;
  }

  set precio(precio){
    this._precio = precio;
  }

  toString(){
    return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this.precio}`;
  }
}

class Orden {

  static contadorOrdenes = 0;

  static get MAX_PRODUCTOS() {
    return 5;
  }

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._productos = [];
    //this._contadorProductosAgregados = 0;
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarProducto(producto) {
    if (this._productos.length < Orden.MAX_PRODUCTOS) {
      this._productos.push(producto);
      //Otra forma de agregar los productos
      //this._productos[this._contadorProductosAgregados++] = producto;
    } else {
      console.log('No se pueden agregar más productos');
    }
  }

  calcularTotal() {
    let totalVenta = 0;
    // Sintáxis simplificada para trabajar con arreglos en JS
    for (let producto of this._productos){
      totalVenta += producto.precio;
    }
    return totalVenta;
  }

  mostrarOrden() {
    let productosOrden = '';
    for (let producto of this._productos){
      productosOrden += '\n{' + producto.toString() + '} ';
    }
    console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden}`); 
  }

}

let producto1 = new Producto('Pantalón', 200);
let producto2 = new Producto('Camisa', 100);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden()
// Orden: 1 Total: $300, Productos:  
// {idProducto: 1, nombre: Pantalón, precio: $200}  
// {idProducto: 2, nombre: Camisa, precio: $100}

let orden2 = new Orden();
let producto3 = new Producto('Cinturón', 50);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto1); // No se pueden agregar más productos 
orden2.mostrarOrden();
// Orden: 2 Total: $500, Productos:  
// {idProducto: 3, nombre: Cinturón, precio: $50}  
// {idProducto: 2, nombre: Camisa, precio: $100}  
// {idProducto: 1, nombre: Pantalón, precio: $200}  
// {idProducto: 3, nombre: Cinturón, precio: $50}  
// {idProducto: 2, nombre: Camisa, precio: $100}  

