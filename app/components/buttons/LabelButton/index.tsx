import { UnstyledButton } from '@/components/buttons/UnstyledButton'
import { Label, LabelProps } from '@/components/elements/Label'
import { ComponentProps, ElementRef, forwardRef } from 'react'

type Props = ComponentProps<typeof UnstyledButton> &
  Omit<LabelProps, 'children'>

type Ref = ElementRef<'button'>

export const LabelButton = forwardRef<Ref, Props>(
  ({ children, theme = 'primary', ...props }, ref) => {
    return (
      <UnstyledButton {...props} ref={ref}>
        <Label theme={theme}>{children}</Label>
      </UnstyledButton>
    )
  }
)

LabelButton.displayName = 'LabelButton'
