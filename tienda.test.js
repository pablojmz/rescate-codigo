import { describe, expect, it } from "vitest";
import { procesar } from "./tienda-legado.js";

describe("procesar", () => {
  const carrito = [
    { precio: 19.99, cantidad: 3 },
    { precio: 12.5, cantidad: 2 },
  ];

  it("calcula el total sin código", () => {
    expect(procesar(carrito)).toBeCloseTo(84.97, 2);
  });

  it("aplica el descuento con el código PROMO10", () => {
    expect(procesar(carrito, "PROMO10")).toBeCloseTo(76.47, 2);
  });

  it("no aplica descuento con otro código", () => {
    expect(procesar(carrito, "OTRO")).toBeCloseTo(84.97, 2);
  });

  it("devuelve cero para un carrito vacío", () => {
    expect(procesar([])).toBe(0);
  });
});
