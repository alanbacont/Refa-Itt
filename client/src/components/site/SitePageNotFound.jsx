// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// data stubs
import theme from '../../data/theme';

function SitePageNotFound() {
    return (
        <div className="block">
            <Helmet>
                <title>{`404 Page Not Found — ${theme.name}`}</title>
            </Helmet>

            <div className="container">
                <div className="not-found">
                    <div className="not-found__404">
                        Ups! Error 404
                    </div>

                    <div className="not-found__content">
                        <h1 className="not-found__title">Página No Encontrada</h1>

                        <p className="not-found__text">
                            No pudimos encontrar la página que buscabas
                            <br />
                            Intenta usar la búsqueda.
                        </p>

                        <form className="not-found__search">
                            <input type="text" className="not-found__search-input form-control" placeholder="Buscar..." />
                            <button type="submit" className="not-found__search-button btn btn-primary">Buscar</button>
                        </form>

                        <p className="not-found__text">
                            O ve al inicio y comienza de nuevo.
                        </p>

                        <Link to="/" className="btn btn-secondary btn-sm">Ir a la página de inicio</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SitePageNotFound;
