import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta {
  static cantidadCuentas = 0;

  constructor(cliente, agencia, numeroCuenta) {
    super(cliente, agencia, numeroCuenta, 0);
    CuentaCorriente.cantidadCuentas++;
  }
  retirarDeCuenta(valor) {
    super._retirarDeCuenta(valor,5);
  }
}
