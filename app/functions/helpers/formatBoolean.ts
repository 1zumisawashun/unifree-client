import { breakpoints } from "@/functions/constants/breakpoints";

function isLocalhost() {
  return document.location.hostname === "localhost";
}

function isIphone5() {
  return window.innerWidth <= breakpoints.iphone5;
}

function isSp() {
  return window.innerWidth <= breakpoints.sp;
}

function isTab() {
  return window.innerWidth <= breakpoints.tab;
}

function isPc() {
  return window.innerWidth <= breakpoints.pc;
}

export { isIphone5, isLocalhost, isPc, isSp, isTab };
