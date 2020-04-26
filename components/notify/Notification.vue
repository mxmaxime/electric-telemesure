<template>
  <div class="stats box--rounded" :class="className" @click="remove()" >
    <div class="box__body">
      <p v-if="notification.title">{{ notification.title }}</p>
      <p v-if="notification.message">{{ notification.message }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./notification.scss"></style>

<script lang="ts">
import Vue, {PropType} from 'vue';
import { Store } from 'vuex';
import {NotificationInterface, NotificationService, NotificationServiceInterface, NotificationType} from '@/components/notify/notify';

export default Vue.extend({
  props: {
    notification: {type: Object as PropType<NotificationInterface>, required: true}
  },

  data() {
    return {
      notificationService: new NotificationService(this.$store),
      className: `notify--${this.notification.type}`
    }
  },

  methods: {
    remove() {
      this.notificationService.remove(this.notification);
    }
  },

  mounted() {
    if (this.notification.timeout) {
      window.setTimeout(() => this.remove(), this.notification.timeout);
    }
  },
});
</script>
