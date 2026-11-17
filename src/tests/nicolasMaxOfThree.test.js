import { describe, it, expect } from "vitest";
import { nicolasMaxOfThree } from "../utils/nicolasMaxOfThree";

describe("nicolasMaxOfThree - caminos independientes", () => {
  it("Camino 1: a > b y a > c -> devuelve a", () => {
    expect(nicolasMaxOfThree(9, 4, 2)).toBe(9);
  });

  it("Camino 2: a > b y a <= c -> devuelve c", () => {
    expect(nicolasMaxOfThree(5, 2, 8)).toBe(8);
  });

  it("Camino 3: a <= b y b > c -> devuelve b", () => {
    expect(nicolasMaxOfThree(1, 7, 3)).toBe(7);
  });

  it("Camino 4: a <= b y b <= c -> devuelve c", () => {
    expect(nicolasMaxOfThree(1, 2, 6)).toBe(6);
  });
});
