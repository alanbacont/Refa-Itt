// react
import React, { Component } from 'react';

// third-party
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// application
import AsyncAction from './AsyncAction';
import Currency from './Currency';
import InputNumber from './InputNumber';
import ProductGallery from './ProductGallery';
import Rating from './Rating';
import { cartAddItem } from '../../store/cart';
import { compareAddItem } from '../../store/compare';
import { Wishlist16Svg, Compare16Svg } from '../../svg';
import { wishlistAddItem } from '../../store/wishlist';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 1,
        };
    }

    handleChangeQuantity = (quantity) => {
        this.setState({ quantity });
    };

    render() {
        const {
            product,
            layout,
            wishlistAddItem,
            compareAddItem,
            cartAddItem,
        } = this.props;
        const { quantity } = this.state;
        let prices;

        if (product.compareAtPrice) {
            prices = (
                <React.Fragment>
                    <span className="product__new-price"><Currency value={product.price} /></span>
                    {' '}
                    <span className="product__old-price"><Currency value={product.compareAtPrice} /></span>
                </React.Fragment>
            );
        } else {
            prices = <Currency value={product.price} />;
        }

        return (
            <div className={`product product--layout--${layout}`}>
                <div className="product__content">
                    <ProductGallery layout={layout} images={product.images} />

                    <div className="product__info">
                        <div className="product__wishlist-compare">
                            <AsyncAction
                                action={() => wishlistAddItem(product)}
                                render={({ run, loading }) => (
                                    <button
                                        type="button"
                                        data-toggle="tooltip"
                                        data-placement="right"
                                        title="Lista de deseados"
                                        onClick={run}
                                        className={classNames('btn btn-sm btn-light btn-svg-icon', {
                                            'btn-loading': loading,
                                        })}
                                    >
                                        <Wishlist16Svg />
                                    </button>
                                )}
                            />
                            <AsyncAction
                                action={() => compareAddItem(product)}
                                render={({ run, loading }) => (
                                    <button
                                        type="button"
                                        data-toggle="tooltip"
                                        data-placement="right"
                                        title="Comparar"
                                        onClick={run}
                                        className={classNames('btn btn-sm btn-light btn-svg-icon', {
                                            'btn-loading': loading,
                                        })}
                                    >
                                        <Compare16Svg />
                                    </button>
                                )}
                            />
                        </div>
                        <h1 className="product__name">{product.name}</h1>
                        <div className="product__rating">
                            <div className="product__rating-stars">
                                <Rating value={product.rating} />
                            </div>
                            <div className="product__rating-legend">
                                <Link to="/">{`${product.reviews} Reseñas`}</Link>
                                <span>/</span>
                                <Link to="/">Escribir Reseña</Link>
                            </div>
                        </div>
                        <div className="product__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                            ornare, mi in ornare elementum, libero nibh lacinia urna, quis
                            convallis lorem erat at purus. Maecenas eu varius nisi.
                        </div>
                        <ul className="product__features">
                            <li>Speed: 750 RPM</li>
                            <li>Power Source: Cordless-Electric</li>
                            <li>Battery Cell Type: Lithium</li>
                            <li>Voltage: 20 Volts</li>
                            <li>Battery Capacity: 2 Ah</li>
                        </ul>
                        <ul className="product__meta">
                            <li className="product__meta-availability">
                                Disponibilidad:
                                {' '}
                                <span className="text-success">En Stock</span>
                            </li>
                            <li>
                                Marca:
                                <Link to="/"> Tec</Link>
                            </li>
                            <li>SKU: 83690/32</li>
                        </ul>
                    </div>

                    <div className="product__sidebar">
                        <div className="product__availability">
                            Disponibilidad:
                            {' '}
                            <span className="text-success">En Stock</span>
                        </div>

                        <div className="product__prices">
                            {prices}
                        </div>

                        <form className="product__options">
                            <div className="form-group product__option">
                                <div className="product__option-label">Color</div>
                                <div className="input-radio-color">
                                    <div className="input-radio-color__list">
                                        <label
                                            className="input-radio-color__item input-radio-color__item--white"
                                            style={{ color: '#fff' }}
                                            data-toggle="tooltip"
                                            title="White"
                                        >
                                            <input type="radio" name="color" />
                                            <span />
                                        </label>
                                        <label
                                            className="input-radio-color__item"
                                            style={{ color: '#ffd333' }}
                                            data-toggle="tooltip"
                                            title="Yellow"
                                        >
                                            <input type="radio" name="color" />
                                            <span />
                                        </label>
                                        <label
                                            className="input-radio-color__item"
                                            style={{ color: '#ff4040' }}
                                            data-toggle="tooltip"
                                            title="Red"
                                        >
                                            <input type="radio" name="color" />
                                            <span />
                                        </label>
                                        <label
                                            className="input-radio-color__item input-radio-color__item--disabled"
                                            style={{ color: '#4080ff' }}
                                            data-toggle="tooltip"
                                            title="Blue"
                                        >
                                            <input type="radio" name="color" disabled />
                                            <span />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group product__option">
                                <div className="product__option-label">Material</div>
                                <div className="input-radio-label">
                                    <div className="input-radio-label__list">
                                        <label>
                                            <input type="radio" name="material" />
                                            <span>Metal</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="material" />
                                            <span>Plástico</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="material" disabled />
                                            <span>Madera</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group product__option">
                                <label htmlFor="product-quantity" className="product__option-label">Cantidad</label>
                                <div className="product__actions">
                                    <div className="product__actions-item">
                                        <InputNumber
                                            id="product-quantity"
                                            aria-label="Quantity"
                                            className="product__quantity"
                                            size="lg"
                                            min={1}
                                            value={quantity}
                                            onChange={this.handleChangeQuantity}
                                        />
                                    </div>
                                    <div className="product__actions-item product__actions-item--addtocart">
                                        <AsyncAction
                                            action={() => cartAddItem(product, [], quantity)}
                                            render={({ run, loading }) => (
                                                <button
                                                    type="button"
                                                    onClick={run}
                                                    disabled={!quantity}
                                                    className={classNames('btn btn-primary btn-lg', {
                                                        'btn-loading': loading,
                                                    })}
                                                >
                                                    Añadir al Carrito
                                                </button>
                                            )}
                                        />
                                    </div>
                                    <div className="product__actions-item product__actions-item--wishlist">
                                        <AsyncAction
                                            action={() => wishlistAddItem(product)}
                                            render={({ run, loading }) => (
                                                <button
                                                    type="button"
                                                    data-toggle="tooltip"
                                                    title="Wishlist"
                                                    onClick={run}
                                                    className={classNames('btn btn-secondary btn-svg-icon btn-lg', {
                                                        'btn-loading': loading,
                                                    })}
                                                >
                                                    <Wishlist16Svg />
                                                </button>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="product__footer">
                        <div className="product__tags tags">
                            <div className="tags__list">
                                <Link to="/">Refacciones</Link>
                                <Link to="/">Herramientas</Link>
                                <Link to="/">Destacados</Link>
                            </div>
                        </div>

                        <div className="product__share-links share-links">
                            <ul className="share-links__list">
                                <li className="share-links__item share-links__item--type--like"><Link to="/">Like</Link></li>
                                <li className="share-links__item share-links__item--type--tweet"><Link to="/">Tweet</Link></li>
                                <li className="share-links__item share-links__item--type--pin"><Link to="/">Guardar</Link></li>
                                <li className="share-links__item share-links__item--type--counter"><Link to="/">4K</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    /** product object */
    product: PropTypes.object.isRequired,
    /** one of ['standard', 'sidebar', 'columnar', 'quickview'] (default: 'standard') */
    layout: PropTypes.oneOf(['standard', 'sidebar', 'columnar', 'quickview']),
};

Product.defaultProps = {
    layout: 'standard',
};

const mapDispatchToProps = {
    cartAddItem,
    wishlistAddItem,
    compareAddItem,
};

export default connect(
    () => ({}),
    mapDispatchToProps,
)(Product);
