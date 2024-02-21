import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { ErrorDialog } from "@/components/elements/ErrorDialog";
import { useDD } from "@/components/forms/InputFile/hooks/useDD";
import { InputWrapper } from "@/components/forms/InputWrapper";
import { InputWrapperPropsPassThroughProps } from "@/components/forms/input.type";
import { UseArrayState } from "@/functions/hooks/useArrayState";
import { Image } from "@/functions/types/Prisma";
import { BaseSyntheticEvent, ElementRef, useId, useRef, useState } from "react";
import { FileCard } from "./components/FileCard";
import styles from "./styles.module.scss";

export type InputFileProps = {
  state: UseArrayState<File | Image>[0];
  setState: UseArrayState<File | Image>[1];
  isMultiple?: boolean;
} & InputWrapperPropsPassThroughProps;

const BLOCK_NAME = "drag-and-drop";

const accept = "image/png, image/jpeg, image/webp, image/bmp";

/**
 * @description FileListをArrayとして扱う
 * @see https://zenn.dev/tokiya_horikawa/articles/8270949e4f027fce4d66
 *
 * @description labelタグのchildrenにbuttonタグを入れるバグる
 * @see https://zenn.dev/rabee/articles/input-caution-point
 */
export function InputFile({
  state,
  setState,
  isMultiple = true,
  label,
  error,
  description,
  isOptioned,
  isRequired,
  disabled,
  width,
}: InputFileProps) {
  const id = useId();
  const errorDialog = useDialog();

  const dragRef = useRef<ElementRef<"label">>(null);

  const [message, setMessage] = useState("");

  const update = ({ fileList }: { fileList: FileList }) => {
    const files = [...Array.from(fileList)];

    // validate here
    if ([...state, ...files].length >= 5) {
      setMessage("4枚を超えて選択された画像は表示されません");
      errorDialog.open();
      return;
    }

    setState.add([...files]);
  };

  const handleUpload = (e: BaseSyntheticEvent) => {
    const fileList = e.target.files as FileList;
    update({ fileList });
  };

  useDD(dragRef, (e: DragEvent) => {
    const fileList = e.dataTransfer?.files as FileList;
    update({ fileList });
  });

  return (
    <>
      <InputWrapper
        label={label}
        error={error}
        description={description}
        id={id}
        isOptioned={isOptioned}
        isRequired={isRequired}
        disabled={disabled}
        width={width}
      >
        <label className={styles[`${BLOCK_NAME}-file`]} ref={dragRef}>
          <p className={styles[`${BLOCK_NAME}-text`]}>
            ドラッグアンドドロップでアップロードできます
          </p>

          <label
            data-size="small"
            data-shape="round"
            data-variant="contained"
            data-theme="primary"
            htmlFor={id}
            className={styles[`${BLOCK_NAME}-button`]}
          >
            ファイルを選択する
          </label>
        </label>
      </InputWrapper>

      <FileCard.List state={state} setState={setState} />

      <input
        type="file"
        hidden
        multiple={isMultiple}
        accept={accept}
        id={id}
        onChange={handleUpload}
      />

      <ErrorDialog
        dialog={errorDialog}
        message={message}
        domain="画像アップロード"
      />
    </>
  );
}
