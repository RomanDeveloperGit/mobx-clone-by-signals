import { FC, useEffect, useState } from 'react';

import { observer } from '../lib/mobx-clone';

import { testSignalwithKey } from './model';

type Props = {
  testSignalwithKey: typeof testSignalwithKey;
};

export const TestInterval: FC<Props> = observer(({ testSignalwithKey }) => {
  const [state, setState] = useState(0);
  const [isIntervalActive, setIntervalActive] = useState(false);

  useEffect(() => {
    if (!isIntervalActive) return;

    const intervalId = setInterval(() => {
      testSignalwithKey.signal.value++;
    }, 1000);

    console.log('Интервал подключили');

    return () => {
      clearInterval(intervalId);

      console.log('Интервал отключили');
    };
  }, [isIntervalActive]);

  return (
    <div>
      <div>
        testSignalwithKey: {testSignalwithKey.signal.value}{' '}
        {String(isIntervalActive)}
      </div>
      <button onClick={() => setIntervalActive(!isIntervalActive)}>
        setIntervalActive
      </button>
      <div>state: {state}</div>
      <button onClick={() => setState(state + 1)}>setState</button>
    </div>
  );
});
