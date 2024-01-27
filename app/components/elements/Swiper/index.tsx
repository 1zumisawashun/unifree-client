import { IconButton } from "@/components/buttons";
import { useActiveStep } from "@/functions/hooks/useActiveStep";
import { useRef } from "react";
import "swiper/css";
import { Swiper as RowSwiper } from "swiper/react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "swiper";

export function Swiper({
  children,
  max,
}: {
  children: React.ReactNode;
  max: number;
}) {
  const swiperRef = useRef();
  const { next, back, activeStep } = useActiveStep();

  return (
    <div className={styles[`${BLOCK_NAME}-container`]}>
      <IconButton
        size="small"
        name="arrow-left"
        onClick={() => {
          // @ts-ignore
          swiperRef.current?.slidePrev();
          back();
        }}
        disabled={activeStep === 0}
        className={styles[`${BLOCK_NAME}-left-button`]}
      />
      <RowSwiper
        slidesPerView={2}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiperRef.current = swiper;
        }}
      >
        {children}
      </RowSwiper>
      <IconButton
        size="small"
        name="arrow-right"
        onClick={() => {
          // @ts-ignore
          swiperRef.current?.slideNext();
          next();
        }}
        disabled={activeStep === max}
        className={styles[`${BLOCK_NAME}-right-button`]}
      />
    </div>
  );
}
