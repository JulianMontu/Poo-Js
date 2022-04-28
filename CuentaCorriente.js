import { Cliente } from "./Cliente.js";

export class CuentaCorriente {
  numero;
  #cliente;
  agencia;
  #saldo;
  static cantidadCuentas=0;
  set setCliente(valor) {
    if (valor instanceof Cliente) this.#cliente = valor;
  }
  get getCliente() {
    return this.#cliente;
  }
  constructor(cliente, saldo, agencia, numeroCuenta) {
    this.cliente=cliente;
    this.#saldo = saldo;
    this.agencia = agencia;
    this.numero = numeroCuenta;
    CuentaCorriente.cantidadCuentas++;
  }
  depositoEnCuenta(valor) {
    this.#saldo += valor;
    return this.saldo;
  }
  retirarDeCuenta(valor) {
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
}
