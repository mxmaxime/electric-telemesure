<template>
  <div class="l-stack-large">
    <header class="header l-ptb3 box">
      <div class="l-container flex">
        <h1 class="h3">Accueil</h1>
      </div>
    </header>

    <div class="l-stack-separated">
      <stats />

      <main class="l-container">
        <graph />
      </main>
    </div>
  </div>
</template>

<script>
import Stats from '~/components/stats/Stats'
import Graph from '~/components/stats/Graph'

export default {
  components: {
    Stats, Graph
  }
}
</script>
