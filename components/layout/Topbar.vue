<template>
  <div class="topbar">
    <!-- <nuxt-link to="/" class="topbar__logo"></nuxt-link> -->

    <nav
      class="topbar__nav l-container"
      role="navigation"
      aria-label="Menu principal">

      <ul class="topbar__nav__menu">
          <li>
            <nuxt-link to="/">Accueil</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/tutorials">Consommation électrique</nuxt-link>
          </li>
      </ul>

    </nav>
  </div>

</template>

<script>
export default {
  data: () => ({
    connected: false
  })
}
</script>

<style lang="scss">
@import "~/assets/css/helpers/_space.scss";
@import "~/assets/css/helpers/_colors.scss";

.topbar {
  background-color: color('mx-purple', 'black-darker');
  color: color('mx-purple', 'grey')
}

.topbar__nav {
  display: flex;
}

.topbar__nav__menu {
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-gap: space(4);
}

.topbar__nav__menu a {
  display: block;
  padding: space(3) 0;
}

</style>
