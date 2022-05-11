import { Cuenta } from "./Cuenta.js";

export class CuentaNomina extends Cuenta {
  constructor(cliente, agencia, numeroCuenta, saldo) {
    super(cliente, agencia, numeroCuenta, saldo);
  }
  retirarDeCuenta(valor){
      super._retirarDeCuenta(valor,1)
  }
}
