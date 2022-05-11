import { Empleado } from "./Empleado";

export class Gerente extends Empleado {
  constructor(nombre, dni) {
    super(nombre, dni);
  }
}
