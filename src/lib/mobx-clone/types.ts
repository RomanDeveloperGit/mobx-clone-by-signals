import { createSignal } from 'reactive-signals-by-roman';

export type SignalWithKey<T> = {
  signal: ReturnType<typeof createSignal<T>>;
  isProxy: true;
};
