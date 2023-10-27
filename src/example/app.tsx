import { testSignalwithKey } from './model';

import { TestClicker } from './test-clicker';
import { TestInterval } from './test-interval';

export const App = () => {
  return (
    <div>
      <TestClicker testSignalwithKey={testSignalwithKey} />
      <TestInterval testSignalwithKey={testSignalwithKey} />
    </div>
  );
};
