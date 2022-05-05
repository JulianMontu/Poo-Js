export class Cuenta {
  #cliente;
  #saldo;

  constructor(cliente, saldo, numero, agencia) {
    this.numero = numero;
    this.agencia = agencia;
    this.#cliente = cliente;
    this.#saldo = saldo;
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
