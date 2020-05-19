<template>
  <button
    class="btn"
    type="submit"
    >
    <slot></slot>
    <transition name="loader">
      <div class="loader-wrapper" v-show="show">
        <div class="loader"></div>
      </div>
    </transition>
  </button>
</template>

<style lang="scss" scoped src="./submit.scss"></style>

<script>
export default {
  data: () => ({
    show: false
  }),
  $timout: null,
  computed: {
    loading() {
      return this.$parent.sending
    }
  },
  watch: {
    loading(val) {
      /**
       * If the server take more than 100ms to respond I show a loader !
       * Remember: 100ms is the "correct responsive time". More it's like a bug for the user !
       */
      if (val === true) {
        this.$timout = window.setTimeout(() => {
          this.show = true
        }, 100)
      } else {
        this.show = false
        window.clearTimeout(this.$timout)
      }
    }
  }
}
</script>
