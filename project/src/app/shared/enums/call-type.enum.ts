export enum ECallType {
  CALL = 'CALL',
  PAYMENT_WITH_CARD = 'PAYMENT_WITH_CARD',
  CASH_PAYMENT = 'CASH_PAYMENT',
}

export const callRU = {
  [ECallType.CALL]: 'Вызов',
  [ECallType.PAYMENT_WITH_CARD]: 'Оплата с картой',
  [ECallType.CASH_PAYMENT]: 'Оплата наличным',
}
