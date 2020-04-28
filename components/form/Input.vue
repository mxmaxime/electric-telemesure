<template>
  <div class="field field--text" :class="labelClass">
    <label
      :for="id"
      ref="label"
    >
      {{ label }}
    </label>

    <input
      :type="type"
      :name="name"
      :id="id"
      @blur="handleBlur"
      @focus="handleFocus"
      v-model="value" />

    <span v-if="error" class="field-error"> {{ error }} </span>

  </div>
</template>

<style lang="scss" scoped src="./input.scss"></style>

<script>
export default {
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
    id: { type: String, default: function() {
      return this.name
    }},

    type: { type: String, default: 'text' },
    labeledClass: {type: String, default: 'has-label'},
    focusedClass: {type: String, default: 'is-focused'}
  },

  data: () => ({value: '', labelClass: ''}),

  computed: {
    /**
     * I'm connecting error with an computed property to get reacivity.
     * If I put this into my data, I loose the reactivity on the errors object (something like error: this.$parent.state.errors[this.name], I'm loosing the reference object, so the reactivity too.)
     */
    error() {
      return this.$parent.state.errors[this.name];
    }

  },
  methods: {
    handleFocus() {
      this.labelClass = this.labeledClass + ' ' + this.focusedClass;
    },

    handleBlur() {
      if (this.value !== '') {
        this.labelClass = this.labeledClass;
      }
      else {
        this.labelClass = '';
      }
    },
  },

  watch: {
    /**
     * Emit an event to the parent (normal communication) to says "Hey, update me !".
     * It will update the FormStore thank's to the inputName.
     */
    value(val) {
      /**
       * Usecase: browser autofill.
       * I receive a value from it, so I have to move up the label.
       */
      if (val) {
        this.labelClass = this.labeledClass;
      }

      this.$parent.$emit('update', {value: val, inputName: this.name});
    },

    error(val) {
      if (val) {
        this.className += 'field--error';
      }
    }
  }
}
</script>
