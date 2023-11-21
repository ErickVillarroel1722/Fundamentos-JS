// OBJETOS
const persona = {
  nombre: "Alex",
  apellido: "Ramírez",
  edad: 28,
  correo: "alex.r@gmail.com",
  activa: true,
  direccion: {
      ciudad: "Barcelona",
      pais: "España",
      calle: "Calle Gran Vía",
      edificio: "Edificio 7 2:B"
  },
  mejorAmigo: {
      nombre: "David",
      apellido: "López",
      edad: 26
  },
  otrosAmigos: ["Elena", "Juan", "María"],
  enviarCorreo() {
      return `Enviar notificación a ${this.otrosAmigos[0]}`;
  }
};

console.log(JSON.stringify(persona));
console.log(persona);

// Desestructuración de Objetos
const { nombre, edad, otrosAmigos, activa } = persona;
console.log(nombre, edad, otrosAmigos, activa);

// Unir Objetos
const nuevaDireccion = {
  ciudad: "Valencia",
  pais: "España",
  calle: "Calle del Carmen",
  edificio: "Edificio 15 4:A"
};

const todaInformacion = { ...persona, ...nuevaDireccion };
console.log(todaInformacion);

// ARREGLOS
const numeros = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

console.log(numeros.length);
console.log(numeros[0]);
console.log(numeros[9]);

// Métodos de Modificación de Arreglos
numeros.push(77);
numeros.unshift(0);
numeros.pop();
numeros.shift();

console.log("Arreglo Modificado:", numeros);

// Método find y map en Arreglos
const encontrado = numeros.find(e => e > 40);
console.log("Encontrado:", encontrado);

const nuevoDatos = numeros.map(e => e * 2);
console.log("Nuevo Datos (multiplicado por 2):", nuevoDatos);

// Desestructuración de Arreglos
const [num1, num2, num3, num4, nombres] = numeros;
console.log("Arreglo Desestructurado:", num1, num2, num3, num4, nombres);