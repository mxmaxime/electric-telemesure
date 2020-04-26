import {NotificationInterface} from '@/components/notify/notify'

interface NotificationState {
  notifications: Array<NotificationInterface>
}

export const state = (): NotificationState => ({
  notifications: [] as NotificationInterface[]
})

export const getters = {
  getNotifications: (state: NotificationState) => state.notifications
}

export const mutations = {
  ADD: (state: NotificationState, notification: NotificationInterface) => {
    state.notifications.push(notification)
  },

  REMOVE: (state: NotificationState, notification: NotificationInterface) => {
    state.notifications = state.notifications.filter((a: NotificationInterface) => a !== notification)
  }
}
