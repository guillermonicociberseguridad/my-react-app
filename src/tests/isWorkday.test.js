import { describe, it, expect } from "vitest";
import { isWorkday } from "../utils/isWorkday";

describe("isWorkday - caminos independientes", () => {
  it("Camino 1: lunes -> true", () => expect(isWorkday("lunes")).toBe(true));
  it("Camino 2: martes -> true", () => expect(isWorkday("martes")).toBe(true));
  it("Camino 3: miércoles -> true", () => expect(isWorkday("miércoles")).toBe(true));
  it("Camino 4: jueves -> true", () => expect(isWorkday("jueves")).toBe(true));
  it("Camino 5: viernes -> true", () => expect(isWorkday("viernes")).toBe(true));
  it("Camino 6: sábado -> false", () => expect(isWorkday("sábado")).toBe(false));
  it("Camino 7: domingo -> false", () => expect(isWorkday("domingo")).toBe(false));
  it("Camino 8: otro valor (default) -> false", () => expect(isWorkday("hola")).toBe(false));
});
