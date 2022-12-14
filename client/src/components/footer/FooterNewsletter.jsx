// react
import React from 'react';

// application
import SocialLinks from '../shared/SocialLinks';

export default function FooterNewsletter() {
    return (
        <div className="site-footer__widget footer-newsletter">
            <h5 className="footer-newsletter__title">Redes Sociales</h5>

            <div className="footer-newsletter__text footer-newsletter__text--social">
                Síguenos en nuestras redes sociales
            </div>

            <SocialLinks className="footer-newsletter__social-links" shape="circle" />
        </div>
    );
}
