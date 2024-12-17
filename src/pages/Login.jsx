import React from "react";
import './Login.css';

const Login = () => {
    return (
        <div className="container">
            <div className="login-box">
                <h2>Iniciar Sesión </h2>
                <form action="#">
                    <div className="input-box">
                        <input type="email" required />
                        <label>Correo</label>
                    </div>
                    <div className="input-box">
                        <input type="password" required />
                        <label>Contraseña</label>
                    </div>
                    <div className="forgot-pss">
                        <a href="#">¿Olvidaste tu contraseñna?</a>
                    </div>
                    <button type="submit" className="btn">Iniciar Sesión</button>
                </form>
            </div>
            {/* Circles (animation) */}
            {[...Array(50)].map((_, i) => (
                <span key={i} style={{ '--i': i }}></span>
            ))}
        </div>
    );
};

export default Login;
