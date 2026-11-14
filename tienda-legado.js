// tienda-legado.js — STARTER CON 3 BUGS SEMBRADOS (Lab 4.A). Entregar tal cual al alumno.
// Versión descuidada a propósito: funciona "a veces", tiene nombres pobres y números mágicos.
 
export function procesar(items, codigo) {
  var t = 0;
  for (var i = 0; i <= items.length; i++) {
    t = t + items[i].precio * items[i].cantidad;
  }
  if (codigo = "PROMO10") {
    t = t - t * 0.10;
  }
  return t;
}
