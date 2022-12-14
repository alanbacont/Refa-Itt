// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet-async';

// data stubs
import theme from '../../data/theme';

export default function AccountPageEditAddress() {
    return (
        <div className="card">
            <Helmet>
                <title>{`Editar Dirección — ${theme.name}`}</title>
            </Helmet>

            <div className="card-header">
                <h5>Editar Dirección</h5>
            </div>
            <div className="card-divider" />
            <div className="card-body">
                <div className="row no-gutters">
                    <div className="col-12 col-lg-10 col-xl-8">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="checkout-first-name">Nombre(s)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="checkout-first-name"
                                    placeholder="Nombre(s)"
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="checkout-last-name">Apellido</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="checkout-last-name"
                                    placeholder="Apellido"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="checkout-company-name">
                                Compañía
                                {' '}
                                <span className="text-muted">(Opcional)</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="checkout-company-name"
                                placeholder="Compañía"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="checkout-country">País</label>
                            <select id="checkout-country" className="form-control form-control-select2">
                                <option>Selecciona un País...</option>
                                <option>México</option>
                                <option>Estados Unidos</option>
                                <option>Rusia</option>
                                <option>Italia</option>
                                <option>Ucrania</option>
                                <option>Alemania</option>
                                <option>Australia</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="checkout-street-address">Dirección</label>
                            <input
                                type="text"
                                className="form-control"
                                id="checkout-street-address"
                                placeholder="Calle, número y colonia"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="checkout-address">
                                Número interior
                                {' '}
                                <span className="text-muted">(Opcional)</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="checkout-address"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="checkout-city">Municipio</label>
                            <input
                                type="text"
                                className="form-control"
                                id="checkout-city"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="checkout-state">Estado</label>
                            <input
                                type="text"
                                className="form-control"
                                id="checkout-state"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="checkout-postcode">Código Postal</label>
                            <input
                                type="text"
                                className="form-control"
                                id="checkout-postcode"
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="checkout-email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="checkout-email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="checkout-phone">Teléfono</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="checkout-phone"
                                    placeholder="Teléfono"
                                />
                            </div>
                        </div>

                        <div className="form-group mt-3 mb-0">
                            <button className="btn btn-primary" type="button">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
