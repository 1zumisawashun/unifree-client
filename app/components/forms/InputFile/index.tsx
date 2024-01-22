"use client";

import { useDD } from "@/functions/hooks/useDD";
import { BaseSyntheticEvent, useId, useRef } from "react";
import {
  InputWrapper,
  InputWrapperPropsPassThroughProps,
} from "../InputWrapper";
import styles from "./styles.module.scss";

export type FileUploadInputProps = {
  file: File | undefined;
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
  isMultiple?: boolean;
} & InputWrapperPropsPassThroughProps;

export const InputFile: React.FC<FileUploadInputProps> = ({
  file = undefined,
  setFile,
  isMultiple = false,
  label,
  error,
  description,
  isOptioned,
  isRequired,
  disabled,
  width,
}) => {
  const dragRef = useRef<HTMLLabelElement | null>(null);

  const handleUpload = (e: BaseSyntheticEvent) => {
    const file = e.target.files[0];
    setFile(file);
  };

  useDD(dragRef, (e) => {
    const file = e.dataTransfer?.files[0];
    setFile(file);
  });

  const id = useId();

  const BLOCK_NAME = "drag-and-drop";
  const accept = "image/png, image/jpg, application/pdf";

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
          id={id}
          onChange={handleUpload}
        />
        <p className={styles[`${BLOCK_NAME}-text`]}>
          {file ? file.name : "ファイルをアップロードする"}
        </p>
        <span
          className={styles[`${BLOCK_NAME}-button`]}
          data-variant={"contained"}
          data-theme={"primary"}
          data-size={"small"}
          data-shape={"round"}
        >
          ファイルを選択する
        </span>
      </label>
    </InputWrapper>
  );
};
