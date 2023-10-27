export enum ECallStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  CANCELLED = 'CANCELLED',
}

export const callStatusRU = {
  [ECallStatus.OPEN]: 'Новый',
  [ECallStatus.CLOSED]: 'Закрыто',
  [ECallStatus.CANCELLED]: 'Отменено',
}
