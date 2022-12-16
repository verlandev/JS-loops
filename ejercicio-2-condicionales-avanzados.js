// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***.

// Puedes usar este array para probar tu función:

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];


//Creamos un array vacío para saber

// Creamos un bucle que saque cada alumno de la lista de alumnos con sus respectivos trimestres.
// for (const alumn of alumns) {
//   const isApproved = [];

//   if (alumn.T1) {
//     isApproved.push("Yes");
//   }
//   if (alumn.T2) {
//     isApproved.push("Yes");
//   }
//   if (alumn.T3) {
//     isApproved.push("Yes");
//   }
//   if (isApproved.length >= 2) {
//     alumn.isApproved = true;
//   }else{
//     alumn.isApproved = false;
//   }
  
// //   console.log(isApproved.length);
// }


//  👆👆👆👆👆👆
//  Lo que estamos haciendo con este tipo de resolución es: 
// 1. establecer una constante alumn: esta constante solo se estudia de la línea 16 hasta la línea 33. Después de esta línea es como si no existiera. 
// 2. A su vez y dentro del bucle, creamos una constante llamada "isApproved" con la que vamos a sacar los alumnos que han aprobado. Sin embargo, es importante ver que esta variable es de tipo booleano es decir que las respuestas que van a dar son o "true" o "false". Eso quiere decir que da igual que le pongamos el "yes", eso no lo va a leer en esta solución. 
// 3. A través de condicionales podemos saber qué alumnos tienen el trimestre true o false. Pero OJO:
// !IMPORTANTE : alumn.T1 / alumn.T2 / alumn.T3 es lo mismo que decir alumno.T1 === true / alumn.T2 === true / alumn.T3 === true. Pero no hace falta ponerlo. Esto  puede dar lugar a error, porque parece que lo que le estamos preguntando es si los alumnos tienen uno de los 3 trimestres, cuando lo que le estamos preguntando en realidad es cuantos trimestre están en true.
// El "yes" que viene como string da igual porque la consola no lo va a leer, pero sí que hay que poner algo "pepe", "pedro", "su puta madre" para que el sistema sepa que hay una diferencia entre los true y los false. 
// *Pero recuerda: si haces un else para referirte a los false y le pones un push, te contará el false también, pero cómo no te dirá el string de false, no sabrá diferencia el true y el false. Por eso, es mejor hacer solo el if. 
//Después de hacerlo para los 3 trimestres, tenemos que verificar si los alumnos tienen al menos 2 trues. Por eso medimos lo que vale isApproved.length que en este caso medirá la longitud en cuanto a cuántas veces ha contado "true". Y si lo ha contado más o igual a dos veces, le indicamos que la propiedad de isApproved (una propiedad como name o T1, T2, T3) marca "true". 
// Y al final, tenemos que poner un else que diga que en caso de que no sea true, sea false.

//? Es una solución válida, pero no es muy óptima. 

// Otra forma de resolverlo sería 
// 👇👇👇👇👇👇👇



for (const alumn of alumns) {
    
    let T1 = alumn.T1;
    let T2 = alumn.T2;
    let T3 = alumn.T3;
    
    if ((T1&&T2) || (T2&&T3) || (T1&&T3)){
        alumn.isApproved = true;
    }
    console.log(alumn)
}
