import { describe, it, expect } from "vitest";
import { isApproved } from "../utils/isApproved";

describe("isApproved - particiones de equivalencia (caja negra)", () => {
  it("P1: nota menor que 0 devuelve null", () => {
    expect(isApproved(-2)).toBeNull();
  });

  it("P2: nota entre 0 y menos de 5 devuelve false", () => {
    expect(isApproved(3)).toBe(false);
  });

  it("P3: nota entre 5 y 10 devuelve true", () => {
    expect(isApproved(7)).toBe(true);
  });

  it("P4: nota mayor que 10 devuelve null", () => {
    expect(isApproved(12)).toBeNull();
  });
});

describe("isApproved - caminos independientes (caja blanca)", () => {
  it("Camino 1: nota < 0 -> null", () => {
    expect(isApproved(-1)).toBeNull();
  });

  it("Camino 2: nota > 10 -> null", () => {
    expect(isApproved(11)).toBeNull();
  });

  it("Camino 3: nota >= 5 -> true", () => {
    expect(isApproved(5)).toBe(true);
  });

  it("Camino 4: nota < 5 -> false", () => {
    expect(isApproved(4)).toBe(false);
  });
});
