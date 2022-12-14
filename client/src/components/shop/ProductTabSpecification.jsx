// react
import React from 'react';

// data stubs
import specification from '../../data/shopProductSpec';

function ProductTabSpecification() {
    const sections = specification.map((section, index) => {
        const features = section.features.map((feature, index) => (
            <div key={index} className="spec__row">
                <div className="spec__name">{feature.name}</div>
                <div className="spec__value">{feature.value}</div>
            </div>
        ));

        return (
            <div key={index} className="spec__section">
                <h4 className="spec__section-title">{section.name}</h4>
                {features}
            </div>
        );
    });

    return (
        <div className="spec">
            <h3 className="spec__header">Especificaciones</h3>
            {sections}
            <div className="spec__disclaimer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus varius.
                Vestibulum sit amet condimentum ex. Cras id ornare eros. Vestibulum eu est torto.
                volutpat diam. Nulla ac sodales metus, imperdiet volutpat risus. Nunc ante nulla.
                id, condimentum tincidunt quam.
            </div>
        </div>
    );
}

export default ProductTabSpecification;
