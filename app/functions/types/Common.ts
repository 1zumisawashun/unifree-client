export type ThemeType =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'transparent'

export type VariantType =
  | 'contained'
  | 'outlined'
  | 'transparent'
  | 'card'
  | 'information'
  | 'confirmation'
  | 'error'

export type SizeType = 'x-small' | 'small' | 'medium' | 'large'

export type PositionType = 'start' | 'center' | 'end'

export type DirectionType = 'row' | 'column'

export type StatusType = 'loading' | 'disabled' | 'error'

export type WidthType = 'full' | 'half' | 'quarter' | 'auto'

export type ShapeType = 'square' | 'round'

export type ColorType = 'black' | 'grey'

export type SearchParams = { [key: string]: string | string[] | undefined }

type Position = 'top' | 'bottom' | 'right' | 'left'

export type PositionOffset<P extends Position = Position> = {
  [K in P]: number
}

export type StackPosition = `${'top' | 'bottom' | 'right' | 'left'}${
  | 'Left'
  | 'Center'
  | 'Right'}`

export const status = ['available', 'waiting', 'completed'] as const
