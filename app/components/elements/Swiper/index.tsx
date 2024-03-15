import { IconButton } from '@/components/buttons'
import { useActiveStep } from '@/functions/hooks/useActiveStep'
import { useRef } from 'react'
import 'swiper/css'
import { Swiper as RowSwiper, SwiperSlide } from 'swiper/react'
import styles from './styles.module.scss'

const BLOCK_NAME = 'swiper'

export const Swiper = <T extends { id: number | string }>(props: {
  rows: T[]
  render: React.FC<T>
  perSlide?: number
}) => {
  const swiperRef = useRef()
  const { next, back, activeStep } = useActiveStep()

  const min = activeStep === 0
  const max = activeStep === props.rows.length

  const shouldShowIconButton = props.rows.length > 1

  const handleBack = () => {
    // @ts-ignore
    swiperRef.current.slidePrev()
    back()
  }

  const handleNext = () => {
    // @ts-ignore
    swiperRef.current?.slideNext()
    next()
  }

  const handleBeforeInit = (swiper: any) => {
    // @ts-ignore
    swiperRef.current = swiper
  }

  return (
    <div className={styles[`${BLOCK_NAME}-container`]}>
      {shouldShowIconButton && (
        <IconButton
          size="small"
          name="arrow-left"
          variant="outlined"
          onClick={handleBack}
          disabled={min}
          className={styles[`${BLOCK_NAME}-left-button`]}
        />
      )}
      <RowSwiper
        slidesPerView={props.perSlide ?? 1}
        onBeforeInit={handleBeforeInit}
      >
        {props.rows.map((row) => (
          <SwiperSlide key={row.id} className={styles[`${BLOCK_NAME}-slide`]}>
            <props.render {...row} />
          </SwiperSlide>
        ))}
      </RowSwiper>
      {shouldShowIconButton && (
        <IconButton
          size="small"
          name="arrow-right"
          variant="outlined"
          onClick={handleNext}
          disabled={max}
          className={styles[`${BLOCK_NAME}-right-button`]}
        />
      )}
    </div>
  )
}
