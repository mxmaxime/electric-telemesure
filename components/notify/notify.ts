/**
 * Values are used in css.
 */
export enum NotificationType {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error"
}

export interface NotificationInterface {
  type: NotificationType,
  title?: string,
  message: string,
  timeoutMs?: number
}

export interface NotificationServiceInterface {
  remove(notification: NotificationInterface): void;
  add(notification: NotificationInterface): void;
}

export class NotificationService implements NotificationServiceInterface {
  store: any;

  constructor(store: any) {
    this.store = store
  }

  remove(notification: NotificationInterface) {
    this.store.commit('notify/REMOVE', notification);
  }

  add(notification: NotificationInterface) {
    this.store.commit('notify/ADD', notification);
  }
}
