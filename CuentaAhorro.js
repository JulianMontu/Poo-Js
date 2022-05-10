import { Cuenta } from "./Cuenta.js";

export class CuentaAhorro extends Cuenta {
  constructor(cliente,  agencia, numeroCuenta,saldo) {
    super(cliente,  agencia,numeroCuenta, saldo);
  }
  retirarDeCuenta(valor) {
    super._retirarDeCuenta(valor,2);
  }
}
