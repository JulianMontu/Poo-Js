import { CuentaCorriente } from "./CuentaCorriente.js";
import { CuentaAhorro } from "./CuentaAhorro.js";
import { Cliente } from "./Cliente.js";

const cliente1 = new Cliente("Sofia", "111", "001");
const cuentaSofia = new CuentaCorriente(cliente1, 4000000, "1230", "12-32");
console.log(cliente1);
let saldo = cuentaSofia.valorSaldo();
console.log(cuentaSofia.cantidadCuentas);

const cuentaAhorroSofia = new CuentaAhorro(cliente1, 0, "001", "920");
console.log(cuentaSofia)
console.log(cuentaAhorroSofia)