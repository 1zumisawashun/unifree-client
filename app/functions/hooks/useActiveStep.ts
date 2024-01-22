"use client";

import { useCallback, useState } from "react";

export type UseActiveStep = {
  activeStep: number;
  back: () => void;
  next: () => void;
  reset: () => void;
};

export const useActiveStep = (initial = 0): UseActiveStep => {
  const [activeStep, setActiveStep] = useState(initial);

  const back = useCallback(() => setActiveStep((prev) => prev - 1), []);
  const next = useCallback(() => setActiveStep((prev) => prev + 1), []);
  const reset = useCallback(() => setActiveStep(0), []);

  return { activeStep, back, next, reset };
};
