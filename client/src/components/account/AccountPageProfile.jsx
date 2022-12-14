// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet-async';

// data stubs
import theme from '../../data/theme';

export default function AccountPageProfile() {
    return (
        <div className="card">
            <Helmet>
                <title>{`Perfil — ${theme.name}`}</title>
            </Helmet>

            <div className="card-header">
                <h5>Editar Perfil</h5>
            </div>
            <div className="card-divider" />
            <div className="card-body">
                <div className="row no-gutters">
                    <div className="col-12 col-lg-7 col-xl-6">
                        <div className="form-group">
                            <label htmlFor="profile-first-name">Nombre(s)</label>
                            <input
                                id="profile-first-name"
                                type="text"
                                className="form-control"
                                placeholder="Nombre(s)"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="profile-last-name">Apellido</label>
                            <input
                                id="profile-last-name"
                                type="text"
                                className="form-control"
                                placeholder="Apellido"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="profile-email">Email</label>
                            <input
                                id="profile-email"
                                type="email"
                                className="form-control"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="profile-phone">Teléfono</label>
                            <input
                                id="profile-phone"
                                type="text"
                                className="form-control"
                                placeholder="Teléfono"
                            />
                        </div>

                        <div className="form-group mt-5 mb-0">
                            <button type="button" className="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
