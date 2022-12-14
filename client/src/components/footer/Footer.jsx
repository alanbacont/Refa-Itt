// react
import React from 'react';

// application
import FooterContacts from './FooterContacts';
import FooterLinks from './FooterLinks';
import FooterNewsletter from './FooterNewsletter';
import ToTop from './ToTop';

// data stubs
import theme from '../../data/theme';

export default function Footer() {
    const informationLinks = [
        { title: 'Acerca de nosotros', url: '/sitio/acerca-de' },
        { title: 'Información de envíos', url: '/sitio/faq' },
        { title: 'Política de Privacidad', url: '/sitio/terminos' },
        { title: 'Marcas', url: '' },
        { title: 'Contáctanos', url: '/sitio/contacto' },
        { title: 'Devoluciones', url: '/sitio/faq' },
    ];

    const accountLinks = [
        { title: 'Ubicación de la Tienda', url: '/sitio/contacto' },
        { title: 'Historial de Pedidos', url: '/cuenta/pedidos' },
        { title: 'Lista de deseados', url: '/tienda/wishlist' },
        { title: 'Ofertas Especiales', url: '' },
        { title: 'Tarjetas de regalo', url: '' },
        { title: 'Afiliados', url: '' },
    ];

    return (
        <div className="site-footer">
            <div className="container">
                <div className="site-footer__widgets">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <FooterContacts />
                        </div>
                        <div className="col-6 col-md-3 col-lg-2">
                            <FooterLinks title="Información" items={informationLinks} />
                        </div>
                        <div className="col-6 col-md-3 col-lg-2">
                            <FooterLinks title="Mi cuenta" items={accountLinks} />
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <FooterNewsletter />
                        </div>
                    </div>
                </div>

                <div className="site-footer__bottom">
                    <div className="site-footer__copyright">
                        Realizado con
                        {' '}
                        <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React</a>
                        {' '}
                        — Diseñado por
                        {' '}
                        <a href={theme.author.profile_url} target="_blank" rel="noopener noreferrer">
                            {theme.author.name}
                        </a>
                    </div>
                    <div className="site-footer__payments">
                        <img src="images/payments.png" alt="" />
                    </div>
                </div>
            </div>
            <ToTop />
        </div>
    );
}
