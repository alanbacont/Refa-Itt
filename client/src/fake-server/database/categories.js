import { makeIdGenerator } from '../utils';

const getId = makeIdGenerator();

const categoriesDef = [
    {
        name: 'Refacciones',
        slug: 'refacciones',
        items: 272,
        children: [
            {
                name: 'Herramientas',
                slug: 'herramientas',
                image: 'images/products/refacciones-1.jpg',
                items: 370,
                children: [
                    {
                        name: 'Abrazaderas y herramientas de medición',
                        slug: 'abrazaderas-y-medicion',
                        items: 57,
                    },
                    {
                        name: 'Adaptadores y conectores de manguera/línea',
                        slug: 'adaptadores-conectores',
                        items: 15,
                    },
                    {
                        name: 'Guantes',
                        slug: 'guantes',
                        items: 126,
                    },
                    {
                        name: 'Equipo de Limpieza',
                        slug: 'equipo-limpieza',
                        items: 12,
                    },
                    {
                        name: 'Empaques y sujetadores',
                        slug: 'empaques-sujetadores',
                        items: 25,
                    },
                    {
                        name: 'Martillos',
                        slug: 'milling-cutters',
                        items: 78,
                    },
                    {
                        name: 'Matracas, adaptadores y llaves',
                        slug: 'matracas-adaptadores-llaves',
                        items: 3,
                    },
                ],
            },
            {
                name: 'Llantas',
                slug: 'llantas',
                image: 'assets/images/categories/category-2.jpg',
                items: 134,
                children: [
                    {
                        name: 'Rin 16"',
                        slug: 'rin-16',
                        items: 57,
                    },
                    {
                        name: 'Rin 17"',
                        slug: 'rin-17',
                        items: 15,
                    },
                    {
                        name: 'Rin 18"',
                        slug: 'rin-18',
                        items: 5,
                    },
                ],
            },
            {
                name: 'Baterías, arranque y carga',
                slug: 'baterias-y-mas',
                image: 'assets/images/categories/category-3.jpg',
                items: 302,
                children: [
                    {
                        name: 'Batería',
                        slug: 'bateria',
                        items: 104,
                    },
                    {
                        name: 'Alternadores',
                        slug: 'alternador',
                        items: 12,
                    },
                    {
                        name: 'Cables de Batería y Accesorios',
                        slug: 'cables-accesorios',
                        items: 67,
                    },
                    {
                        name: 'Marcha y Sistema de Arranque',
                        slug: 'marcha-arranque',
                        items: 5,
                    },
                    {
                        name: 'Interruptores, reveladores y sensores',
                        slug: 'interruptores-sensores',
                        items: 88,
                    },
                ],
            },
            {
                name: 'Carroceria',
                slug: 'carroceria',
                image: 'assets/images/categories/category-4.jpg',
                items: 79,
            },
            {
                name: 'Partes Externas de Motor',
                slug: 'externas-motor',
                image: 'assets/images/categories/category-5.jpg',
                items: 366,
                children: [
                    {
                        name: 'Alternador',
                        slug: 'alternador',
                        items: 57,
                    },
                    {
                        name: 'Encendido',
                        slug: 'encendido',
                        items: 5,
                    },
                    {
                        name: 'Enfriemiento del motor',
                        slug: 'enfriamiento-motor',
                        items: 3,
                    },
                    {
                        name: 'Sello para el motor',
                        slug: 'sello-motor',
                        items: 37,
                    },
                ],
            },
            {
                name: 'Frenos y control de tracción',
                slug: 'frenos-traccion',
                image: 'assets/images/categories/category-6.jpg',
                items: 82,
                children: [
                    {
                        name: 'Sistema ABS',
                        slug: 'sistema-abs',
                        items: 24,
                    },
                    {
                        name: 'Sistema de frenos de disco',
                        slug: 'frenos-disco',
                        items: 87,
                    },
                    {
                        name: 'Líneas y mangueras de frenos',
                        slug: 'mangueras-lineas',
                        items: 9,
                    },
                ],
            },
        ],
    },
    {
        name: 'Interiores',
        slug: 'interiores',
        items: 54,
    },
    {
        name: 'Exteriores',
        slug: 'computers',
        items: 421,
    },
    {
        name: 'Remolque',
        slug: 'automotive',
        items: 182,
    },
    {
        name: 'Químicos, Aceites y Prods. de lavado',
        slug: 'furniture-appliances',
        items: 15,
    },
    {
        name: 'Alto Desempeño',
        slug: 'music-books',
        items: 89,
    },
];

function walkTree(defs, parent = null) {
    let list = [];
    const tree = defs.map((def) => {
        const category = {
            id: getId(),
            name: def.name,
            slug: def.slug,
            image: def.image || null,
            items: def.items || 0,
            customFields: {},
            parent,
            children: [],
        };

        const [childrenTree, childrenList] = walkTree(def.children || [], category);

        category.children = childrenTree;
        list = [...list, category, ...childrenList];

        return category;
    });

    return [tree, list];
}

export function prepareCategory(category, depth) {
    let children;

    if (depth && depth > 0) {
        children = category.children.map((x) => prepareCategory(x, depth - 1));
    }

    return JSON.parse(JSON.stringify({
        ...category,
        parent: category.parent ? prepareCategory(category.parent) : null,
        children,
    }));
}

export const [categoriesTreeData, categoriesListData] = walkTree(categoriesDef);
