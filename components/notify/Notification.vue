<template>
  <div class="alert" @click="remove()" >
    <div class="alert-bubble">
      <span
        class="alert-bubble--type"
        :class="className"
      >
      </span>
    </div>

    <div class="alert-content">
      {{ notification.message }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';
import { Store } from 'vuex';
import {NotificationInterface, NotificationService, NotificationServiceInterface, NotificationType} from '@/components/notify/notify';

export default Vue.extend({
  props: {
    notification: {type: Object as PropType<NotificationInterface>, required: true},
    timeout: {type: Number, default: 4000}
  },

  data() {
    return {
      notificationService: new NotificationService(this.$store),
      className: `alert-bubble--${this.notification.type}`
    }
  },

  methods: {
    remove() {
      this.notificationService.remove(this.notification);
    }
  },

  mounted() {
    window.setTimeout(() => this.remove(), this.timeout);
  },
});
</script>
