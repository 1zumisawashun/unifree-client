/* eslint-disable no-return-assign */
/* eslint-disable no-promise-executor-return */
export async function getDataUrl({
  file,
}: {
  file: File | undefined;
}): Promise<string | null> {
  if (!file) return null;
  const reader = new FileReader();
  reader.readAsDataURL(file);
  await new Promise((resolve) => (reader.onload = () => resolve("")));
  return reader.result as string;
}
