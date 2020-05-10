<template>
  <button @click="askPermission">Enable push notification</button>
</template>

<script lang="ts">

import { askPermission } from '@/services/push-notifications'

import Vue from 'vue'
export default Vue.extend({
  methods: {
    askPermission() {
      askPermission().then((result) => {
        console.log({result});
      }).catch(e => console.error)
    }
  },

})
</script>
