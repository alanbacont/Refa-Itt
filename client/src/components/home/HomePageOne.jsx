// react
import React, { useMemo } from 'react';

// third-party
import { Helmet } from 'react-helmet-async';

// application
import shopApi from '../../api/shop';
import { useDeferredData, useProductColumns, useProductTabs } from '../../services/hooks';

// blocks
import BlockBanner from '../blocks/BlockBanner';
import BlockBrands from '../blocks/BlockBrands';
import BlockCategories from '../blocks/BlockCategories';
import BlockFeatures from '../blocks/BlockFeatures';
import BlockProductColumns from '../blocks/BlockProductColumns';
import BlockProducts from '../blocks/BlockProducts';
import BlockProductsCarousel from '../blocks/BlockProductsCarousel';
import BlockSlideShow from '../blocks/BlockSlideShow';

// data stubs
import categories from '../../data/shopBlockCategories';
import theme from '../../data/theme';

function HomePageOne() {
    /**
     * Productos Destacados
     */
    const featuredProducts = useProductTabs(
        useMemo(() => [
            { id: 1, name: 'Todos', categorySlug: undefined },
            { id: 2, name: 'Llantas', categorySlug: 'llantas' },
            { id: 3, name: 'Aceites', categorySlug: 'hand-tools' },
            { id: 4, name: 'Herramientas', categorySlug: 'plumbing' },
        ], []),
        (tab) => shopApi.getPopularProducts({ limit: 8, category: tab.categorySlug }),
    );

    /**
     * Más Vendidos
     */
    const bestsellers = useDeferredData(() => (
        shopApi.getPopularProducts({ limit: 7 })
    ), []);

    /**
     * Nuevos Productos
     */
    const latestProducts = useProductTabs(
        useMemo(() => [
            { id: 1, name: 'Todos', categorySlug: undefined },
            { id: 2, name: 'Llantas', categorySlug: 'power-tools' },
            { id: 3, name: 'Aceites', categorySlug: 'hand-tools' },
            { id: 4, name: 'Herramientas', categorySlug: 'plumbing' },
        ], []),
        (tab) => shopApi.getLatestProducts({ limit: 8, category: tab.categorySlug }),
    );

    /**
     * Columnas
     */
    const columns = useProductColumns(
        useMemo(() => [
            {
                title: 'Mejor Valorados',
                source: () => shopApi.getTopRatedProducts({ limit: 3 }),
            },
            {
                title: 'Ofertas Especiales',
                source: () => shopApi.getDiscountedProducts({ limit: 3 }),
            },
            {
                title: 'Más Vendidos',
                source: () => shopApi.getPopularProducts({ limit: 3 }),
            },
        ], []),
    );

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Inicio — ${theme.name}`}</title>
            </Helmet>

            {useMemo(() => <BlockSlideShow withDepartments />, [])}

            {useMemo(() => <BlockFeatures />, [])}

            {useMemo(() => (
                <BlockProductsCarousel
                    title="Productos Destacados"
                    layout="grid-4"
                    products={featuredProducts.data}
                    loading={featuredProducts.isLoading}
                    groups={featuredProducts.tabs}
                    onGroupClick={featuredProducts.handleTabChange}
                />
            ), [featuredProducts])}

            {useMemo(() => <BlockBanner />, [])}

            {useMemo(() => (
                <BlockProducts
                    title="Más Vendidos"
                    layout="large-first"
                    featuredProduct={bestsellers.data[0]}
                    products={bestsellers.data.slice(1, 7)}
                />
            ), [bestsellers.data])}

            {useMemo(() => (
                <BlockCategories
                    title="Categorías Populares"
                    layout="classic"
                    categories={categories}
                />
            ), [])}

            {useMemo(() => (
                <BlockProductsCarousel
                    title="Nuevos Productos"
                    layout="horizontal"
                    rows={2}
                    products={latestProducts.data}
                    loading={latestProducts.isLoading}
                    groups={latestProducts.tabs}
                    onGroupClick={latestProducts.handleTabChange}
                />
            ), [latestProducts])}

            {useMemo(() => <BlockBrands />, [])}

            {useMemo(() => <BlockProductColumns columns={columns} />, [columns])}
        </React.Fragment>
    );
}

export default HomePageOne;
