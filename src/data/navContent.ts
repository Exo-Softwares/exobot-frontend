export const headerMenu = [
  {
    name: 'Página inicial',
    href: '/',
    showWhenAuthenticated: false,
    showWhenNotAuthenticated: true,
  },
  {
    name: 'Minhas aplicações',
    href: '/applications',
    showWhenAuthenticated: true,
    showWhenNotAuthenticated: false,
  },
  {
    name: 'Entrar em contato',
    href: '/contact',
    showWhenAuthenticated: true,
    showWhenNotAuthenticated: true,
  },
  {
    name: 'Preços',
    href: '/pricing',
    showWhenAuthenticated: true,
    showWhenNotAuthenticated: true,
  },
]
