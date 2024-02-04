import { breakpoints } from "@/functions/constants/breakpoints";

function isLocalhost() {
  return document.location.hostname === "localhost";
}

function isIphone5() {
  window.innerWidth <= breakpoints.iphone5;
}

function isSp() {
  window.innerWidth <= breakpoints.sp;
}

function isTab() {
  window.innerWidth <= breakpoints.tab;
}

function isPc() {
  window.innerWidth <= breakpoints.pc;
}

export { isIphone5, isLocalhost, isPc, isSp, isTab };
