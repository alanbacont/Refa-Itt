// react
import React from 'react';

// third-party
import classNames from 'classnames';
import {
    Link,
    matchPath,
    Redirect,
    Switch,
    Route,
} from 'react-router-dom';

// application
import PageHeader from '../shared/PageHeader';

// pages
import AccountPageAddresses from './AccountPageAddresses';
import AccountPageDashboard from './AccountPageDashboard';
import AccountPageEditAddress from './AccountPageEditAddress';
import AccountPageOrderDetails from './AccountPageOrderDetails';
import AccountPageOrders from './AccountPageOrders';
import AccountPagePassword from './AccountPagePassword';
import AccountPageProfile from './AccountPageProfile';

export default function AccountLayout(props) {
    const { match, location } = props;

    const breadcrumb = [
        { title: 'Inicio', url: '/' },
        { title: 'Mi cuenta', url: 'cuenta' },
    ];

    const links = [
        { title: 'Resumen', url: 'resumen' },
        { title: 'Editar Perfil', url: 'perfil' },
        { title: 'Historial de Pedidos', url: 'pedidos' },
        { title: 'Detalles de Orden', url: 'pedidos/5' },
        { title: 'Direcciones', url: 'direcciones' },
        { title: 'Editar Direcciones', url: 'direcciones/5' },
        { title: 'Contraseña', url: 'contraseña' },
        { title: 'Cerrar sesión', url: 'login' },
    ].map((link) => {
        const url = `${match.url}/${link.url}`;
        const isActive = matchPath(location.pathname, { path: url, exact: true });
        const classes = classNames('account-nav__item', {
            'account-nav__item--active': isActive,
        });

        return (
            <li key={link.url} className={classes}>
                <Link to={url}>{link.title}</Link>
            </li>
        );
    });

    return (
        <React.Fragment>
            <PageHeader header="Mi Cuenta" breadcrumb={breadcrumb} />

            <div className="block">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-3 d-flex">
                            <div className="account-nav flex-grow-1">
                                <h4 className="account-nav__title">Navegación</h4>
                                <ul>{links}</ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-9 mt-4 mt-lg-0">
                            <Switch>
                                <Redirect exact from={match.path} to={`${match.path}/resumen`} />
                                <Route exact path={`${match.path}/resumen`} component={AccountPageDashboard} />
                                <Route exact path={`${match.path}/perfil`} component={AccountPageProfile} />
                                <Route exact path={`${match.path}/pedidos`} component={AccountPageOrders} />
                                <Route exact path={`${match.path}/pedidos/:orderId`} component={AccountPageOrderDetails} />
                                <Route exact path={`${match.path}/direcciones`} component={AccountPageAddresses} />
                                <Route exact path={`${match.path}/direcciones/:addressId`} component={AccountPageEditAddress} />
                                <Route exact path={`${match.path}/contraseña`} component={AccountPagePassword} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
