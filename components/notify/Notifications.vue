<template>
  <div class="alert-block">
    <transition-group name="alert">
      <notification
        v-for="notification in notifications"
        :key="notification.message"
        :notification="notification"
      />
    </transition-group>
  </div>
</template>


<script lang="ts">
import Vue, {PropType} from 'vue';

import Notification from './Notification.vue';
import {NotificationInterface} from '@/components/notify/notify';

export default Vue.extend({
  components: {
    Notification
  },

  props: {
    notifications: { type: Array as PropType<Array<NotificationInterface>>, required: true }
  }
})
</script>
