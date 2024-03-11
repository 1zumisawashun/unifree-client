import { icons } from '@/components/buttons/button.constant'
import {
  ShapeType,
  SizeType,
  ThemeType,
  VariantType
} from '@/functions/types/Common'

type BaseProps = {
  size?: SizeType
  variant?: VariantType
  theme?: ThemeType
  shape?: ShapeType
}

export type BaseButtonProps = BaseProps & {
  loading?: boolean
  prefix?: any
  suffix?: any
}

type IconNames = keyof typeof icons

export type BaseIconButtonProps = BaseProps & {
  name?: IconNames
}
