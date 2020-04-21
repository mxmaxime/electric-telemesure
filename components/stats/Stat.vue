<template>
  <div class="box__body stats__item">
    <p class="stats__title">{{ this.title }}</p>
    <div class="flex item-baseline justify-between">
      <p class="stats__number">{{this.number}} {{this.unity}}</p>
      <p class="stats__indiactor" v-if="this.evolution">+ {{this.evolution}}%</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {type: String, required: true},
    number: {type: Number, required: true},
    unity: {type: String, required: true},
    evolution: {type: Number, required: false}
  }
}
</script>
