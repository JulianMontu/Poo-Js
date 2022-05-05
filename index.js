//import { CuentaCorriente } from "./CuentaCorriente.js";
//import { CuentaAhorro } from "./CuentaAhorro.js";
import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuenta.js";

const cliente1 = new Cliente("Sofia", "111", "001");
const cuentaSofia = new Cuenta(cliente1, 4000000, "1230", "12-32");
console.log(cliente1);
let saldo = cuentaSofia.valorSaldo();
console.log(cuentaSofia.cantidadCuentas);

const cuentaAhorroSofia = new Cuenta(cliente1, 0, "001", "920");
console.log(cuentaSofia);
cuentaSofia.depositoEnCuenta(150000);
console.log(cuentaSofia.valorSaldo());
cuentaSofia.retirarDeCuenta(70000);
console.log(cuentaSofia.valorSaldo());
console.log(cuentaAhorroSofia);
cuentaAhorroSofia.depositoEnCuenta(200000);
console.log(cuentaAhorroSofia.valorSaldo());
cuentaAhorroSofia.retirarDeCuenta(10000);
console.log(cuentaAhorroSofia.valorSaldo());
