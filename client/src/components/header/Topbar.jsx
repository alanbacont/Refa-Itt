// react
import React from 'react';

// third-party
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

// application
import Dropdown from './Dropdown';
import DropdownCurrency from './DropdownCurrency';
import DropdownLanguage from './DropdownLanguage';

function Topbar() {
    const links = [
        { title: <FormattedMessage id="topbar.aboutUs" defaultMessage="Sobre nosotros" />, url: '/site/about-us' },
        { title: <FormattedMessage id="topbar.contacts" defaultMessage="Contacto" />, url: '/site/contact-us' },
        { title: <FormattedMessage id="topbar.storeLocation" defaultMessage="Ubicación" />, url: '' },
        { title: <FormattedMessage id="topbar.trackOrder" defaultMessage="Rastrear Pedido" />, url: '/shop/track-order' },
        { title: <FormattedMessage id="topbar.blog" defaultMessage="Blog" />, url: '/blog/category-classic' },
    ];

    const accountLinks = [
        { title: 'Interfaz', url: '/account/dashboard' },
        { title: 'Editar Perfil', url: '/account/profile' },
        { title: 'Historial de Pedidos', url: '/account/orders' },
        { title: 'Direcciones', url: '/account/addresses' },
        { title: 'Contraseña', url: '/account/password' },
        { title: 'Cerrar Sesión', url: '/account/login' },
    ];

    const linksList = links.map((item, index) => (
        <div key={index} className="topbar__item topbar__item--link">
            <Link className="topbar-link" to={item.url}>{item.title}</Link>
        </div>
    ));

    return (
        <div className="site-header__topbar topbar">
            <div className="topbar__container container">
                <div className="topbar__row">
                    {linksList}
                    <div className="topbar__spring" />
                    <div className="topbar__item">
                        <Dropdown
                            title={<FormattedMessage id="topbar.myAccount" defaultMessage="Mi Cuenta" />}
                            items={accountLinks}
                        />
                    </div>
                    <div className="topbar__item">
                        <DropdownCurrency />
                    </div>
                    <div className="topbar__item">
                        <DropdownLanguage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
