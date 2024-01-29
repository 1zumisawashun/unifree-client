import { storage } from "@/functions/libs/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

/**
 * @see https://firebase.google.com/docs/storage/web/upload-files?hl=ja
 */

const metadata = {
  contentType: "image/jpeg",
};

const getDownloadUrl = ({ file }: { file: File }) => {
  const url = `images/${file.name}`;
  const storageRef = ref(storage, url);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          // User canceled the upload
          break;

        // ...

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    async () => {
      const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
      return downloadUrl;
    }
  );
};

export { getDownloadUrl };
