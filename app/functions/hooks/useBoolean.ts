"use client";

import { breakpoints } from "@/functions/constants/breakpoints";
import { useMemo } from "react";

export const useBoolean = () => {
  const isLocalhost = useMemo(() => {
    return document.location.hostname === "localhost";
  }, []);

  const isIphone5 = useMemo(() => window.innerWidth <= breakpoints.iphone5, []);
  const isSp = useMemo(() => window.innerWidth <= breakpoints.sp, []);
  const isTab = useMemo(() => window.innerWidth <= breakpoints.tab, []);
  const isPc = useMemo(() => window.innerWidth <= breakpoints.pc, []);

  return { isLocalhost, isIphone5, isSp, isTab, isPc };
};
