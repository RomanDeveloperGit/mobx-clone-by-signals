import { useCallback, useState } from 'react';

export const useForceUpdate = () => {
  const [, updateState] = useState<Record<string, any>>();
  const forceUpdate = useCallback(() => updateState({}), []);

  console.log('useForceUpdate');

  return forceUpdate;
};
