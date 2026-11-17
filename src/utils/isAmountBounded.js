// Devuelve true si el valor numérico está entre 1 y 1000 (ambos incluidos)
export function isAmountBounded(valor) {
  if (typeof valor !== "number" || Number.isNaN(valor)) {
    return false;
  }
  return valor >= 1 && valor <= 1000;
}
