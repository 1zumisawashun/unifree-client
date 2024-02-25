import { IconButton, UnstyledButton } from "@/components/buttons";
import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { PreviewDialog } from "@/components/elements/PreviewDialog";
import { getDataUrl } from "@/components/forms/InputFile/hooks/getDataUrl";
import { useDDSwap } from "@/components/forms/InputFile/hooks/useDDSwap";
import { isFile } from "@/functions/helpers/typeGuard";
import { UseArrayState } from "@/functions/hooks/useArrayState";
import { Image } from "@/functions/types/Prisma";
import { ElementRef, forwardRef, useEffect, useState } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "file-card";

type ImageWithoutProductId = Omit<Image, "productId">;

type Props = {
  file: File | Image;
  removeState: () => void;
};

type Ref = ElementRef<"li">;

const Item = forwardRef<Ref, Props>(({ file, removeState, ...props }, ref) => {
  const [image, setImage] = useState<ImageWithoutProductId>();

  const dialog = useDialog();

  const init = async ({ file }: { file: File | Image }) => {
    if (isFile(file)) {
      const src = (await getDataUrl({ file })) as string;
      setImage({ id: 1, src, name: file.name });
      return;
    }
    setImage(file);
  };

  useEffect(() => {
    init({ file });
  }, [file]);

  return (
    <>
      <li className={styles[`${BLOCK_NAME}`]} ref={ref} {...props}>
        <div className={styles[`${BLOCK_NAME}-between-wrapper`]}>
          <UnstyledButton onClick={dialog.open}>
            <p className={styles[`${BLOCK_NAME}-name`]}>{image?.name}</p>
          </UnstyledButton>
          <IconButton name="cross" size="small" onClick={removeState} />
        </div>
      </li>
      <PreviewDialog dialog={dialog} images={image ? [image] : undefined} />
    </>
  );
});

Item.displayName = "Item";

const List = ({
  state,
  setState,
}: {
  state: UseArrayState<File | Image>[0];
  setState: UseArrayState<File | Image>[1];
}) => {
  const { setElm, getHandleProps, getItemProps } = useDDSwap();

  if (state.length === 0) return null;

  const moveItem = (currentIndex: number, targetIndex: number) => {
    setState.move(currentIndex, targetIndex);
  };

  return (
    <ul className={styles[`${BLOCK_NAME}-container`]}>
      {state.map((file, index) => (
        <Item
          file={file}
          key={index}
          removeState={() => setState.remove(index)}
          {...getHandleProps(index, state, moveItem)}
          {...getItemProps(index)}
          ref={(elm) => {
            setElm(index.toString(), elm);
          }}
        />
      ))}
    </ul>
  );
};

export const FileCard = {
  List,
  Item,
};
