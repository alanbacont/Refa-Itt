// react
import React from 'react';

// third-party
import classNames from 'classnames';
import PropTypes from 'prop-types';

function SocialLinks(props) {
    const { shape, className } = props;

    const classes = classNames(className, 'social-links', {
        'social-links--shape--circle': shape === 'circle',
        'social-links--shape--rounded': shape === 'rounded',
    });

    const items = [
        { type: 'facebook', url: 'https://www.facebook.com/Refaccionaria-Ruiz-102289872574700', icon: 'fab fa-facebook-f' },
        { type: 'twitter', url: 'https://twitter.com/RefaccionariaRu?t=TFQwcB3gmVe4Imz4fyThuQ&s=08', icon: 'fab fa-twitter' },
        { type: 'youtube', url: 'https://www.youtube.com/channel/UCBdNESVriEp3G1oi4zgK7qg', icon: 'fab fa-youtube' },
        { type: 'instagram', url: 'https://instagram.com/refa.ruiz?igshid=YmMyMTA2M2Y=', icon: 'fab fa-instagram' },
    ].map((item) => (
        <li key={item.type} className="social-links__item">
            <a
                className={`social-links__link social-links__link--type--${item.type}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className={item.icon} />
            </a>
        </li>
    ));

    return (
        <div className={classes}>
            <ul className="social-links__list">
                {items}
            </ul>
        </div>
    );
}

SocialLinks.propTypes = {
    /**
     * rating value
     */
    shape: PropTypes.oneOf(['circle', 'rounded']),
    className: PropTypes.string,
};
SocialLinks.defaultProps = {
    shape: null,
};

export default SocialLinks;
