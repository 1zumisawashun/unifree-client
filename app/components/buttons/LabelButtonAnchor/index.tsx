import { UnstyledButtonAnchor } from '@/components/buttons/UnstyledButtonAnchor'
import { Label, LabelProps } from '@/components/elements/Label'
import { ComponentProps, ElementRef, forwardRef } from 'react'

type Props = ComponentProps<typeof UnstyledButtonAnchor> &
  Omit<LabelProps, 'children'>

type Ref = ElementRef<'a'>

export const LabelButtonAnchor = forwardRef<Ref, Props>(
  ({ children, theme = 'primary', ...props }, ref) => {
    return (
      <UnstyledButtonAnchor {...props} ref={ref}>
        <Label theme={theme}>{children}</Label>
      </UnstyledButtonAnchor>
    )
  }
)

LabelButtonAnchor.displayName = 'LabelButtonAnchor'
