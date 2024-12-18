import React from "react";
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="contenedores">
            <div className="circulo">
                <div className="cuadroLogin">
                    <h2>Crear Cuenta</h2>
                    <form action="#">
                    <div className="campoInput">
                    <input type="text" placeholder="Nombre(s)" required />
                    </div>
                    <div className="campoInput">
                    <input type="text" placeholder="Apellido(s)" required />
                    </div>
                    <div className="campoInput">
                    <input type="date" placeholder="Fecha de nacimiento" required />
                    </div>
                    <div className="campoInput">
                    <input type="email" placeholder="Correo electrónico" required />
                    </div>
                    <div className="campoInput">
                    <input type="password" placeholder="Contraseña" required />
                    </div>
                        <div className="enlaceOlvido">
                            <a href="/login">¿Ya tienes una cuenta? Inicia sesión</a> {/* Redirige a login */}
                        </div>
                        <button type="submit" className="boton">Crear cuenta</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
