<template>
  <app-form
    class="auth__panel auth__panel--primary"
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
</template>

<script lang="ts">
import Vue from 'vue'
import { login, LoginResponse } from '@/services/login';
import {AuthService, AuthServiceInterface} from '@/components/auth/auth';
import FormStore from '@/components/form/FormStore';
import FormInput from '@/components/form/Input.vue';
import FormSubmit from '@/components/form/Submit.vue';
import AppForm, {ErrorsInterface} from '@/components/form/Form.vue';
import { auth } from '@/services/firebase-init';


interface LoginStore {
  email: string,
  password: string
};

const formStore = new FormStore<LoginStore>({
  email: '',
  password: ''
});

async function handleLogin({email, password}: LoginStore) {
  return await auth.signInWithEmailAndPassword(email, password);
};

function handleLoginError(e: any): ErrorsInterface {
  console.log({e});
  return {
    'email': ['Bad email!']
  }
};

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
      handleLogin,
      handleLoginError
    }
  }
});
</script>
