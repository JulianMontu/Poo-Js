import { Empleado } from "./Empleado";

export class Director extends Empleado {
  constructor(nombre, dni) {
    super(nombre, dni);
  }
}
