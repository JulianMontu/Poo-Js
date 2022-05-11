export class SistemaAutenticacion {
  /**
   * Polimorfismo, para ello ponemos el metodo estatico
   * Tipado de pato 'Duck typing' no es necesario de como se llame si no de que tipo de dato recibe
   * if (Esta usuario autenticable, autenticable es una funcion) {
            retorneme el usuario 
        }
    else{
       retorneme falso
    }
   * @param {} usuario
   * @param {} clave
   * @returns true or false
   */
  static login(usuario, clave) {
    if ("autenticable" in usuario && usuario.autenticable instanceof Function) 
        return usuario.autenticable(clave);
    else return false;
  }
}
