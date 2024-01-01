import { useState, useCallback } from 'react';

const useToggle = function (initState = false) {
  const [state, setState] = useState(initState);

  const toggle = useCallback(() => setState(!state), [state, setState]);
  const setOn = useCallback(() => setState(true), [setState]);
  const setOff = useCallback(() => setState(false), [setState]);
  const reset = useCallback(() => setState(initState), [setState, initState]);

  return [state, toggle, setOn, setOff, setState, reset];
};

export default useToggle;
