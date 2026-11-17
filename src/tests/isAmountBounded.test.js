import { describe, it, expect } from "vitest";
import { isAmountBounded } from "../utils/isAmountBounded";

describe("isAmountBounded - particiones de equivalencia", () => {
  it("P1 (no válida): valor menor que 1 devuelve false", () => {
    expect(isAmountBounded(-5)).toBe(false);
  });

  it("P2 (válida): valor entre 1 y 1000 devuelve true", () => {
    expect(isAmountBounded(500)).toBe(true);
  });

  it("P3 (no válida): valor mayor que 1000 devuelve false", () => {
    expect(isAmountBounded(1500)).toBe(false);
  });

  it("Extra: un valor que no es número devuelve false", () => {
    expect(isAmountBounded("hola")).toBe(false);
  });
});
