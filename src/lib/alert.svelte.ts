export interface Alert {
  id: number;
  type: AlertType;
  message: string;
}

export type AlertType = 'success' | 'danger' | 'warning' | 'info';

export type Alerter = (message: string, duration?: number) => void;

export let alerts: Alert[] = $state([]);

export function add(type: AlertType, message: string, duration?: number) {
  const alert = { id: alerts.length, type, message } as Alert;
  duration = duration || 5000;
  alerts.push(alert);
  setTimeout(() => remove(alert), duration);
}

export function remove(alert: Alert) {
  const idx = alerts.findIndex((a) => a.id === alert.id);
  alerts.splice(idx, 1);
}

export let info: Alerter = (message, duration) => add('info', message, duration);

export let success: Alerter = (message, duration) => add('success', message, duration);

export let warning: Alerter = (message, duration) => add('warning', message, duration);

export let danger: Alerter = (message, duration) => add('danger', message, duration);
