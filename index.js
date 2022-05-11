
import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuenta.js";
import { CuentaAhorro } from "./CuentaAhorro.js";
import { CuentaCorriente } from "./CuentaCorriente.js";
import { CuentaNomina } from "./CuentaNomina.js";


const cliente1 = new Cliente("Sofia", "111", "001");

const cuentaSofia = new CuentaCorriente(cliente1, "1230", "12-32");
const cuentaNominaSofia = new CuentaNomina(cliente1,'Bancolombia','13-22',0)
//console.log(cliente1);
let saldo = cuentaSofia.valorSaldo();
console.log(saldo)
//console.log(cuentaSofia.cantidadCuentas);

const cuentaAhorroSofia = new CuentaAhorro(cliente1,'popular','12345',0);


console.log(cuentaSofia);
cuentaSofia.depositoEnCuenta(150);
console.log(cuentaSofia.valorSaldo());
cuentaSofia.retirarDeCuenta(70);
console.log(cuentaSofia.valorSaldo());
console.log(cuentaAhorroSofia);
cuentaAhorroSofia.depositoEnCuenta(200);
console.log(cuentaAhorroSofia.valorSaldo());
cuentaAhorroSofia.retirarDeCuenta(120);
console.log(cuentaAhorroSofia.valorSaldo());

console.log(cuentaNominaSofia);
cuentaNominaSofia.depositoEnCuenta(250);
console.log(cuentaNominaSofia.valorSaldo());
cuentaNominaSofia.retirarDeCuenta(50);
console.log(cuentaNominaSofia.valorSaldo());
