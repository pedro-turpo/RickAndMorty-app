/* Funcion que me retorna un numero aleatorio entre el  1 al 126 */
export const randomLocation = () => {

    return Math.floor(Math.random()* 126) + 1
}