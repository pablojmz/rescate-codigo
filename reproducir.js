// reproducir.js — ejecuta el código legado con casos concretos para observar los bugs.
// Uso: npm run reproducir
import { procesar } from "./tienda-legado.js";
 
const carrito = [
  { nombre: "Cuaderno", precio: 19.99, cantidad: 3 },
  { nombre: "Pluma", precio: 12.5, cantidad: 2 },
];
 
function probar(descripcion, fn) {
  try {
    console.log(descripcion, "→", fn());
  } catch (error) {
    console.log(descripcion, "→ ERROR:", error.message);
  }
}
 
probar("Sin código (esperado 84.97)", () => procesar(carrito));
probar("Con PROMO10 (esperado 76.47)", () => procesar(carrito, "PROMO10"));
probar("Código inválido (esperado 84.97)", () => procesar(carrito, "OTRO"));
