import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const NotFound = () => {
  const navigate = useNavigate(); 

  
  const goHome = () => {
    navigate('/'); 
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Página no encontrada</h1>
      <p style={styles.message}>La página que intentas visitar no existe. Pero no te preocupes, siempre puedes volver al inicio y seguir explorando</p>
      <button onClick={goHome} style={styles.button}>
        Volver al inicio
      </button>
    </div>
  );
};


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'f4f4f4',
    color: '#333',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  message: {
    fontSize: '1.5rem',
    marginBottom: '30px',
    color: 'black'
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#ffe600',
    color: 'black',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
  },
};

export default NotFound;