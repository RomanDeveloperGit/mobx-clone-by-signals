import { createSignal } from 'reactive-signals-by-roman';

import { SignalWithKey } from './types';

// Надстройка над базовой либой, чтоб не менять там ничего
export const createSignalWithKey = <T>(arg: T): SignalWithKey<T> => {
  return {
    signal: createSignal<T>(arg),
    isProxy: true,
  };
};

export const isSignalWithKey = (
  arg: unknown,
): arg is SignalWithKey<typeof arg> => {
  if (
    typeof arg === 'object' &&
    arg !== null &&
    'signal' in arg &&
    'isProxy' in arg &&
    arg.isProxy
  ) {
    return true;
  }

  return false;
};
