export const url = {
    home: () => '/',

    catalog: () => '/tienda/catalogo',

    category: (category) => `/tienda/catalogo/${category.slug}`,

    product: (product) => `/tienda/productos/${product.slug}`,
};

export function getCategoryParents(category) {
    return category.parent ? [...getCategoryParents(category.parent), category.parent] : [];
}
