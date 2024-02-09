import { getDownloadUrl } from "@/functions/helpers/firebaseStorage";
import { isFile } from "@/functions/helpers/typeGuard";
import { UpsertProduct } from "@/functions/models/Products";

export async function imagesFactory({
  files,
}: {
  files: UpsertProduct["files"];
}) {
  const promises = files.map(async (file) => {
    if (isFile(file)) {
      const downloadUrl = await getDownloadUrl({ file });
      return { name: file.name, src: downloadUrl };
    }
    return { name: file.name, src: file.src };
  });

  const images = await Promise.all(promises);
  return images;
}
