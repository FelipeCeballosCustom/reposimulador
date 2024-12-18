
import './InfoSeguros.css'; // Asegúrate de que el archivo CSS esté presente.
import { Link } from 'react-router-dom';

const InfoSeguros = () => {
  return (
    <div className="info-seguro">
      <header className="header">
        <div className="nav-bar">
          <nav className="nav">
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#contenedor-logo">Información</a></li>
              <li><a href="#seguro-nosotros">Elige tu seguro con nosotros</a></li>
              <li><a href="#seguro-todo-riesgo">Cómo elegir un seguro todo riesgo</a></li>
              <li>
              <Link to="/login">Ingresa</Link>
              </li>

            </ul>
          </nav>
        </div>

        <div id="inicio" className="banner">
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
            <img src="/carro.png" alt="carro" />
            <ul className="banner-list">
              <li>Cotiza en menos de 3 minutos</li>
              <li>Financiación en 12 cuotas</li>
              <li>Cancelación gratuita</li>
            </ul>
          </div>
        </div>
      </header>

      <div id="contenedor-logo" className="info-seguro-vehiculo">
        <h2>Información Seguros Vehículos</h2>
        <ul>
          <li>El seguro de vehículos es una cobertura que protege tu automóvil ante accidentes, robos y otros imprevistos.</li>
          <li>Existen diferentes tipos de seguros como el seguro a terceros, seguro a todo riesgo, y seguro de daños propios.</li>
          <li>Con este simulador, podrás obtener una estimación del costo de tu seguro según el tipo de cobertura y las características de tu vehículo.</li>
        </ul>
      </div>

      <div id="seguro-nosotros" className="tittle">
        <h1>¿Por qué elegir tu seguro con nosotros?</h1>
      </div>

      <div className="info-seguro-nosotros">
        <div className="info-item">
          <img src="/fondos.png" alt="Financiación" />
          <h3>Financia hasta en 12 cuotas</h3>
          <p>Distribuye el pago de tu seguro en cuotas mensuales que se adapten a tu presupuesto y garantiza la protección de tu vehículo.</p>
        </div>
        <div className="info-item">
          <img src="/pique.png" alt="Cotización rápida" />
          <h3>Cotiza en menos de 2 minutos</h3>
          <p>Obtén tu cotización en minutos y asegura tu auto con una cobertura completa, sin trámites ni complicaciones.</p>
        </div>
        <div className="info-item">
          <img src="/cancelacion.png" alt="Cancelación gratuita" />
          <h3>Cancelación gratuita</h3>
          <p>Podrás cancelar tu seguro en cualquier momento, pagando solo por el tiempo que hayas estado cubierto.</p>
        </div>
      </div>
      
      <a className="button12" href="/cotizar">
        <button className="button2"><b>Cotizar</b></button>
      </a>

      <div id="seguro-todo-riesgo" className="contenedor">
        <div className="encabezado">
          <h1>¿Cómo elegir un Seguro Todo Riesgo?</h1>
          <p>Aprende cómo funciona un seguro para carros y sus coberturas más importantes.</p>
        </div>

        <div className="coberturas">
          <div className="cobertura-elemento">
            <h2>Daños a terceros</h2>
            <p>
              Actúa cuando quien provoca el siniestro eres tú. Hay tres opciones dentro de esta cobertura:
              por los daños emergentes, asociados a lo material y a lesiones o fallecimiento de alguna persona. 
              Los morales, que aplican cuando el tercero sufre daños psicológicos. Y por último, por el lucro cesante, 
              que se acciona en caso que la persona pierda su herramienta de trabajo producto del accidente y no pueda generar ingresos.
            </p>
          </div>
          <div className="cobertura-elemento">
            <h2>Pérdida total</h2>
            <p>
              Esta cobertura aplica cuando el daño del vehículo supera el 75% de su valor comercial.
            </p>
          </div>
          <div className="cobertura-elemento">
            <h2>Pérdida parcial</h2>
            <p>
              Cobertura para reparaciones menores cuyo costo es inferior al valor total del vehículo.
            </p>
          </div>
          <div className="cobertura-elemento">
            <h2>Grúa</h2>
            <p>
              Servicio de asistencia en carretera para remolcar tu vehículo en caso de siniestro o avería.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSeguros;
