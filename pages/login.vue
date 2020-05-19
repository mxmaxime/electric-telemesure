<template>
  <div class="l-container">
    <app-form
      class="box box__body"
      :store="store"
      :processForm="handleLogin"
      :handleProcessFormError="handleLoginError"
      :handleErrorMessage="handleErrorMessage"
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
import {ErrorHandler} from '@/components/form/handleErrors';

import {signInWithEmailAndPassword} from '@/assets/js/signin/firebase/signInWithEmailAndPassword';
import {handleLoginError} from '@/assets/js/signin/firebase/signInWithEmailAndPasswordErrorHandler';

import formStore from '@/assets/js/signin/signInWithEmailAndPasswordStore';

import {NotificationService, NotificationServiceInterface, NotificationType} from '@/components/notify/notify';


export default Vue.extend({
  components: {
    FormInput, FormSubmit, AppForm
  },
  methods: {
    handleSuccess(user: Object) {
      this.authService.login(user);

      this.notificationService.add({
        type: NotificationType.SUCCESS,
        message: `Ravi de vous revoir !`,
        timeoutMs: 2500
      });

      this.$router.push('/');
    },

    handleErrorMessage(message: string) {
      this.notificationService.add({
        type: NotificationType.ERROR,
        message,
      });
    }
  },
  data() {
    return {
      authService: new AuthService(this.$store),
      notificationService: new NotificationService(this.$store),
      store: formStore,
      handleLogin: signInWithEmailAndPassword,
      handleLoginError: handleLoginError as ErrorHandler
    }
  },

});
</script>
