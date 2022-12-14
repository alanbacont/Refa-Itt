// react
import React from 'react';

// application
import Pagination from '../shared/Pagination';
import Rating from '../shared/Rating';

// data stubs
import reviews from '../../data/shopProductReviews';

function ProductTabReviews() {
    const reviewsList = reviews.map((review, index) => (
        <li key={index} className="reviews-list__item">
            <div className="review">
                <div className="review__avatar"><img src={review.avatar} alt="" /></div>
                <div className=" review__content">
                    <div className=" review__author">{review.author}</div>
                    <div className=" review__rating">
                        <Rating value={review.rating} />
                    </div>
                    <div className=" review__text">{review.text}</div>
                    <div className=" review__date">{review.date}</div>
                </div>
            </div>
        </li>
    ));

    return (
        <div className="reviews-view">
            <div className="reviews-view__list">
                <h3 className="reviews-view__header">Reseñas de clientes</h3>

                <div className="reviews-list">
                    <ol className="reviews-list__content">
                        {reviewsList}
                    </ol>
                    <div className="reviews-list__pagination">
                        <Pagination current={1} siblings={2} total={10} />
                    </div>
                </div>
            </div>

            <form className="reviews-view__form">
                <h3 className="reviews-view__header">Escribe una reseña</h3>
                <div className="row">
                    <div className="col-12 col-lg-9 col-xl-8">
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="review-stars">Calificación</label>
                                <select id="review-stars" className="form-control">
                                    <option>5 Estrellas</option>
                                    <option>4 Estrellas</option>
                                    <option>3 Estrellas</option>
                                    <option>2 Estrellas</option>
                                    <option>1 Estrellas</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="review-author">Tu Nombre</label>
                                <input type="text" className="form-control" id="review-author" placeholder="Nombre" />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="review-email">Email</label>
                                <input type="text" className="form-control" id="review-email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="review-text">Tu Reseña</label>
                            <textarea className="form-control" id="review-text" rows="6" />
                        </div>
                        <div className="form-group mb-0">
                            <button type="submit" className="btn btn-primary btn-lg">Publicar Reseña</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ProductTabReviews;
