// Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const key in alien) {
    console.log(alien[key]);
        
}

//👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆

// Ojo con esto. 
// A diferencia de for of que recorre arrays, for in recorre elementos. 
// Llamamos key a ese elemento dentro del array que es alien. 
// Para saber las propiedades del array bastaría con hacer console.log(key). Pero nosotros queremos saber los datos y el valor de cada propiedad, así que aquí sería
// console.log(alien[key])
//! PERO NO consoloe.log(alien.key) <-- esto nos devuelve undefined