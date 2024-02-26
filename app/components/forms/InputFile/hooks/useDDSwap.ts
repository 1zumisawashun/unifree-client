import { DragEvent, useRef, useState } from "react";

export function useDDSwap() {
  const $refs = useRef<Map<string, HTMLElement>>(new Map());
  const [activeId, setActiveId] = useState<string | null>(null);
  const [targetIndex, setTargetIndex] = useState(-1);

  /**
   * refを受け取ってMapに格納する
   */
  const setElm = (id: string, elm: HTMLElement | null) => {
    if (elm) {
      $refs.current.set(id, elm);
    } else {
      $refs.current.delete(id);
    }
  };

  /**
   * ドラッグを開始する要素に設定するpropsを生成する
   */
  const getHandleProps = <T = any[]>(
    index: number,
    array: T[],
    cb: (currentIndex: number, targetIndex: number) => void
  ) => {
    const itemId = index.toString();

    return {
      onDragStart(event: DragEvent) {
        // activeIdを設定
        setActiveId(itemId);

        // ドラッグしているデータと許容する動作を設定
        event.dataTransfer.setData("text/plain", itemId);
        event.dataTransfer.dropEffect = "move";
        event.dataTransfer.effectAllowed = "move";

        // ドラッグ時に表示される画像(要素)を設定
        const elm = $refs.current.get(itemId);

        if (elm) {
          elm.style.opacity = "0.4";

          const rect = elm.getBoundingClientRect();
          const posX = event.clientX - rect.left;
          const posY = event.clientY - rect.top;
          event.dataTransfer.setDragImage(elm, posX, posY);
        }
      },
      onDragEnd() {
        // ドラッグ時に表示される画像(要素)を設定
        const elm = $refs.current.get(itemId);
        if (elm) {
          elm.style.opacity = "1";
        }

        // activeIdから移動中のアイテムのindexを取得
        const currentIndex = array.findIndex(
          (_, targetId) => targetId.toString() === activeId
        );

        // indexが有効範囲であれば移動を実行
        if (currentIndex >= 0 && targetIndex >= 0) {
          // call back here
          cb(currentIndex, targetIndex);
        }

        // stateを初期化
        setActiveId(null);
        setTargetIndex(-1);
      },
    };
  };

  const changeBorderStyle = (type: "dotted" | "solid", index: number) => {
    const itemId = index.toString();
    const elm = $refs.current.get(itemId);
    if (!elm) return;
    elm.style.border = `3px ${type} #d1d5db`;
  };

  const calculateTargetIndex = (event: DragEvent, index: number) => {
    const itemId = index.toString();
    const elm = $refs.current.get(itemId);
    if (!elm) return;

    // カーソルが当たっている要素の相対位置情報を取得
    const rect = elm.getBoundingClientRect();
    // 要素内でのカーソル位置
    const posY = event.clientY - rect.top;
    // 要素の縦幅に対しての割合(念のため0-1に丸めておく)
    const ratioY = Math.min(1, Math.max(0, posY / rect.height));
    // 移動先のindexを更新
    setTargetIndex(index + Math.round(ratioY));
  };

  /**
   * ドラッグ先の要素に設定するpropsを生成する
   */
  const getItemProps = (index: number) => {
    return {
      draggable: true,
      onDragOver(event: DragEvent) {
        event.preventDefault();
        changeBorderStyle("dotted", index);
        calculateTargetIndex(event, index);
      },
      // 初期のイベントはキャンセルしておく(制御されていないEventの発生を無くすため)
      onDragEnter(event: DragEvent) {
        event.preventDefault();
      },
      onDragLeave(event: DragEvent) {
        event.preventDefault();
        changeBorderStyle("solid", index);
      },
      onDrop(event: DragEvent) {
        event.preventDefault();
        changeBorderStyle("solid", index);
      },
    };
  };

  return { setElm, getHandleProps, getItemProps };
}
