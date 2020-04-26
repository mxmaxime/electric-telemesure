export enum NotificationType {
  SUCCESS,
  WARNING,
  ERROR
}

export interface NotificationInterface {
  type: NotificationType,
  message: string
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
