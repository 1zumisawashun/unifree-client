import { IconButton, UnstyledButton } from "@/components/buttons";
import { useDialog } from "@/components/elements/Dialog/hooks/useDialog";
import { SetState, State } from "@/functions/hooks/useArrayState";
import { PreviewDialog } from "../PreviewDialog";
import styles from "./styles.module.scss";

const BLOCK_NAME = "file-card";

const Item = ({ file, remove }: { file: File; remove: () => void }) => {
  const dialog = useDialog();
  return (
    <>
      <div className={styles[`${BLOCK_NAME}`]}>
        <div className={styles[`${BLOCK_NAME}-between-wrapper`]}>
          <UnstyledButton onClick={dialog.open}>
            <p className={styles[`${BLOCK_NAME}-name`]}>{file.name}</p>
          </UnstyledButton>
          <IconButton name="cross" size="small" onClick={remove} />
        </div>
      </div>
      <PreviewDialog dialog={dialog} file={file} />
    </>
  );
};

const List = ({
  state,
  setState,
}: {
  state: State<File>;
  setState: SetState<File>;
}) => {
  if (state.length !== 0) return null;

  return (
    <div className={styles[`${BLOCK_NAME}-container`]}>
      {state.map((file, index) => (
        <Item
          file={file}
          key={file.name}
          remove={() => setState.remove(index)}
        />
      ))}
    </div>
  );
};

export const FileCard = {
  List,
  Item,
};
