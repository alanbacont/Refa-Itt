/* eslint-disable */

export default { 
    id: 4121,
    date: 'Diciembre 3, 2022',
    status: 'Pendiente',
    items: [
        {
            id: 1,
            slug: 'Amortiguador-Gas',
            name: 'Amortiguador Gas',
            image: 'images/products/amortiguador-gas-1.jpg',
            options: [
                {
                    label: 'Color',
                    value: 'Negro',
                },
                {
                    label: 'Material',
                    value: 'Aluminio',
                },
            ],
            price: 1143.31,
            quantity: 3,
            total: 3429.93,
        },
    ],
    additionalLines: [
        {
            label: 'Descuento',
            total: -200,
        },
        {
            label: 'Envío',
            total: 250,
        },
    ],
    quantity: 3,
    subtotal: 3429.93,
    total: 3429.93,
    paymentMethod: 'PayPal',
    shippingAddress: {
        firstName: 'Carlos',
        lastName: 'Angulo',
        email: 'usuario@refa.com',
        phone: '311 184 6467',
        country: 'México',
        city: 'Tepic',
        postcode: '63200',
        address: 'Durango 123',
    },
    billingAddress: {
        firstName: 'Carlos',
        lastName: 'Angulo',
        email: 'usuario@refa.com',
        phone: '311 184 6467',
        country: 'México',
        city: 'Tepic',
        postcode: '63200',
        address: 'Durango 123',
    },
};
