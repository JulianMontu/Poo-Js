export class Cuenta {
  #cliente;
  #saldo;

  constructor(cliente, agencia, numero, saldo) {
    if (this.constructor == Cuenta) {
      throw new Error("No se debe instanciar objetos de la clase Cuenta");
    }
    this.numero = numero;
    this.agencia = agencia;
    this.#cliente = cliente;
    this.#saldo = saldo;
  }
  set setCliente(valor) {
    if (valor instanceof Cliente) this.#cliente = valor;
  }
  get getCliente() {
    return this.#cliente;
  }
  depositoEnCuenta(valor) {
    this.#saldo += valor;
    return this.saldo;
  }
  //Acceso a metodos privados
  retirarDeCuenta(valor) {
    _retirarDeCuenta(valor, 0);
  }
  //Metodo privado
  _retirarDeCuenta(valor, comision) {
    valor = valor * (1 + comision / 100);
    if (!(valor > this.#saldo)) {
      return (this.#saldo -= valor);
    } else {
      return this.#saldo;
    }
  }
  valorSaldo() {
    return this.#saldo;
  }
  transferirCuenta(valor, cuentaDestino) {
    this.retirarDeCuenta(valor);
    cuentaDestino.depositoEnCuenta(valor);
  }
  prueba() {
    console.log("Metodo padre ");
  }
}
