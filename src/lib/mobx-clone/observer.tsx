import { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { createEffect } from 'reactive-signals-by-roman';

import { useForceUpdate } from '../force-update';
import { isSignalWithKey } from './create-signal';

export const observer = <Props extends Record<string, unknown>>(
  Component: FC<Props>,
) => {
  return function MobxStateContainer(props: Props) {
    const forceUpdate = useForceUpdate();
    const needToRender = useRef<JSX.Element>();

    // Костыльный триггер всех value из сигналов, ...
    // ... чтобы эффект был подписан на свежие пропсы-сигналы
    // [!!!] Решение на скорую руку [!!!]
    const checkSignals = useCallback(() => {
      Object.values(props).forEach((prop) => {
        if (isSignalWithKey(prop)) {
          return prop.signal.value;
        }
      });
    }, [props]);

    useEffect(() => {
      createEffect(() => {
        checkSignals();

        needToRender.current = <Component {...props} />;

        forceUpdate();
      });
    }, []);

    return needToRender.current;
  };
};
