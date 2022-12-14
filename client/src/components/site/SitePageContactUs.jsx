// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet-async';

// application
import PageHeader from '../shared/PageHeader';

// blocks
import BlockMap from '../blocks/BlockMap';

// data stubs
import theme from '../../data/theme';

function SitePageContactUs() {
    const breadcrumb = [
        { title: 'Inicio', url: '' },
        { title: 'Contacto', url: '' },
    ];

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Contacto — ${theme.name}`}</title>
            </Helmet>

            <BlockMap />

            <PageHeader header="Contacto" breadcrumb={breadcrumb} />

            <div className="block">
                <div className="container">
                    <div className="card mb-0">
                        <div className="card-body contact-us">
                            <div className="contact-us__container">
                                <div className="row">
                                    <div className="col-12 col-lg-6 pb-4 pb-lg-0">
                                        <h4 className="contact-us__header card-title">Nuestra Dirección</h4>

                                        <div className="contact-us__address">
                                            <p>
                                                Av. Tecnológico 2595, Lagos del Country
                                                <br />
                                                Email: refaccionariaruiz5@gmail.com
                                                <br />
                                                Número de Teléfono: +52 (311) 142-9147
                                            </p>

                                            <p>
                                                <strong>Horarios de Servicio</strong>
                                                <br />
                                                Lunes a Viernes: 8am-8pm
                                                <br />
                                                Sábado: 8am-6pm
                                                <br />
                                                Domingo: 10am-4pm
                                            </p>

                                            <p>

                                                <strong>Información</strong>
                                                <br />
                                                Tienda refaccionaria E - Commerce dirigida
                                                a cualquier tipo de clientes.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <h4 className="contact-us__header card-title">Déjanos un mensaje</h4>

                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-name">Nombre</label>
                                                    <input type="text" id="form-name" className="form-control" placeholder="Tu Nombre" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-email">Email</label>
                                                    <input
                                                        type="email"
                                                        id="form-email"
                                                        className="form-control"
                                                        placeholder="Dirección Email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="form-subject">Asunto</label>
                                                <input type="text" id="form-subject" className="form-control" placeholder="Asunto" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="form-message">Mensaje</label>
                                                <textarea id="form-message" className="form-control" rows="4" />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Enviar</button>
                                        </form>

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

export default SitePageContactUs;
