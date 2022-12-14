export default [
    {
        title: 'Inicio',
        url: '/',
    },
    {
        title: 'Menú de productos',
        url: '',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'nl',
                columns: [
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Refacciones',
                                url: '',
                                links: [
                                    { title: 'Llantas', url: '/' },
                                    { title: 'Frenos y control de tracción', url: '/' },
                                    { title: 'Baterías, arranque y carga', url: '/' },
                                    { title: 'Carroceria', url: '/' },
                                ],
                            },
                            {
                                title: 'Herramientas',
                                url: '',
                                links: [
                                    { title: 'Herramientas de medición', url: '' },
                                    { title: 'Llaves, pinzas y cortadores', url: '' },
                                    { title: 'Herramientas electricas y de poder', url: '' },
                                    { title: 'Herramientas neumaticas y accesorios', url: '' },
                                    { title: 'Herramientas para taller y cochera', url: '' },
                                    { title: 'Manuales y software de reparación', url: '' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Químicos, Aceites y Productos de Lavado',
                                url: '',
                                links: [
                                    { title: 'Aceite para motor', url: '' },
                                    { title: 'Líquidos para frenos y dirección', url: '' },
                                    { title: 'Grasas y aceite para engranes', url: '' },
                                    { title: 'Limpiadores y desengrasantes diversos', url: '' },
                                ],
                            },
                            {
                                title: 'Exteriores',
                                url: '',
                                links: [
                                    { title: 'Iluminación exterior', url: '' },
                                    { title: 'Cables y mástiles para antena', url: '' },
                                    { title: 'Manijas y partes para puertas', url: '' },
                                    { title: 'Placa y accesorios', url: '' },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
    },
    {
        title: 'Tienda',
        url: '/',
        submenu: {
            type: 'menu',
            menu: [
                { title: 'Carrito', url: '/tienda/carrito' },
                { title: 'Checkout', url: '/tienda/checkout' },
                { title: 'Orden Exitosa', url: '/tienda/checkout/exitoso' },
                { title: 'Wishlist', url: '/tienda/wishlist' },
                { title: 'Comparar', url: '/tienda/comparar' },
                { title: 'Rastrear', url: '/tienda/rastrear-orden' },
            ],
        },
    },
    {
        title: 'Cuenta',
        url: '/cuenta',
        submenu: {
            type: 'menu',
            menu: [
                { title: 'Iniciar sesión', url: '/cuenta/login' },
                { title: 'Cuenta', url: '/cuenta/resumen' },
                { title: 'Editar perfil', url: '/cuenta/perfil' },
                { title: 'Historial de compra', url: '/cuenta/pedidos' },
                { title: 'Detalles de orden', url: '/cuenta/pedidos/5' },
                { title: 'Direcciones', url: '/cuenta/direcciones' },
                { title: 'Editar correo', url: '/cuenta/direcciones/1' },
                { title: 'Cambiar contraseña', url: '/cuenta/contraseña' },
            ],
        },
    },
    {
        title: 'Otros',
        url: '/',
        submenu: {
            type: 'menu',
            menu: [
                { title: 'Acerca de nosotros', url: '/sitio/acerca-de' },
                { title: 'Contáctanos', url: '/sitio/contacto' },
                { title: 'Términos y condiciones', url: '/sitio/terminos' },
                { title: 'Preguntas Frecuentes', url: '/sitio/faq' },
            ],
        },
    },
];
