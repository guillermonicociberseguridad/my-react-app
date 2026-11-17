import { describe, it, expect } from "vitest";
import { fibonacci } from "../utils/fiboNicolas";

describe("Función fibonacci", () => {
  it("en la posición 5 devuelve 5", () => {
    expect(fibonacci(5)).toBe(5);
  });

  it("en la posición 7 devuelve 13", () => {
    expect(fibonacci(7)).toBe(13);
  });

  it("en la posición 10 devuelve 55", () => {
    expect(fibonacci(10)).toBe(55);
  });
});
