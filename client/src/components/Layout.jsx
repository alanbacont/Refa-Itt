// react
import React from 'react';

// third-party
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// application
import Footer from './footer';
import Header from './header';
import Quickview from './shared/Quickview';

// pages
import AccountLayout from './account/AccountLayout';
import AccountPageLogin from './account/AccountPageLogin';
import PageCart from './shop/ShopPageCart';
import PageCheckout from './shop/ShopPageCheckout';
import PageCompare from './shop/ShopPageCompare';
import PageWishlist from './shop/ShopPageWishlist';
import ShopPageOrderSuccess from './shop/ShopPageOrderSuccess';
import ShopPageProduct from './shop/ShopPageProduct';
import ShopPageTrackOrder from './shop/ShopPageTrackOrder';
import SitePageAboutUs from './site/SitePageAboutUs';
import SitePageContactUs from './site/SitePageContactUs';
import SitePageFaq from './site/SitePageFaq';
import SitePageNotFound from './site/SitePageNotFound';
import SitePageTerms from './site/SitePageTerms';

// data stubs
import theme from '../data/theme';

function Layout(props) {
    const { match, headerLayout, homeComponent } = props;

    return (
        <React.Fragment>
            <Helmet>
                <title>{theme.name}</title>
                <meta name="description" content={theme.fullName} />
            </Helmet>

            <ToastContainer autoClose={5000} hideProgressBar />

            <Quickview />

            <div className="site">
                <header className="site__header d-lg-block d-none">
                    <Header layout={headerLayout} />
                </header>

                <div className="site__body">
                    <Switch>
                        {/*
                        // Home
                        */}
                        <Route exact path={`${match.path}`} component={homeComponent} />

                        <Route
                            exact
                            path="/tienda/productos/:productSlug"
                            render={(props) => (
                                <ShopPageProduct
                                    {...props}
                                    layout="standard"
                                    productSlug={props.match.params.productSlug}
                                />
                            )}
                        />

                        <Route exact path="/tienda/carrito" component={PageCart} />
                        <Route exact path="/tienda/checkout" component={PageCheckout} />
                        <Route exact path="/tienda/checkout/exitoso" component={ShopPageOrderSuccess} />
                        <Route exact path="/tienda/wishlist" component={PageWishlist} />
                        <Route exact path="/tienda/comparar" component={PageCompare} />
                        <Route exact path="/tienda/rastrear-orden" component={ShopPageTrackOrder} />
                        {/*
                        // Account
                        */}
                        <Route exact path="/cuenta/login" component={AccountPageLogin} />
                        <Route path="/cuenta" component={AccountLayout} />

                        {/*
                        // Site
                        */}
                        <Redirect exact from="/sitio" to="/sitio/acerca-de" />
                        <Route exact path="/sitio/acerca-de" component={SitePageAboutUs} />
                        <Route exact path="/sitio/contacto" component={SitePageContactUs} />
                        <Route exact path="/sitio/no-encontrado" component={SitePageNotFound} />
                        <Route exact path="/sitio/faq" component={SitePageFaq} />
                        <Route exact path="/sitio/terminos" component={SitePageTerms} />

                        {/*
                        // Page Not Found
                        */}
                        <Route component={SitePageNotFound} />
                    </Switch>
                </div>

                <footer className="site__footer">
                    <Footer />
                </footer>
            </div>
        </React.Fragment>
    );
}

Layout.propTypes = {
    /**
     * header layout (default: 'classic')
     * one of ['classic', 'compact']
     */
    headerLayout: PropTypes.oneOf(['default', 'compact']),
    /**
     * home component
     */
    homeComponent: PropTypes.elementType.isRequired,
};

Layout.defaultProps = {
    headerLayout: 'default',
};

export default Layout;
