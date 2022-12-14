// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// application
import StroykaSlick from '../shared/StroykaSlick';

// data stubs
import theme from '../../data/theme';

const slickSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 379,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

function SitePageAboutUs() {
    return (
        <div className="block about-us">
            <Helmet>
                <title>{`Acerca de Nosotros — ${theme.name}`}</title>
            </Helmet>

            <div className="about-us__image" style={{ backgroundImage: 'url("images/sobre-nosotros.png")' }} />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-10">
                        <div className="about-us__body">
                            <h1 className="about-us__title">Acerca de Nosotros</h1>
                            <div className="about-us__text typography">
                                <p>
                                    Somos estudiantes del Instituto Tecnológico de Tepic,
                                    de la carrera de Ingeniería de Sistemas Computacionales
                                    del 9° semestre.
                                </p>
                                <p>
                                    Somos un grupo de jovenes interesados en la programación
                                    web, realizando actividades y proyectos para lograr
                                    satisfacer a los clientes.
                                </p>
                            </div>
                            <div className="about-us__team">
                                <h2 className="about-us__team-title">Conoce nuestro Equipo</h2>
                                <div className="about-us__team-subtitle text-muted">
                                    ¿Quieres trabajar con nosotros?
                                    <br />
                                    <Link to="/sitio/contacto">Contáctanos</Link>
                                    {' '}
                                    y consideraremos tu solicitud.
                                </div>
                                <div className="about-us__teammates teammates">
                                    <StroykaSlick {...slickSettings}>
                                        <div className="teammates__item teammate">
                                            <div className="teammate__avatar">
                                                <img src="images/teammates/carlos.jpeg" alt="" />
                                            </div>
                                            <div className="teammate__name">Carlos Angulo</div>
                                            <div className="teammate__position text-muted">Diseñador BackEnd y FrontEnd</div>
                                        </div>
                                        <div className="teammates__item teammate">
                                            <div className="teammate__avatar">
                                                <img src="images/teammates/barocio.jpeg" alt="" />
                                            </div>
                                            <div className="teammate__name">Alan Barocio</div>
                                            <div className="teammate__position text-muted">Diseñador BackEnd y FrontEnd</div>
                                        </div>
                                        <div className="teammates__item teammate">
                                            <div className="teammate__avatar">
                                                <img src="images/teammates/eduardo.jpg" alt="" />
                                            </div>
                                            <div className="teammate__name">Eduardo Herrea</div>
                                            <div className="teammate__position text-muted"> Chat-Bot</div>
                                        </div>
                                        <div className="teammates__item teammate">
                                            <div className="teammate__avatar">
                                                <img src="images/teammates/antonio.jpeg" alt="" />
                                            </div>
                                            <div className="teammate__name">Antonio Zepeda</div>
                                            <div className="teammate__position text-muted"> Supervisor Contenido Base de Datos</div>
                                        </div>
                                    </StroykaSlick>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SitePageAboutUs;
