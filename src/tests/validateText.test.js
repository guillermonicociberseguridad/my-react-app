import { describe, it, expect } from "vitest";
import { validateText } from "../utils/validateText";

describe("validateText - particiones de equivalencia", () => {
  it("P1 (válida): solo letras y entre 6 y 10 caracteres", () => {
    expect(validateText("ventana")).toBe(true);
  });

  it("P2 (no válida): solo letras pero menos de 6 caracteres", () => {
    expect(validateText("casa")).toBe(false);
  });

  it("P3 (no válida): solo letras pero más de 10 caracteres", () => {
    expect(validateText("electrodomestico")).toBe(false);
  });

  it("P4 (no válida): contiene caracteres no alfabéticos", () => {
    expect(validateText("hola123")).toBe(false);
  });
});
