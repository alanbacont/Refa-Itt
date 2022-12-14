// react
import React from 'react';

// third-party
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Logo from '../../svg/logo.png';

// application
import NavPanel from './NavPanel';
import Search from './Search';

function Header(props) {
    const { layout } = props;
    let bannerSection;

    if (layout === 'default') {
        bannerSection = (
            <div className="site-header__middle container">
                <div className="site-header__logo">
                    <Link to="/"><img src={Logo} alt='"logo"' width={100} height={90} /></Link>
                </div>
                <div className="site-header__search">
                    <Search context="header" />
                </div>
            </div>
        );
    }

    return (
        <div className="site-header">
            {bannerSection}
            <div className="site-header__nav-panel">
                <NavPanel layout={layout} />
            </div>
        </div>
    );
}

Header.propTypes = {
    /** one of ['default', 'compact'] (default: 'default') */
    layout: PropTypes.oneOf(['default', 'compact']),
};

Header.defaultProps = {
    layout: 'default',
};

export default Header;
