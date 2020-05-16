<template>
  <form
    class="form"
    @submit="handleSubmit"
    method="POST">

    <slot name="form-body"></slot>

    <!-- to DELETE, PUT, PATCH -->
    <!-- <input v-if="customMethod" type="hidden" name="_method" :value="customMethod" /> -->

    <div v-if="hasAction" class="form-group justify-between">
      <slot name="form-actions"></slot>
    </div>

  </form>
</template>
<style lang="scss" src="./form.scss"></style>

<script lang="ts">
import Vue, {PropType} from 'vue';
import FormStore from './FormStore';
import {ErrorHandler, ErrorsInterface} from '@/components/form/handleErrors';


export default Vue.extend({
  props: {
    processForm: { type: Function as PropType<(values: Object) => Promise<any>>, required: true },
    handleErrorMessage: { type: Function as PropType<(message: string) => void>, required: true},
    handleProcessFormError: { type: Function as PropType<ErrorHandler>, required: true },

    store: { type: Object as PropType<FormStore<any>>, required: true },

    submitOnMount: {type: Boolean, default: false},

    successShowMessage: { type: Boolean, default: true },

    // How to redirect the user when succeed
    successGoTo: String,

    successCallback: { type: Function },
    errorCallback: { type: Function },
  },

  data() {
    return {
      state: this.store.state,
      sending: false,
      focused: false,
    }
  },

  computed: {
    hasAction(): boolean {
      return !!this.$slots['form-actions'];
    }
  },

  methods: {
    async handleSubmit(e: any) {
      e.preventDefault();
      this.sending = true;

      try {
        await this.processForm(this.store.state.values);
        this.successCallback();
      } catch (e) {
        const errorResponse: ErrorsInterface = this.handleProcessFormError(e);
        if (errorResponse.message) {
          this.handleErrorMessage(errorResponse.message);
        } else {
          // @TODO handle form input errors.
        }
      }

      this.sending = false;
    }
  },

   mounted() {
    if (this.submitOnMount) {
      this.$el.dispatchEvent(new Event('submit'))
    }

    const state = this.store.state;

    this.$on('update', function({ value, inputName }: any) {

      if (state.values[inputName] === undefined) {
        throw new Error(`Tu as dû oublier d'initialiser le champ "${inputName} lors de l'instanciation du Store !. Voici le state: ${JSON.stringify(state)}`);
      }

      // Remove the error when typing again !
      if (state.errors[inputName]) {
        state.errors[inputName] = '';
      }


      state.values[inputName] = value;
    });
  }
});
</script>
