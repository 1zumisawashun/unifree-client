import { breakpoints } from "@/functions/constants/breakpoints";

const isLocalhost = () => {
  return document.location.hostname === "localhost";
};

const isIphone5 = () => window.innerWidth <= breakpoints.iphone5;

const isSp = () => window.innerWidth <= breakpoints.sp;

const isTab = () => window.innerWidth <= breakpoints.tab;

const isPc = () => window.innerWidth <= breakpoints.pc;

export { isIphone5, isLocalhost, isPc, isSp, isTab };
