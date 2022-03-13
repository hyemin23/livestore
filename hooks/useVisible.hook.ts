import { useCallback, useState } from "react";

function useVisibleHook(
  defaultVisible: boolean
): [
  visible: boolean,
  setVisible: () => void,
  setInvisible: () => void,
  toggle: () => void
] {
  const [visible, setVisibility] = useState(defaultVisible);
  const setVisible = useCallback(() => setVisibility(true), []);
  const setInvisible = useCallback(() => setVisibility(false), []);
  const toggle = useCallback(() => setVisibility(!visible), [visible]);
  return [visible, setVisible, setInvisible, toggle];
}

export default useVisibleHook;
