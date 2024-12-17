import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate
import { vehiculosDB, calcularPrecioPoliza } from '../data/VehiculosDB';
import './Cotizar.css';

const Cotizar = () => {
  const [placa, setPlaca] = useState('');
  const [vehiculo, setVehiculo] = useState(null);
  const [precioPoliza, setPrecioPoliza] = useState('');
  const [comprador, setComprador] = useState({
    nombre: '',
    cedula: '',
    telefono: '',
    email: '',
    direccion: '',
    fechaNacimiento: ''
  });

  const navigate = useNavigate(); // Usamos el hook useNavigate

  const handleSearch = () => {
    const vehiculoEncontrado = vehiculosDB.find((v) => v.placa === placa);
    if (vehiculoEncontrado) {
      setVehiculo(vehiculoEncontrado);
      const precio = calcularPrecioPoliza(vehiculoEncontrado.marca, vehiculoEncontrado.modelo, vehiculoEncontrado.cilindraje);
      setPrecioPoliza(precio);
    } else {
      alert('Vehículo no encontrado');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComprador({ ...comprador, [name]: value });
  };

  const handleLoginRedirect = (e) => {
    e.preventDefault();
    navigate('/login'); // Redirige al login
  };

  return (
    <div className="cotizacion-container">
      <h2>Cotiza tu Seguro de Vehículo</h2>
      
      <div className="search-section">
        <input
          type="text"
          placeholder="Ingrese la placa del vehículo"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar Vehículo</button>
      </div>

      {vehiculo && (
        <div className="vehicle-details">
          <h3>Detalles del Vehículo</h3>
          <p><strong>Marca:</strong> {vehiculo.marca}</p>
          <p><strong>Modelo:</strong> {vehiculo.modelo}</p>
          <p><strong>Cilindraje:</strong> {vehiculo.cilindraje} cc</p>
          <p><strong>Año:</strong> {vehiculo.anio}</p>
          <p><strong>Color:</strong> {vehiculo.color}</p>
          <p><strong>Precio de la Póliza:</strong> {precioPoliza}</p>
        </div>
      )}

      {vehiculo && (
        <div>
          <h3>Datos del Comprador</h3>
          <form className="buyer-form" onSubmit={handleLoginRedirect}>
            <div className="form-group">
              <label>Nombre:</label>
              <input
                type="text"
                name="nombre"
                value={comprador.nombre}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Cédula:</label>
              <input
                type="text"
                name="cedula"
                value={comprador.cedula}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Teléfono:</label>
              <input
                type="text"
                name="telefono"
                value={comprador.telefono}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={comprador.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Dirección:</label>
              <input
                type="text"
                name="direccion"
                value={comprador.direccion}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Fecha de Nacimiento:</label>
              <input
                type="date"
                name="fechaNacimiento"
                value={comprador.fechaNacimiento}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Iniciar Sesión
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Cotizar;
