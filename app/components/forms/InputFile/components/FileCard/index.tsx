import { IconButton, UnstyledButton } from "@/components/buttons";
import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { PreviewDialog } from "@/components/elements/PreviewDialog";
import { getDataUrl } from "@/components/forms/InputFile/hooks/getDataUrl";
import { isString } from "@/functions/helpers/typeGuard";
import { SetState, State } from "@/functions/hooks/useArrayState";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "file-card";

type Image = {
  id: number;
  src: string;
  name: string;
};

const Item = ({
  file,
  remove,
}: {
  file: File | string;
  remove: () => void;
}) => {
  const [image, setImage] = useState<Image>();

  const dialog = useDialog();

  const init = async ({ file }: { file: File | string }) => {
    if (isString(file)) {
      setImage({ id: 1, src: file, name: "sample" });
      return;
    }
    const src = (await getDataUrl({ file })) as string;
    setImage({ id: 1, src, name: file.name });
  };

  useEffect(() => {
    init({ file });
  }, [file]);

  return (
    <>
      <div className={styles[`${BLOCK_NAME}`]}>
        <div className={styles[`${BLOCK_NAME}-between-wrapper`]}>
          <UnstyledButton onClick={dialog.open}>
            <p className={styles[`${BLOCK_NAME}-name`]}>{image?.name}</p>
          </UnstyledButton>
          <IconButton name="cross" size="small" onClick={remove} />
        </div>
      </div>
      <PreviewDialog dialog={dialog} images={image ? [image] : undefined} />
    </>
  );
};

const List = ({
  state,
  setState,
}: {
  state: State<File | string>;
  setState: SetState<File | string>;
}) => {
  if (state.length === 0) return null;

  return (
    <div className={styles[`${BLOCK_NAME}-container`]}>
      {state.map((file, index) => (
        <Item file={file} key={index} remove={() => setState.remove(index)} />
      ))}
    </div>
  );
};

export const FileCard = {
  List,
  Item,
};
