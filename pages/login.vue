<template>
  <div class="l-container">
    <app-form
      class="box box__body"
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
import Vue from 'vue';

import FormStore from '@/components/form/FormStore';
import FormInput from '@/components/form/Input.vue';
import FormSubmit from '@/components/form/Submit.vue';
import AppForm from '@/components/form/Form.vue';

import {AuthService, AuthServiceInterface} from '@/components/auth/auth';

import {SignInWithEmailAndPassword} from '@/components/signin/signInWithEmailAndPassword';
import {signInWithEmailAndPassword} from '@/components/signin/firebase/signInWithEmailAndPassword';

import {ErrorHandler} from '@/components/form/handleErrors';
import {handleLoginError} from '@/components/signin/firebase/errorHandler';

import formStore from '@/components/form/stores/signInWithEmailAndPasswordStore';

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
      handleLoginError: handleLoginError as ErrorHandler
    }
  }
});
</script>
