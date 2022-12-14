// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// data stubs
import theme from '../../data/theme';

export default function AccountPageOrderDetails() {
    return (
        <React.Fragment>
            <Helmet>
                <title>{`Detalles de Orden — ${theme.name}`}</title>
            </Helmet>

            <div className="card">
                <div className="order-header">
                    <div className="order-header__actions">
                        <Link to="/account/orders" className="btn btn-xs btn-secondary">Volver a la lista</Link>
                    </div>
                    <h5 className="order-header__title">Orden #4120</h5>
                    <div className="order-header__subtitle">
                        Pedido el
                        {' '}
                        <mark className="order-header__date">20 Julio, 2022</mark>
                        {' '}
                        - Status:
                        {' '}
                        <mark className="order-header__status">Pendiente</mark>
                        .
                    </div>
                </div>
                <div className="card-divider" />
                <div className="card-table">
                    <div className="table-responsive-sm">
                        <table>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody className="card-table__body card-table__body--merge-rows">
                                <tr>
                                    <td>Faro Para Niebla Con Base Lado Conductor × 2</td>
                                    <td>$2,261.68</td>
                                </tr>
                                <tr>
                                    <td>Par de Cuartos Laterales × 1</td>
                                    <td>$170.30</td>
                                </tr>
                                <tr>
                                    <td>Llanta 205 /55 R16 × 3</td>
                                    <td>$4,782.21</td>
                                </tr>
                            </tbody>
                            <tbody className="card-table__body card-table__body--merge-rows">
                                <tr>
                                    <th>Subtotal</th>
                                    <td>$7,213.68</td>
                                </tr>
                                <tr>
                                    <th>Crédito de la tienda</th>
                                    <td>$-200.00</td>
                                </tr>
                                <tr>
                                    <th>Envío</th>
                                    <td>$0.00</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Total</th>
                                    <td>$7,013.68</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>

            <div className="row mt-3 no-gutters mx-n2">
                <div className="col-sm-6 col-12 px-2">
                    <div className="card address-card address-card--featured">
                        <div className="address-card__body">
                            <div className="address-card__badge address-card__badge--muted">Dirección de envío</div>
                            <div className="address-card__name">Elena Garcia</div>
                            <div className="address-card__row">
                                México
                                <br />
                                63000, Tepic
                                <br />
                                Durango #1658
                            </div>
                            <div className="address-card__row">
                                <div className="address-card__row-title">Teléfono</div>
                                <div className="address-card__row-content">311 154 6478</div>
                            </div>
                            <div className="address-card__row">
                                <div className="address-card__row-title">Email</div>
                                <div className="address-card__row-content">usuario@correo.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-12 px-2 mt-sm-0 mt-3">
                    <div className="card address-card address-card--featured">
                        <div className="address-card__body">
                            <div className="address-card__badge address-card__badge--muted">Dirección de Facturacón</div>
                            <div className="address-card__name">Elena Garcia</div>
                            <div className="address-card__row">
                                México
                                <br />
                                63000, Tepic
                                <br />
                                Durango #1658
                            </div>
                            <div className="address-card__row">
                                <div className="address-card__row-title">Teléfono</div>
                                <div className="address-card__row-content">311 154 6478</div>
                            </div>
                            <div className="address-card__row">
                                <div className="address-card__row-title">Email</div>
                                <div className="address-card__row-content">usuario@correo.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
