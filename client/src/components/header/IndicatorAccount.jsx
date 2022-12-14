/* eslint-disable */

// react
import React from 'react';

// third-party
import { Link } from 'react-router-dom';

// application
import Indicator from './Indicator';
import { Person20Svg } from '../../svg';

export default function IndicatorAccount() {
    const dropdown = (
        <div className="account-menu">
            <form className="account-menu__form">
                <div className="account-menu__form-title">Inicia sesión en tu cuenta</div>
                <div className="form-group">
                    <label htmlFor="header-signin-email" className="sr-only">Email</label>
                    <input
                        id="header-signin-email"
                        type="email"
                        className="form-control form-control-sm"
                        placeholder="Email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="header-signin-password" className="sr-only">Contraseña</label>
                    <div className="account-menu__form-forgot">
                        <input
                            id="header-signin-password"
                            type="password"
                            className="form-control form-control-sm"
                            placeholder="Contraseña"
                        />
                        </div>
                </div>
                <div className="form-group account-menu__form-button">
                    <button type="submit" className="btn btn-primary btn-sm">Iniciar Sesión</button>
                </div>
                <div className="account-menu__form-link">
                    <Link to="/cuenta/login">Crear una Cuenta</Link>
                </div>
            </form>
            
        </div>
    );

    return (
        <Indicator url="/cuenta" dropdown={dropdown} icon={<Person20Svg />} />
    );
}
