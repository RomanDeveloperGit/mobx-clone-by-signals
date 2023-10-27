import { FC, useState } from 'react';

import { observer } from '../lib/mobx-clone';
import { testSignalwithKey } from './model';

type Props = {
  testSignalwithKey: typeof testSignalwithKey;
};

export const TestClicker: FC<Props> = observer(({ testSignalwithKey }) => {
  const [state, setState] = useState(0);

  return (
    <div>
      <div>testSignalwithKey: {testSignalwithKey.signal.value}</div>
      <button
        onClick={() => {
          testSignalwithKey.signal.value = testSignalwithKey.signal.value + 1;
        }}
      >
        setSignal
      </button>
      <div>state: {state}</div>
      <button onClick={() => setState(state + 1)}>setState</button>
    </div>
  );
});
