import { v4 as uuid } from 'uuid';

export const products = [
  {
    id: uuid(),
    createdAt: '27/08/2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo congue nunc eu cursus. Vestibulum felis eros, sollicitudin non orci eu, semper ultricies massa.',
    media: '/static/images/products/cuartos-laterales-1.jpg',
    title: 'Par de Cuartos Laterales',
    totalDownloads: '594'
  },
  {
    id: uuid(),
    createdAt: '31/03/2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo congue nunc eu cursus. Vestibulum felis eros, sollicitudin non orci eu, semper ultricies massa.',
    media: '/static/images/products/caja-herramienta-1.png',
    title: 'Juego de Herramientas de Mano',
    totalDownloads: '625'
  },
  {
    id: uuid(),
    createdAt: '03/04/2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo congue nunc eu cursus. Vestibulum felis eros, sollicitudin non orci eu, semper ultricies massa.',
    media: '/static/images/products/bateria-1.png',
    title: 'Moto-Bateria LTH de 14 Ampers/H (12N14-3A)',
    totalDownloads: '857'
  },
  {
    id: uuid(),
    createdAt: '04/04/2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo congue nunc eu cursus. Vestibulum felis eros, sollicitudin non orci eu, semper ultricies massa.',
    media: '/static/images/products/llantas-1.png',
    title: 'Llanta 205 /55 R16',
    totalDownloads: '406'
  },
  {
    id: uuid(),
    createdAt: '04/04/2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo congue nunc eu cursus. Vestibulum felis eros, sollicitudin non orci eu, semper ultricies massa.',
    media: '/static/images/products/balatas-2.jpg',
    title: 'Balatas Ceramicas Delanteras',
    totalDownloads: '835'
  },
  {
    id: uuid(),
    createdAt: '04/04/2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo congue nunc eu cursus. Vestibulum felis eros, sollicitudin non orci eu, semper ultricies massa.',
    media: '/static/images/products/zapata-1.jpg',
    title: 'Zapatas Traseras',
    totalDownloads: '835'
  }
];
