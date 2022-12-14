// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet-async';

// data stubs
import theme from '../../data/theme';

export default function AccountPagePassword() {
    return (
        <div className="card">
            <Helmet>
                <title>{`Cambiar Contraseña — ${theme.name}`}</title>
            </Helmet>

            <div className="card-header">
                <h5>Cambiar Contraseña</h5>
            </div>
            <div className="card-divider" />
            <div className="card-body">
                <div className="row no-gutters">
                    <div className="col-12 col-lg-7 col-xl-6">
                        <div className="form-group">
                            <label htmlFor="password-current">Contraseña Actual</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password-current"
                                placeholder="Contraseña Actual"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password-new">Nueva Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password-new"
                                placeholder="Nueva Contraseña"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password-confirm">Confirmar Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password-confirm"
                                placeholder="Confirmar Contraseña"
                            />
                        </div>

                        <div className="form-group mt-5 mb-0">
                            <button type="button" className="btn btn-primary">Cambiar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
