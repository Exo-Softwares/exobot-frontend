import { productsType } from '../types/princingType'
import theme from '@/styles/theme'

export const productsData: productsType[] = [
  {
    id: 0,
    name: 'Standard',
    mainColor: theme.colors.products.standard,
    price: 29.01,
    description: 'Perfeito se a sua comunidade está em ascensão.',
    benefits: [
      'Benefício Standard',
      'Benefício Standard',
      'Benefício Standard',
      'Benefício Standard',
      'Benefício Standard',
      'Benefício Standard',
      'Benefício Standard',
    ],
  },
  {
    id: 1,
    name: 'FiveM',
    mainColor: theme.colors.products.fivem,
    price: 49.9,
    description: 'Tudo que você precisa pro seu servidor de FiveM.',
    benefits: [
      'Sistema de whitelist',
      'Sistema de bate-ponto',
      'Sistema de liberação',
      'Sistema de CAPTCHA',
      "Sistema de log's",
      'Sistema de ticket',
    ],
    disclaimer: ['Todos os sistemas são opcionais'],
  },
  {
    id: 2,
    name: 'Advanced',
    mainColor: theme.colors.products.advanced,
    price: 0.01,
    description: 'O mais escolhido por comunidades de larga escala.',
    benefits: [
      'Benefício Advanced',
      'Benefício Advanced',
      'Benefício Advanced',
      'Benefício Advanced',
      'Benefício Advanced',
      'Benefício Advanced',
    ],
  },
]
