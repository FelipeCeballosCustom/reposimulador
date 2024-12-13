import React from 'react';
import './InfoSeguros.css'; // Asegúrate de que el archivo CSS esté presente.

const InfoSeguros = () => {
  return (
    <div className="info-seguro">
      <header className="header">
        <div className="nav-bar">
          <img src="public/logo1.png" alt="Logo" className="logo" />
          <nav className="nav">
            <ul>
              <img src="/person.png" alt="Persona" />
            </ul>
          </nav>
        </div>

        <div className="banner">
          <div className="banner-text">
            <h1>Seguro Todo Riesgo</h1>
            <p>
              Tranquilidad garantizada para proteger tu carro de robos y daños con la opción de financiar tu seguro de vehículo hasta por 12 meses.
              ¡Obtén el respaldo que necesitas donde quieras y cuando quieras!
            </p>
            <a href="/cotizar">
              <button className="button"><b>Cotizar</b></button>
            </a>
          </div>

          <div className="banner-image">
            <img src="/image.png" alt="Restaurante" />
            <ul className="banner-list">
              <li>Cotiza en menos de 3 minutos</li>
              <li>Financiación en 12 cuotas</li>
              <li>Cancelación gratuita</li>
            </ul>
          </div>
        </div>
      </header>

      <div className="info-seguro-vehiculo">
        <div className="contenedor-logo"></div>
        <h2>Información Seguros Vehículos</h2>
        <ul>
          <li>El seguro de vehículos es una cobertura que protege tu automóvil ante accidentes, robos y otros imprevistos.</li>
          <li>Existen diferentes tipos de seguros como el seguro a terceros, seguro a todo riesgo, y seguro de daños propios.</li>
          <li>Con este simulador, podrás obtener una estimación del costo de tu seguro según el tipo de cobertura y las características de tu vehículo.</li>
        </ul>
      </div>
      <div className='tittle'><h1>¿Por qué elegir tu seguro con nosotros?</h1></div>
      
      <div class="info-seguro-nosotros">
  <div class="info-item">
    <img src="/fondos.png" alt="Financiación" />
    <h3>Financia hasta en 12 cuotas</h3>
    <p>Distribuye el pago de tu seguro en cuotas mensuales que se adapten a tu presupuesto y garantiza la protección de tu vehículo.</p>
  </div>
  <div class="info-item">
    <img src="/pique.png" alt="Cotización rápida" />
    <h3>Cotiza en menos de 2 minutos</h3>
    <p>Obtén tu cotización en minutos y asegura tu auto con una cobertura completa, sin trámites ni complicaciones.</p>
  </div>
  <div class="info-item">
    <img src="/cancelacion.png" alt="Cancelación gratuita" />
    <h3>Cancelación gratuita</h3>
    <p>Podrás cancelar tu seguro en cualquier momento, pagando solo por el tiempo que hayas estado cubierto.</p>
  </div>
</div>
<a className='button12'  href="/cotizar">
    <button className="button2"><b>Cotizar</b></button>
     </a>
    </div>
  );
};

export default InfoSeguros;