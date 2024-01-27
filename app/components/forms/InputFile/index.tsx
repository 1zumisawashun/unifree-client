import { Button } from "@/components/buttons/Button";
import { getDataUrl } from "@/components/forms/InputFile/hooks/getDataUrl";
import { useDD } from "@/components/forms/InputFile/hooks/useDD";
import { InputWrapper } from "@/components/forms/InputWrapper";
import { InputWrapperPropsPassThroughProps } from "@/components/forms/input.type";
import { BaseSyntheticEvent, useId, useRef, useState } from "react";
import styles from "./styles.module.scss";

export type InputFileProps = {
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
  isMultiple?: boolean;
} & InputWrapperPropsPassThroughProps;

const BLOCK_NAME = "drag-and-drop";

const accept = "image/png, image/jpeg, image/webp, image/bmp";

/* eslint-disable jsx-a11y/label-has-associated-control */
// 暗黙のlabelを使っているので問題なし
export function InputFile({
  setFile,
  isMultiple = false,
  label,
  error,
  description,
  isOptioned,
  isRequired,
  disabled,
  width,
}: InputFileProps) {
  const id = useId();
  const dragRef = useRef<HTMLLabelElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [src, setSrc] = useState<string | null>(null);

  const handleUpload = async (e: BaseSyntheticEvent) => {
    const files = e.target.files as FileList;
    setFile(files[0]);
    const result = (await getDataUrl({ files })) as string;
    setSrc(result);
  };

  useDD(dragRef, async (e) => {
    const files = e.dataTransfer?.files as FileList;
    setFile(files[0]);
    const result = (await getDataUrl({ files })) as string;
    setSrc(result);
  });

  /* eslint-disable @next/next/no-img-element */
  return (
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
        <input
          type="file"
          hidden
          multiple={isMultiple}
          accept={accept}
          ref={inputRef}
          id={id}
          onChange={handleUpload}
        />

        {src ? (
          <div>
            <div className={styles[`${BLOCK_NAME}-image-wrapper`]}>
              <img
                src={src}
                alt={src}
                className={styles[`${BLOCK_NAME}-image`]}
              />
            </div>
          </div>
        ) : (
          <p>アップロードしてください</p>
        )}

        <Button
          size="small"
          shape="round"
          onClick={() => inputRef.current?.click()}
        >
          ファイルを選択する
        </Button>
      </label>
    </InputWrapper>
  );
}
