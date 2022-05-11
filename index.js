import { Cliente } from "./Cliente.js";
import { CuentaAhorro } from "./Cuentas/CuentaAhorro.js";
import { CuentaCorriente } from "./Cuentas/CuentaCorriente.js";
import { CuentaNomina } from "./Cuentas/CuentaNomina.js";

/**
 * Clientes
 */
const cliente1 = new Cliente("Sofia", "111", "001");
/**
 * Cuentas Ahorros,nomina,corrientw
 */
const cuentaCorrienteSofia = new CuentaCorriente(cliente1, "1230", "12-32");
const cuentaNominaSofia = new CuentaNomina(cliente1, "Bancolombia", "13-22", 0);
const cuentaAhorroSofia = new CuentaAhorro(cliente1, "popular", "12345", 0);
/**
 * consultar el saldo
 */
let saldo = cuentaCorrienteSofia.valorSaldo();
console.log(saldo);
/**
 * Cuenta Corriente  Cliente Sofia
 * Depositos
 * Retiros
 */
console.log(cuentaCorrienteSofia);
cuentaCorrienteSofia.depositoEnCuenta(150);
console.log(cuentaCorrienteSofia.valorSaldo());
cuentaCorrienteSofia.retirarDeCuenta(70);
console.log(cuentaCorrienteSofia.valorSaldo());
/**
 * Cuenta Ahorro cliente Sofia
 * Depositos
 * Retiros
 */
console.log(cuentaAhorroSofia);
cuentaAhorroSofia.depositoEnCuenta(200);
console.log(cuentaAhorroSofia.valorSaldo());
cuentaAhorroSofia.retirarDeCuenta(120);
console.log(cuentaAhorroSofia.valorSaldo());
/**
 * Cuenta Nomina cliente Sofia
 * Depositos
 * Retiros
 */
console.log(cuentaNominaSofia);
cuentaNominaSofia.depositoEnCuenta(250);
console.log(cuentaNominaSofia.valorSaldo());
cuentaNominaSofia.retirarDeCuenta(50);
console.log(cuentaNominaSofia.valorSaldo());
