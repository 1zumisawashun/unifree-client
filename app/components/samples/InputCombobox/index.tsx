'use client'

import { BaseSyntheticEvent, useState } from 'react'
import styles from './styles.module.scss'

const initOptions = [
  { id: 1, value: 'test1', label: 'テスト1', selected: false },
  { id: 2, value: 'test2', label: 'テスト2', selected: false },
  { id: 3, value: 'test3', label: 'テスト3', selected: false }
]

export function InputCombobox() {
  const [inputText, setInputText] = useState('')
  const [options, setOptions] = useState(initOptions)
  const [show, setShow] = useState(false)

  const handleInputText = (e: BaseSyntheticEvent) => {
    const value = e.target.value
    setInputText(value)

    const result = options.filter((option) => option.label.includes(value))
    setOptions(result)
  }

  const handleClick = (val: string) => {
    setInputText(val)
    setShow(false)
  }

  return (
    <div>
      <label onClick={() => setShow(true)}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputText}
          className={styles['input-text']}
        />
      </label>
      {show && (
        <ul>
          {options.map((option) => (
            <li key={option.id} onClick={() => handleClick(option.label)}>
              {option.label}
              {option.selected && <span>x</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
