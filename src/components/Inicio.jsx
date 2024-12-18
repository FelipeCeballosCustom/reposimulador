import './Inicio.css'; // Importar los estilos, si tienes un archivo de CSS

const Inicio = () => {
  return (
    <div>
      <button id="boton" onClick={() => alert('¡Botón presionado!')}>
       Inicio
      </button>
    </div>
  );
};

export default Inicio;