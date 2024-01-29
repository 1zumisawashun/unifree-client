import { useState } from "react";

export type State<T> = T[];

export type SetState<T> = {
  readonly add: (newValues: T[]) => void;
  readonly remove: (index: number) => void;
};

export type UseArrayState<T> = [State<T>, SetState<T>];

export const useArrayState = <T>(initial: T[] = []) => {
  const [state, setState] = useState<T[]>(initial);

  const add = (newValue: T | T[]) => {
    const isArray = Array.isArray(newValue);

    if (isArray) {
      setState((prev) => [...prev, ...newValue]);
    } else {
      setState((prev) => [...prev, newValue]);
    }
  };

  const remove = (index: number) => {
    setState((prev) => {
      const newState = [...prev];
      newState.splice(index, 1);
      return newState;
    });
  };

  return [state, { add, remove }] as const;
};
