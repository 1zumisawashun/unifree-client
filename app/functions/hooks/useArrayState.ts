import { useState } from "react";

export const useArrayState = <T>(initial: T[] = []) => {
  const [state, setState] = useState<any[]>(initial);

  const add = (newValue: T) => {
    setState((prev) => [...prev, newValue]);
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
