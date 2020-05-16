<template>
  <div class="l-container">
    <app-form
      class="box box__body"
      :store="store"
      :processForm="handleSignup"
      :handleProcessFormError="handleLoginError"
      :successCallback="handleSuccess"
    >

      <div slot="form-body">
        <h3>S'inscrire</h3>
        <form-input name="email" type="text" label="Your email" />
        <form-input name="password" type="password" label="Your password" />
      </div>

      <form-submit class="l-mt2" slot="form-actions">Register</form-submit>

    </app-form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

import {AuthService, AuthServiceInterface} from '@/components/auth/auth';

import FormStore from '@/components/form/FormStore';
import FormInput from '@/components/form/Input.vue';
import FormSubmit from '@/components/form/Submit.vue';
import AppForm from '@/components/form/Form.vue';

import { register, RegisterResponse } from '@/services/register';

import formStore from '@/assets/js/signup/createUserWithEmailAndPasswordStore';

import {createUserWithEmailAndPassword} from '@/assets/js/signup/firebase/createUserWithEmailAndPassword';
import {handleSignupError} from '@/assets/js/signup/firebase/createUserWithEmailAndPasswordErrorHandler';

import {ErrorHandler} from '@/components/form/handleErrors';


export default Vue.extend({
  components: {
    FormInput, FormSubmit, AppForm
  },

  methods: {
  },
  data() {
    return {
      store: formStore,
      authService: new AuthService(this.$store),
      handleSignup: createUserWithEmailAndPassword,
      handleLoginError: handleSignupError as ErrorHandler
    }
  }
})
</script>
