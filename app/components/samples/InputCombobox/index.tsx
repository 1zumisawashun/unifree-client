'use client'

import { UnstyledButton } from '@/components/buttons/UnstyledButton'
import { DropDownMenu } from '@/components/elements/DropDownMenu'
import { useDisclosure } from '@/functions/hooks/useDisclosure'
import { BaseSyntheticEvent, ElementRef, useRef, useState } from 'react'
import styles from './styles.module.scss'

const initOptions = [
  { id: 1, value: 'test1', label: 'テスト1', selected: false },
  { id: 2, value: 'test2', label: 'テスト2', selected: false },
  { id: 3, value: 'test3', label: 'テスト3', selected: false }
]

const notFoundOptions = [
  {
    id: 0,
    value: 'not found',
    label: '見つかりませんでした',
    selected: false
  }
]

// MEMO:Wantedly社のコーティングテストの課題で作成したコンボボックス
export function InputCombobox() {
  const [inputText, setInputText] = useState('')
  const [options, setOptions] = useState(initOptions)

  const referenceRef = useRef<ElementRef<'input'>>(null)

  const { open, close, isOpen } = useDisclosure()

  const style = referenceRef?.current
    ? getComputedStyle(referenceRef.current)
    : null

  const handleInputText = (e: BaseSyntheticEvent) => {
    const value = e.target.value
    setInputText(value)

    if (value === '') {
      setOptions(initOptions)
    } else {
      const options = initOptions.filter((option) =>
        option.label.startsWith(value)
      )
      options.length !== 0 ? setOptions(options) : setOptions(notFoundOptions)
    }
  }

  const onFocus = () => {
    open()
    if (inputText === '') {
      setOptions(initOptions)
    } else {
      const options = initOptions.filter((option) =>
        option.label.startsWith(inputText)
      )
      options.length !== 0 ? setOptions(options) : setOptions(notFoundOptions)
    }
  }

  const handleClick = (val: string) => {
    setInputText(val)
    close()
  }

  return (
    <div>
      <label>
        <input
          type="text"
          value={inputText}
          onChange={handleInputText}
          onFocus={onFocus}
          className={styles['input-text']}
          ref={referenceRef}
        />
      </label>
      <DropDownMenu
        onClose={close}
        open={isOpen}
        referenceRef={referenceRef}
        rows={options}
        render={(option) => (
          <UnstyledButton
            className={styles['input-combobox-button']}
            key={option.id}
            onClick={() => handleClick(option.label)}
            style={{ width: style?.width }}
          >
            {option.label}
          </UnstyledButton>
        )}
      />
    </div>
  )
}
