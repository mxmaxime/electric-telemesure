<template>
  <div class="l-stack-large">
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
