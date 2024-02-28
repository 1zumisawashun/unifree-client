import { UpsertProduct } from "@/features/product/product.model";
import { getDownloadUrl } from "@/functions/helpers/firebaseStorage";
import { isFile } from "@/functions/helpers/typeGuard";

export async function imagesFactory({
  files,
}: {
  files: UpsertProduct["files"];
}) {
  if (files.length === 0) {
    return [{ name: "default", src: "https://placehold.jp/400x250.png" }];
  }

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
