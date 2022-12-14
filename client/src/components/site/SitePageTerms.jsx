// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// application
import PageHeader from '../shared/PageHeader';

// data stubs
import theme from '../../data/theme';

function SitePageTerms() {
    const breadcrumb = [
        { title: 'Inicio', url: '' },
        { title: 'Terminos y Condiciones', url: '' },
    ];

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Terminos y Condiciones — ${theme.name}`}</title>
            </Helmet>

            <PageHeader breadcrumb={breadcrumb} />

            <div className="block">
                <div className="container">
                    <div className="document">
                        <div className="document__header">
                            <h1 className="document__title">Terminos y Condiciones</h1>
                            <div className="document__subtitle">Este acuerdo fue modificado el 24 de julio del 2022.</div>
                        </div>
                        <div className="document__content typography">
                            <p>
                                Refaccionaria Ruiz, se reserva el derecho de modificar
                                términos, precios, condiciones y descuentos en cualquier producto,
                                así como en promociones, sin responsabilidad alguna. Así mismo,
                                se reserva el derecho de modificar en cualquier momento los
                                términos y condiciones de sus políticas comerciales.
                            </p>

                            <h2>Alta de clientes</h2>
                            <h5>Requisitos para registrarse como cliente</h5>
                            <ol>
                                <li>
                                    — Registro automático en línea :
                                    <strong> Personas físicas </strong>
                                    — Nombre completo
                                    — Domicilio actual
                                    — Teléfono y correo electrónico
                                </li>
                                <li>
                                    <strong> Personas morales </strong>
                                    — Razón social
                                    — Domicilio actual
                                    — Teléfono y correo electrónico
                                </li>
                            </ol>

                            <h2>Políticas de ventas</h2>

                            <p>
                                Refeccionaria Ruiz se reserva el
                                derecho de vender mercancía a aquellos usuarios
                                que no estén debidamente registrados como clientes
                                mediante el formato de alta de cliente, que en algún
                                momento hayan presentado problemas de pago o legales
                                y de cualquier otro que pudiera ser en perjuicio de
                                la empresa.
                            </p>
                            <p>
                                Todas las ofertas y listas de precio, publicadas
                                manualmente o en medios electrónicos, tienen carácter
                                indicativo, Refaccionaria Ruiz se reserva
                                el derecho de aumentar o modificar dichos precios sin
                                previo aviso.
                            </p>
                            <p>
                                La aceptación de pedidos se realiza a reserva de posibles
                                aumentos de precio, el precio ofrecido puede mantenerse
                                solo si se encuentra amparado por una cotización expresa y
                                vigente emitida por Refaccionaria Ruiz, sin
                                que el plazo exceda las 18:30 horas del día siguiente
                                a partir del día de la cotización.
                            </p>

                            <p>
                                Para obtener información sobre cómo ponerse en contacto con
                                nosotros, visite nuestro
                                <Link to="/sitio/contacto"> Página de Contacto</Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SitePageTerms;
