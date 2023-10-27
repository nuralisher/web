export enum EPosition {
  WAITER = 'WAITER',
  ADMIN = 'ADMIN',
  OWNER = 'OWNER'
}

export const positionRU = {
  [EPosition.WAITER]: 'Официант',
  [EPosition.ADMIN]: 'Админ',
  [EPosition.OWNER]: 'Создатель',
}
