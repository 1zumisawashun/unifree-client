import { isNumber, isString } from "@/functions/helpers/typeGuard";
import { useCallback, useState } from "react";

export const useArrayState = <T>(initial: T[] = []) => {
  const [state, setState] = useState<T[]>(initial);

  const add = useCallback((value: T | T[]) => {
    const isArray = Array.isArray(value);

    if (isArray) {
      setState((prev) => [...prev, ...value]); // array case
    } else {
      setState((prev) => [...prev, value]); // objects/primitive case
    }
  }, []);

  const remove = useCallback((value: number | T) => {
    if (isNumber(value)) {
      setState((prev) => {
        const newState = [...prev];
        newState.splice(value, 1);
        return newState;
      });
      return;
    }
    if (isString(value)) {
      setState((prev) => prev.filter((item) => item !== value));
      return;
    }
    alert("we only allow primitives.");
  }, []);

  const update = useCallback((value: T | T[], index?: number) => {
    const isArray = Array.isArray(value);

    if (isArray) {
      setState(value); // array case
    } else {
      if (!index) {
        alert("index is required.");
        return;
      }
      setState(
        (prev) =>
          prev.map((obj, _index) => {
            return _index === index ? value : obj;
          }) // objects/primitive case
      );
    }
  }, []);

  return [state, { add, remove, update }] as const;
};

export type UseArrayState<T> = ReturnType<typeof useArrayState<T>>;
