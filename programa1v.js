/*Adultos

Escribe una función llamada `adultos` que reciba un arreglo de números (que representan edades) y 
retorne `true` si todos son adultos, o `false` de lo contrario. Un adulto tiene 18 o más pero 
menos de 70.

adultos([28, 45, 19, 21, 18, 69]) -> true
adultos([28, 45, 17, 21, 17, 70]) -> false
adultos([28, 45, 71, 21]) -> false  */

function adultos(edades){
    for (var edad of edades){
        if (edad >= 18 && edad < 70){
    }else{
        return false;
    }
} return true;
}
console.log(adultos([28, 45, 19, 21, 18, 69]))
console.log(adultos([28, 45, 17, 21, 17, 70]))
console.log(adultos([28, 45, 71, 21]))