<template>
  <button
    class="l-btn"
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

<style lang="scss" scoped>
.loader,
.loader:before,
.loader:after {
  background: #fff;
  animation: load1 1s infinite ease-in-out;
  height: 22px;
  width: 0.2em;
  transform: scaleY(0.5);
}

.loader-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #855cc7;
  padding: 12px 24px;
}

.loader {
  position: relative;
  color: #fff;
  text-indent: -9999em;
  margin: auto;
  position: relative;
  transform: translateZ(0);
  animation-delay: -0.16s;
}

.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: '';
}

.loader:before {
  left: -8px;
  animation-delay: -0.32s;
}

.loader:after {
  left: 8px;
}

@keyframes load1 {
  0%,
  80%,
  100% {
    transform: scaleY(0.5);
  }
  40% {
    transform: scaleY(1);
  }
}

$loader: .25s;

.loader-leave-active, .loader-enter-active {
  transition: transform $loader;
}

.loader-enter-active {
  transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1)
}

.loader-leave-active {
  transition-timing-function: cubic-bezier(0.4, 0.0, 1, 1)
}

.loader-enter, .loader-leave-to {
  transform: translateY(100%);
}

</style>

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
