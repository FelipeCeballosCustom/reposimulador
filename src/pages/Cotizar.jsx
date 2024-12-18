import { useState } from "react";
import "./Cotizar.css";

const calcularPrecioPoliza = (marca, modelo, cilindraje) => {
  const base = 500000;
  const factorMarca = marca === "Toyota" ? 1.2 : 1.1;
  const factorModelo = modelo >= 2020 ? 1.3 : 1.1;
  const factorCilindraje = cilindraje > 2000 ? 1.5 : 1.2;

  return Math.round(base * factorMarca * factorModelo * factorCilindraje);
};

const Cotizar = () => {
  const [vehiculo, setVehiculo] = useState({
    marca: "",
    modelo: "",
    cilindraje: "",
    placa: "",
    color: "",
  });
  const [comprador, setComprador] = useState({
    nombre: "",
    cedula: "",
    telefono: "",
    email: "",
    direccion: "",
    fechaNacimiento: "",
  });
  const [precioPoliza, setPrecioPoliza] = useState(null);

  const handleInputChange = (e, setState) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCotizar = () => {
    const { marca, modelo, cilindraje } = vehiculo;
    if (!marca || !modelo || !cilindraje) {
      alert("Por favor, completa todos los campos del vehículo.");
      return;
    }
    const precio = calcularPrecioPoliza(marca, modelo, parseInt(cilindraje));
    setPrecioPoliza(precio);
  };

  return (
    <div className="cotizacion-container">
      <h2>Cotiza tu Seguro</h2>
      <div className="form-container">
        <div className="section">
          <h3>Datos del Vehículo</h3>
          {["marca", "modelo", "cilindraje", "placa", "color"].map((field) => (
            <div className="form-group" key={field}>
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
              <input
                type={field === "modelo" || field === "cilindraje" ? "number" : "text"}
                name={field}
                value={vehiculo[field]}
                onChange={(e) => handleInputChange(e, setVehiculo)}
                placeholder={field === "placa" ? "ABC123" : ""}
              />
            </div>
          ))}
        </div>
        <div className="section">
          <h3>Datos del Tomador</h3>
          {["nombre", "cedula", "telefono", "email", "direccion", "fechaNacimiento"].map(
            (field) => (
              <div className="form-group" key={field}>
                <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                <input
                  type={field === "fechaNacimiento" ? "date" : "text"}
                  name={field}
                  value={comprador[field]}
                  onChange={(e) => handleInputChange(e, setComprador)}
                  placeholder={field === "email" ? "ejemplo@gmail.com" : ""}
                />
              </div>
            )
          )}
        </div>
      </div>
      <button className="submit-button" onClick={handleCotizar}>
        Cotizar
      </button>
      {precioPoliza !== null && (
        <div className="resultado">
          <h3>Precio de la Póliza</h3>
          <p>${precioPoliza.toLocaleString("es-CO")}</p>
        </div>
      )}
    </div>
  );
};

export default Cotizar;