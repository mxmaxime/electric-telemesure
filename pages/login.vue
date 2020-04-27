<template>
  <div class="l-container">
    <app-form
      class="box box__body"
      :use-csrf="false"
      :store="store"
      :processForm="handleLogin"
      :handleProcessFormError="handleLoginError"
      :successCallback="handleSuccess"
    >

      <div slot="form-body">
        <h3>Se connecter</h3>
        <form-input name="email" type="email" label="E-mail" />
        <form-input name="password" type="password" label="Mot de passe" />
      </div>

      <form-submit class="l-mt2" slot="form-actions">Se connecter</form-submit>
    </app-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { login, LoginResponse } from '@/services/login';
import {AuthService, AuthServiceInterface} from '@/components/auth/auth';
import FormStore from '@/components/form/FormStore';
import FormInput from '@/components/form/Input.vue';
import FormSubmit from '@/components/form/Submit.vue';
import AppForm from '@/components/form/Form.vue';
import {SignInWithEmailAndPasswordState, SignInWithEmailAndPassword} from '@/components/signin/signInWithEmailAndPassword';
import {signInWithEmailAndPassword} from '@/components/signin/firebaseSignInWithEmailAndPassword';

import {handleLoginError} from '@/components/signin/firebase/errorHandler'
import {ErrorHandler} from '@/components/form/handleErrors'

const formStore = new FormStore<SignInWithEmailAndPasswordState>({
  email: '',
  password: ''
});

export default Vue.extend({
  components: {
    FormInput, FormSubmit, AppForm
  },
  methods: {
    handleSuccess(user: Object) {
      this.authService.login(user);
      this.$router.push('/');
    }
  },
  data() {
    return {
      authService: new AuthService(this.$store),
      store: formStore,
      handleLogin: signInWithEmailAndPassword as SignInWithEmailAndPassword,
      handleLoginError: handleLoginError /*as ErrorHandler*/
    }
  }
});
</script>
