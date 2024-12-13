export const vehiculosDB = [
    { placa: "AAA001", marca: "Toyota", modelo: "Corolla", linea: "XLI", color: "Blanco", cilindraje: 1800, anio: 2020 },
    { placa: "AAA002", marca: "Chevrolet", modelo: "Sparc", linea: "LT", color: "Rojo", cilindraje: 1200, anio: 2018 },
    { placa: "AAA003", marca: "Nissan", modelo: "Altima", linea: "SR", color: "Negro", cilindraje: 2400, anio: 2019 },
    { placa: "AAA004", marca: "Mazda", modelo: "Mazda3", linea: "GT", color: "Azul", cilindraje: 2000, anio: 2021 },
    { placa: "AAA005", marca: "Hyundai", modelo: "Elantra", linea: "GLS", color: "Gris", cilindraje: 1600, anio: 2022 },
    { placa: "AAA006", marca: "Ford", modelo: "Focus", linea: "Titanium", color: "Verde", cilindraje: 2000, anio: 2020 },
    { placa: "AAA007", marca: "Kia", modelo: "Cerato", linea: "EX", color: "Amarillo", cilindraje: 1600, anio: 2021 },
    { placa: "AAA008", marca: "Honda", modelo: "Civic", linea: "EX", color: "Rojo", cilindraje: 2000, anio: 2020 },
    { placa: "AAA009", marca: "Mazda", modelo: "CX-5", linea: "Grand Touring", color: "Blanco", cilindraje: 2200, anio: 2022 },
    { placa: "AAA010", marca: "Nissan", modelo: "X-Trail", linea: "S", color: "Negro", cilindraje: 2500, anio: 2021 },
    { placa: "AAA011", marca: "Toyota", modelo: "Hilux", linea: "SR5", color: "Plata", cilindraje: 2800, anio: 2022 },
    { placa: "AAA012", marca: "Chevrolet", modelo: "Tracker", linea: "Premier", color: "Azul", cilindraje: 1500, anio: 2022 },
    { placa: "AAA013", marca: "Honda", modelo: "CR-V", linea: "EXL", color: "Verde", cilindraje: 1800, anio: 2021 },
    { placa: "AAA014", marca: "Ford", modelo: "Ranger", linea: "XLT", color: "Gris", cilindraje: 3000, anio: 2022 },
    { placa: "AAA015", marca: "Hyundai", modelo: "Tucson", linea: "GL", color: "Naranja", cilindraje: 2000, anio: 2020 },
    { placa: "AAA016", marca: "Mazda", modelo: "Mazda6", linea: "Signature", color: "Negro", cilindraje: 2200, anio: 2021 },
    { placa: "AAA017", marca: "Kia", modelo: "Sportage", linea: "LX", color: "Blanco", cilindraje: 1900, anio: 2020 },
    { placa: "AAA018", marca: "Chevrolet", modelo: "Aveo", linea: "LTZ", color: "Rojo", cilindraje: 1500, anio: 2019 },
    { placa: "AAA019", marca: "Toyota", modelo: "Land Cruiser", linea: "PRADO", color: "Gris", cilindraje: 4000, anio: 2021 },
    { placa: "AAA020", marca: "Ford", modelo: "Edge", linea: "Sport", color: "Verde", cilindraje: 2500, anio: 2022 },
    { placa: "AAA021", marca: "Nissan", modelo: "370Z", linea: "Sport", color: "Azul", cilindraje: 3500, anio: 2021 },
    { placa: "AAA022", marca: "Mazda", modelo: "MX-5", linea: "Miata", color: "Amarillo", cilindraje: 2000, anio: 2020 },
    { placa: "AAA023", marca: "Honda", modelo: "Pilot", linea: "EX", color: "Plata", cilindraje: 3500, anio: 2022 },
    { placa: "AAA024", marca: "Hyundai", modelo: "Palisade", linea: "Limited", color: "Negro", cilindraje: 3300, anio: 2021 },
    { placa: "AAA025", marca: "Toyota", modelo: "Fortuner", linea: "SR", color: "Rojo", cilindraje: 2800, anio: 2020 },
    { placa: "AAA026", marca: "Chevrolet", modelo: "Camaro", linea: "SS", color: "Amarillo", cilindraje: 6000, anio: 2022 },
    { placa: "AAA027", marca: "Kia", modelo: "Seltos", linea: "S", color: "Verde", cilindraje: 1600, anio: 2022 },
    { placa: "AAA028", marca: "Mazda", modelo: "CX-9", linea: "Signature", color: "Blanco", cilindraje: 3500, anio: 2021 },
    { placa: "AAA029", marca: "Hyundai", modelo: "Santa Fe", linea: "AWD", color: "Negro", cilindraje: 2900, anio: 2022 },
    { placa: "AAA030", marca: "Ford", modelo: "Explorer", linea: "XLT", color: "Azul", cilindraje: 3000, anio: 2021 }
  ];
  
  // calcular precio
  export const calcularPrecioPoliza = (marca, modelo, cilindraje) => {
    let precio = 1500000;
    if (marca === "Toyota") {
      precio += 1000000;
    } else if (marca === "Chevrolet") {
      precio += 800000;
    } else if (marca === "Nissan") {
      precio += 1200000;
    } else if (marca === "Mazda") {
      precio += 1500000;
    } else if (marca === "Ford") {
      precio += 1100000;
    } else if (marca === "Kia") {
      precio += 950000;
    } else if (marca === "Hyundai") {
      precio += 1000000;
    }
  
    // +-
    if (cilindraje > 2500) {
      precio += 2000000;
    } else if (cilindraje < 1500) {
      precio -= 500000;
    }
  
    return `${precio.toLocaleString()} COP`;
  };  