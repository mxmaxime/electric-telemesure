interface LinkInterface {
  title: string,
  link: string
}

interface TopbarNavigation {
  main: Array<LinkInterface>
};

export function topbarNavigation(isConnected: boolean): TopbarNavigation {
  const main = [
    {
      title: 'Accueil',
      link: '/',
    },
    {
      title: 'Consommation électrique',
      link: '/hoy'
    },
    {
      title: 'Monitoring',
      link: 'monitoring'
    }
  ] as Array<LinkInterface>

  if (isConnected) {
    main.push({
      title: 'Logout',
      link: '/logout'
    })
  } else {
    main.push({
      title: 'Login',
      link: '/login'
    },
    {
      title: 'Register',
      link: '/register'
    })
  }

  return {
    main
  };
}
