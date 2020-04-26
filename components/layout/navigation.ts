interface LinkInterface {
  title: string,
  link: string
}

export function topbarNavigation() {
  return {
    main: [
      {
        title: 'Accueil',
        link: '/',
      },
      {
        title: 'Consommation électrique',
        link: '/'
      },
      {
        title: 'Login',
        link: '/login'
      },
      {
        title: 'Register',
        link: '/register'
      },
      {
        title: 'Logout',
        link: '/logout'
      }
    ] as Array<LinkInterface>
  }
}
