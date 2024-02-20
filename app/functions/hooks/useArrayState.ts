import { useCallback, useState } from "react";

export const useArrayState = <T>(initial: T[] = []) => {
  const [state, setState] = useState<T[]>(initial);

  const add = useCallback((newValue: T | T[]) => {
    const isArray = Array.isArray(newValue);

    if (isArray) {
      setState((prev) => [...prev, ...newValue]);
    } else {
      setState((prev) => [...prev, newValue]);
    }
  }, []);

  const remove = useCallback((index: number) => {
    setState((prev) => {
      const newState = [...prev];
      newState.splice(index, 1);
      return newState;
    });
  }, []);

  // checkboxで使用する
  const filter = useCallback(
    (value: T, checked: boolean) => {
      checked
        ? setState([...state, value])
        : setState(state.filter((item) => item !== value));
    },
    [state]
  );

  return [state, { add, remove, filter }] as const;
};

export type UseArrayState<T> = ReturnType<typeof useArrayState<T>>;
