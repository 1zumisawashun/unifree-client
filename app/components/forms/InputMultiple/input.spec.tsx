import { render, screen } from '@/__tests__/utilities/test-utils'
import { InputCheckbox } from '@/components/forms/InputCheckbox'
import { InputMultiple } from '@/components/forms/InputMultiple'
import { InputRadio } from '@/components/forms/InputRadio'

const options = [
  { value: 1, label: 'category1' },
  { value: 2, label: 'category2' },
  { value: 3, label: 'category3' }
]

// hiddenになっているからcheckboxが隠されているためgetRoleBy出来なさそう
/** @see https://testing-library.com/docs/queries/bylabeltext/ */
describe('InputMultipleの単体テスト', () => {
  it('InputCheckboxをレンダーする', async () => {
    // Arrange
    render(
      <InputMultiple
        rows={options}
        render={(option) => (
          <InputCheckbox value={option.value}>{option.label}</InputCheckbox>
        )}
      />
    )
    const category1 = screen.getByLabelText('category1')
    // Act

    // Assert
    expect(category1).not.toBeChecked()
  })

  it('InputCheckboxをクリックする', async () => {
    // Arrange
    const { user } = render(
      <InputMultiple
        rows={options}
        render={(option) => (
          <InputCheckbox value={option.value}>{option.label}</InputCheckbox>
        )}
      />
    )
    const category1 = screen.getByLabelText('category1')
    // Act
    await user.click(category1)
    // Assert
    expect(category1).toBeChecked()
  })

  it('InputCheckboxを複数クリックする', async () => {
    // Arrange
    const { user } = render(
      <InputMultiple
        rows={options}
        render={(option) => (
          <InputCheckbox value={option.value}>{option.label}</InputCheckbox>
        )}
      />
    )
    const category1 = screen.getByLabelText('category1')
    const category2 = screen.getByLabelText('category2')
    // Act
    await user.click(category1)
    await user.click(category2)
    // Assert
    expect(category1).toBeChecked()
    expect(category2).toBeChecked()
  })

  it('InputRadioをレンダーする', async () => {
    // Arrange
    render(
      <InputMultiple
        rows={options}
        render={(option) => (
          <InputRadio value={option.value}>{option.label}</InputRadio>
        )}
      />
    )
    const category1 = screen.getByLabelText('category1')
    // Act

    // Assert
    expect(category1).not.toBeChecked()
  })

  it('InputRadioをクリックする', async () => {
    // Arrange
    const { user } = render(
      <InputMultiple
        rows={options}
        render={(option) => (
          <InputRadio value={option.value}>{option.label}</InputRadio>
        )}
      />
    )
    const category1 = screen.getByLabelText('category1')
    // Act
    await user.click(category1)
    // Assert
    expect(category1).toBeChecked()
  })

  it('InputRadioを複数クリックする', async () => {
    // Arrange
    const { user } = render(
      <InputMultiple
        rows={options}
        render={(option) => (
          <InputRadio value={option.value}>{option.label}</InputRadio>
        )}
      />
    )
    const category1 = screen.getByLabelText('category1')
    const category2 = screen.getByLabelText('category2')
    // Act
    await user.click(category1)
    await user.click(category2)
    // Assert
    expect(category1).not.toBeChecked()
    expect(category2).toBeChecked()
  })
})
