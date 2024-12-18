// VehiculosDB.js
export const calcularPrecioPoliza = (marca, modelo, cilindraje) => {
  let base = 1500000; // Precio base en pesos colombianos

  // Ajuste por marca
  if (marca === "Toyota") base += 500000;
  else if (marca === "Mazda") base += 400000;
  else if (marca === "Chevrolet") base += 300000;

  // Ajuste por modelo
  if (modelo.includes("Corolla") || modelo.includes("3")) base += 200000;

  // Ajuste por cilindraje
  if (cilindraje > 2000) base += 300000;
  else if (cilindraje > 1600) base += 200000;

  return base;
};