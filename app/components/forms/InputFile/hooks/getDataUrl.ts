/* eslint-disable no-return-assign */
/* eslint-disable no-promise-executor-return */
export async function getDataUrl({
  files,
}: {
  files: FileList | undefined;
}): Promise<string | ArrayBuffer | null> {
  if (!files) return null;
  const file = files[0];
  if (!file) return null;
  const reader = new FileReader();
  reader.readAsDataURL(file);
  await new Promise((resolve) => (reader.onload = () => resolve("")));
  return reader.result;
}
