// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet-async';

// application
import PageHeader from '../shared/PageHeader';

// data stubs
import theme from '../../data/theme';

function SitePageFaq() {
    const breadcrumb = [
        { title: 'Inicio', url: '' },
        { title: 'Preguntas Frecuentes', url: '' },
    ];

    return (
        <React.Fragment>
            <Helmet>
                <title>{`FAQ — ${theme.name}`}</title>
            </Helmet>

            <PageHeader header="Preguntas Frecuentes" breadcrumb={breadcrumb} />

            <div className="block faq">
                <div className="container">
                    <div className="faq__section">
                        <div className="faq__section-title">
                            <h3>Información de Envíos</h3>
                        </div>
                        <div className="faq__section-body">
                            <div className="row">
                                <div className="faq__section-column col-12 col-lg-6">
                                    <div className="typography">
                                        <h6>¿Qué métodos de envío están disponibles?</h6>

                                        <p>
                                            Tenemos disponible por Correos de México
                                            en tiempo real.
                                        </p>

                                        <h6>¿Realizan envíos internacionales?</h6>

                                        <p>
                                            Sí, realizamos envíos a donde el cliente lo
                                            requiera, a cualquier lado.
                                        </p>
                                    </div>
                                </div>
                                <div className="faq__section-column col-12 col-lg-6">
                                    <div className="typography">
                                        <h6>¿Cuánto tiempo tardan en ser enviados los pedidos?</h6>

                                        <p>
                                            Dependiendo el lugar a donde se realicé el
                                            envío del pedido, puede variar el tiempo, dependiendo
                                            la distancia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="faq__section">
                        <div className="faq__section-title">
                            <h3>Información de Pago</h3>
                        </div>
                        <div className="faq__section-body">
                            <div className="row">
                                <div className="faq__section-column col-12 col-lg-6">
                                    <div className="typography">
                                        <h6>¿Qué métodos de pago aceptan?</h6>

                                        <p>
                                            Aceptamos pagos con tarjeta de credito y debito,
                                            paypal.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="faq__section">
                        <div className="faq__section-title">
                            <h3>Pedidos y Devoluciones</h3>
                        </div>
                        <div className="faq__section-body">
                            <div className="row">
                                <div className="faq__section-column col-12 col-lg-6">
                                    <div className="typography">
                                        <h6>¿Cómo puedo hacer una devolución?</h6>

                                        <p>
                                            Si el pedido recibido no fue el deseado,
                                            puede contactarse con nosotros mediante
                                            nuestras redes sociales o nuestro
                                            número de teléfono oficial.
                                        </p>
                                    </div>
                                </div>
                                <div className="faq__section-column col-12 col-lg-6">
                                    <div className="typography">
                                        <h6>¿Mi pedido llegó dañado, qué puedo hacer?</h6>
                                        <p>
                                            Si el pedido recibido no fue el deseado,
                                            puede contactarse con nosotros mediante
                                            nuestras redes sociales o nuestro
                                            número de teléfono oficial, para solucionar
                                            el problema.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SitePageFaq;
