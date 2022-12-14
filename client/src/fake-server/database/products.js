import { makeIdGenerator } from '../utils';
import brandsData from './brands';
import { categoriesListData, prepareCategory } from './categories';

const getId = makeIdGenerator();

const attributesDef = [
    {
        name: 'Color',
        slug: 'color',
        values: [
            { name: 'Blanco', slug: 'blanco' },
            { name: 'Gris', slug: 'gris' },
            { name: 'Negro', slug: 'negro' },
            { name: 'Rojo', slug: 'red' },
            { name: 'Orange', slug: 'rojo' },
            { name: 'Amarillo', slug: 'amarillo' },
            { name: 'Verde', slug: 'Verderde' },
            { name: 'Azul', slug: 'azul' },
            { name: 'Morado', slug: 'morado' },
        ],
    },
];

const productsDef = [
    {
        slug: 'par-de-cuartos-laterales',
        name: 'Par de Cuartos Laterales',
        price: 170.30,
        images: [
            'images/products/cuartos-laterales-1.jpg',
        ],
        badges: 'nuevo',
        rating: 4,
        reviews: 12,
        availability: 'in-stock',
        brand: 'brandix',
        categories: ['interiores'],
        attributes: [
            { slug: 'color', values: 'negro' },
        ],
    },
    {
        slug: 'faro-para-niebla-con-base-lado-conductor',
        name: 'Faro Para Niebla Con Base Lado Conductor',
        price: 1130.84,
        images: [
            'images/products/faro-niebla-1.jpg',
        ],
        badges: 'popular',
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'zosch',
        categories: ['interiores'],
        attributes: [
            { slug: 'color', values: ['negro'] },
        ],
    },
    {
        slug: 'cuchillo-de-hoja-segementada',
        name: 'Cuchillo de Hoja Segmentada',
        price: 225.82,
        images: [
            'images/products/navaja-1.png',
        ],
        rating: 4,
        reviews: 8,
        availability: 'in-stock',
        brand: 'brandix',
        categories: ['interiores'],
        attributes: [
            { slug: 'color', values: 'negro' },
        ],
    },
    {
        slug: 'juego-de-herramientas-de-mano',
        name: 'Juego de Herramientas de Mano',
        price: 1231.77,
        compareAtPrice: 1539.71,
        images: [
            'images/products/caja-herramienta-1.png',
        ],
        badges: 'descuento',
        rating: 3,
        reviews: 15,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: 'negro' },
        ],
    },
    {
        slug: 'moto-bateria-lth-de-14-ampersh-(12n14-3a)',
        name: 'Moto-Bateria LTH de 14 Ampers/H (12N14-3A)',
        price: 860.00,
        images: [
            'images/products/bateria-1.png',
        ],
        rating: 4,
        reviews: 2,
        availability: 'in-stock',
        brand: 'wakita',
        categories: [],
        attributes: [
            { slug: 'color', values: 'negro' },
        ],
    },
    {
        slug: 'conector-de-cobre-con-rosca-exterior-de-3-4',
        name: 'Conector de cobre con rosca exterior de 3/4 AA-20419',
        price: 33.00,
        images: [
            'images/products/adaptador-1.png',
        ],
        rating: 3,
        reviews: 21,
        availability: 'in-stock',
        brand: 'wakita',
        categories: [],
        attributes: [
            { slug: 'color', values: 'negro' },
        ],
    },
    {
        slug: 'Balatas-Ceramicas-Delanteras',
        name: 'Balatas Ceramicas Delanteras',
        price: 804.82,
        images: [
            'images/products/balatas-1.jpg',
        ],
        rating: 4,
        reviews: 1,
        availability: 'in-stock',
        brand: 'wevalt',
        categories: [],
        attributes: [
            { slug: 'color', values: 'negro' },
        ],
    },
    {
        slug: 'llanta-205-55-R16',
        name: 'Llanta 205 /55 R16',
        price: 1594.07,
        images: [
            'images/products/llantas-1.png',
        ],
        rating: 4,
        reviews: 5,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: ['negro'] },
        ],
    },
    {
        slug: 'Balatas-Ceramicas-Delanteras',
        name: 'Balatas Ceramicas Delanteras',
        price: 893.78,
        images: [
            'images/products/balatas-2.jpg',
        ],
        rating: 4,
        reviews: 34,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: 'negro' },
        ],
    },
    {
        slug: 'Zapatas-Traseras',
        name: 'Zapatas Traseras',
        price: 744.83,
        images: [
            'images/products/zapata-1.jpg',
        ],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: 'negro' },
        ],
    },
    {
        slug: 'Amortiguador-Gas',
        name: 'Amortiguador Gas',
        price: 1143.31,
        images: [
            'images/products/amortiguador-gas-1.jpg',
        ],
        rating: 4,
        reviews: 7,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: 'negro' },
        ],
    },
    {
        slug: 'Par-De-Amortiguadores-Hidráulicos-Automatic-Traseros',
        name: 'Par De Amortiguadores Hidráulicos Automatic Traseros',
        price: 1102.19,
        images: [
            'images/products/amortiguadores-hidraulicos-1.jpg',
        ],
        rating: 5,
        reviews: 17,
        availability: 'in-stock',
        brand: 'mitasia',
        categories: [],
        attributes: [
            { slug: 'color', values: 'negro' },
        ],
    },
    {
        slug: 'Par-De-Perillas-De-Asientos',
        name: 'Par De Perillas De Asientos',
        price: 149.14,
        images: [
            'images/products/perilla-asiento-1.jpg',
        ],
        rating: 4,
        reviews: 8,
        availability: 'in-stock',
        brand: 'mitasia',
        categories: [],
        attributes: [
            { slug: 'color', values: 'negro' },
        ],
    },
    {
        slug: 'vp-high-performance-synthetic-blend-motor-oil',
        name: 'VP High Performance Synthetic Blend Motor Oil 20W-50 (SN) 01 Qt.',
        price: 452.00,
        images: [
            'images/products/aceite-2.png',
        ],
        rating: 3,
        reviews: 14,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: ['light-gray', 'emerald'] },
        ],
    },
    {
        slug: 'vp-high-performance-synthetic-blend-motor-oil',
        name: 'VP High Performance Synthetic Blend Motor Oil 20W-50 (SN) 01 Qt.',
        price: 290,
        images: [
            'images/products/aceite-2.png',
        ],
        rating: 2,
        reviews: 1,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: ['negro'] },
        ],
    },
];

