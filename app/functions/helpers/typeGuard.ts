const isString = (file: unknown): file is string => {
  return typeof file === "string";
};

const isFile = (file: unknown): file is File => {
  return file instanceof File;
};

export { isFile, isString };
