// react
import React from 'react';

// third-party
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// application
import AsyncAction from '../shared/AsyncAction';
import Currency from '../shared/Currency';
import PageHeader from '../shared/PageHeader';
import Rating from '../shared/Rating';
import { cartAddItem } from '../../store/cart';
import { Cross12Svg } from '../../svg';
import { url } from '../../services/utils';
import { wishlistRemoveItem } from '../../store/wishlist';

// data stubs
import theme from '../../data/theme';

function ShopPageWishlist(props) {
    const { wishlist, cartAddItem, wishlistRemoveItem } = props;
    const breadcrumb = [
        { title: 'Home', url: '' },
        { title: 'Wishlist', url: '' },
    ];

    let content;

    if (wishlist.length) {
        const itemsList = wishlist.map((item) => {
            let image;

            if (item.images.length > 0) {
                image = (
                    <div className="product-image">
                        <Link to={url.product(item)} className="product-image__body">
                            <img className="product-image__img" src={item.images[0]} alt="" />
                        </Link>
                    </div>
                );
            }

            const renderAddToCarButton = ({ run, loading }) => {
                const classes = classNames('btn btn-primary btn-sm', {
                    'btn-loading': loading,
                });

                return <button type="button" onClick={run} className={classes}>Añadir al Carrito</button>;
            };

            const renderRemoveButton = ({ run, loading }) => {
                const classes = classNames('btn btn-light btn-sm btn-svg-icon', {
                    'btn-loading': loading,
                });

                return <button type="button" onClick={run} className={classes} aria-label="Remove"><Cross12Svg /></button>;
            };

            return (
                <tr key={item.id} className="wishlist__row">
                    <td className="wishlist__column wishlist__column--image">
                        {image}
                    </td>
                    <td className="wishlist__column wishlist__column--product">
                        <Link to={url.product(item)} className="wishlist__product-name">{item.name}</Link>
                        <div className="wishlist__product-rating">
                            <Rating value={item.rating} />
                            <div className="wishlist__product-rating-legend">{`${item.reviews} Reseñas`}</div>
                        </div>
                    </td>
                    <td className="wishlist__column wishlist__column--stock">
                        <div className="badge badge-success">En Stock</div>
                    </td>
                    <td className="wishlist__column wishlist__column--price"><Currency value={item.price} /></td>
                    <td className="wishlist__column wishlist__column--tocart">
                        <AsyncAction
                            action={() => cartAddItem(item)}
                            render={renderAddToCarButton}
                        />
                    </td>
                    <td className="wishlist__column wishlist__column--remove">
                        <AsyncAction
                            action={() => wishlistRemoveItem(item.id)}
                            render={renderRemoveButton}
                        />
                    </td>
                </tr>
            );
        });

        content = (
            <div className="block">
                <div className="container">
                    <table className="wishlist">
                        <thead className="wishlist__head">
                            <tr className="wishlist__row">
                                <th className="wishlist__column wishlist__column--image">Imagen</th>
                                <th className="wishlist__column wishlist__column--product">Producto</th>
                                <th className="wishlist__column wishlist__column--stock">Disponibilidad</th>
                                <th className="wishlist__column wishlist__column--price">Precio</th>
                                <th className="wishlist__column wishlist__column--tocart" aria-label="Añadir al carrito" />
                                <th className="wishlist__column wishlist__column--remove" aria-label="Remover" />
                            </tr>
                        </thead>
                        <tbody className="wishlist__body">
                            {itemsList}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    } else {
        content = (
            <div className="block block-empty">
                <div className="container">
                    <div className="block-empty__body">
                        <div className="block-empty__message">Tu lista de deseados está vacía!</div>
                        <div className="block-empty__actions">
                            <Link to="/" className="btn btn-primary btn-sm">Continuar</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Lista de Deseados — ${theme.name}`}</title>
            </Helmet>

            <PageHeader header="Lista de Deseados" breadcrumb={breadcrumb} />

            {content}
        </React.Fragment>
    );
}

const mapStateToProps = (state) => ({
    wishlist: state.wishlist,
});

const mapDispatchToProps = {
    cartAddItem,
    wishlistRemoveItem,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShopPageWishlist);