const productsData = productsDef.map((productDef) => {
    let badges = [];

    if (productDef.badges) {
        badges = typeof productDef.badges === 'string' ? [productDef.badges] : productDef.badges;
    }

    const categories = categoriesListData
        .filter((category) => productDef.categories.includes(category.slug))
        .map((category) => prepareCategory(category));

    const attributes = (productDef.attributes || []).map((productAttributeDef) => {
        const attributeDef = attributesDef.find((x) => x.slug === productAttributeDef.slug);

        if (!attributeDef) {
            return null;
        }

        let valuesDef = [];

        if (typeof productAttributeDef.values === 'string') {
            valuesDef = [productAttributeDef.values];
        } else if (productAttributeDef.values) {
            valuesDef = productAttributeDef.values;
        }

        const values = valuesDef.map((valueSlug) => {
            const valueDef = attributeDef.values.find((x) => x.slug === valueSlug);

            if (!valueDef) {
                return null;
            }

            return {
                ...valueDef,
                customFields: {},
            };
        }).filter((x) => x !== null);

        if (!values.length) {
            return null;
        }

        return {
            name: attributeDef.name,
            slug: attributeDef.slug,
            featured: !!productAttributeDef.featured,
            values,
            customFields: {},
        };
    }).filter((x) => x !== null);

    return {
        id: getId(),
        name: productDef.name,
        sku: '83690/32',
        slug: productDef.slug,
        price: productDef.price,
        compareAtPrice: productDef.compareAtPrice || null,
        images: productDef.images.slice(),
        badges: badges.slice(),
        rating: productDef.rating,
        reviews: productDef.reviews,
        availability: productDef.availability,
        brand: brandsData.find((x) => x.slug === productDef.brand) || null,
        categories,
        attributes,
        customFields: {},
    };
});

export default productsData;
