import { describe, it, expect } from "vitest";
import { multi } from "../utils/multi";

describe("Función multi", () => {
  it("a) multi debe ser una función", () => {
    expect(typeof multi).toBe("function");
  });

  it("b) multiplica correctamente dos números positivos", () => {
    expect(multi(4, 5)).toBe(20);
  });

  it("c) multiplica correctamente dos números negativos", () => {
    expect(multi(-3, -6)).toBe(18);
  });

  it("d) multiplica correctamente un negativo y un positivo", () => {
    expect(multi(-4, 7)).toBe(-28);
  });
});
