const isString = (file: unknown): file is string => {
  return typeof file === "string";
};

export { isString };
