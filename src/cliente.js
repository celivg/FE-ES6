class Cliente{
  constructor(nombre, impuesto){
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  get nombre(){
    return this._nombre;
  }

  set nombre(nuevo_cliente){
    this._nombre = nuevo_cliente;
  }

  calcularImpuesto() {
    return (this._impuesto.monto - this._impuesto.deduccion) * 0.21;
  }

}

class Impuestos {
  constructor(monto, deduccion) {
    this._monto = monto;
    this._deduccion = deduccion;
  }

  get monto(){
    return this._monto;
  }

  set monto(nuevo_monto){
    this._monto = nuevo_monto;
  }

  get deduccion(){
    return this._deduccion;
  }

  set deduccion(nueva_deduccion){
    this._deduccion = nueva_deduccion;
  }

}

let impuesto1 = new Impuestos(3500, 7000)
const cliente1 = new Cliente('Felipe', impuesto1)

console.log(cliente1);
console.log(`El impuesto que debe pagar es ${cliente1.calcularImpuesto()}`)