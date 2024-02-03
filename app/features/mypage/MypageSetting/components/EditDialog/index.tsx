"use client";

import { Button, ButtonWrapper } from "@/components/buttons";
import { Dialog } from "@/components/elements/Dialog";
import { UseDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { FormWrapper, InputText } from "@/components/forms";
import { useState } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "edit-dialog";

export function EditDialog({ dialog }: { dialog: UseDialog }) {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");

  return (
    <Dialog {...dialog} width="half">
      <div className={styles[`${BLOCK_NAME}-body`]}>
        <p className={styles[`${BLOCK_NAME}-text`]}>プロフィール変更</p>
        <FormWrapper>
          <InputText
            label="氏名"
            isOptioned
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputText
            label="大学名"
            isOptioned
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          />
          <InputText
            label="学部名"
            isOptioned
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
          />
          <InputText
            label="学科名"
            isOptioned
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </FormWrapper>
        <ButtonWrapper position="end">
          <Button onClick={dialog.close} variant="outlined">
            Cancel
          </Button>
          <Button onClick={() => alert("demo")}>Update</Button>
        </ButtonWrapper>
      </div>
    </Dialog>
  );
}
