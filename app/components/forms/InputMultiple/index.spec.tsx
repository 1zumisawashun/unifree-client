import { render, screen } from '@/__tests__/utilities/test-utils'
import * as stories from '@/components/forms/InputMultiple/index.stories'
import { composeStories } from '@storybook/react'

// hiddenになっているからcheckboxが隠されているためgetRoleBy出来なさそう
/** @see https://testing-library.com/docs/queries/bylabeltext/ */
describe('InputMultipleの単体テスト', () => {
  const { MultipleCheckbox, MultipleRadio } = composeStories(stories)
  it('InputCheckboxをレンダーする', async () => {
    // Arrange
    render(<MultipleCheckbox />)
    const option1 = screen.getByLabelText('option1')
    // Act

    // Assert
    expect(option1).not.toBeChecked()
  })

  it('InputCheckboxをクリックする', async () => {
    // Arrange
    const { user } = render(<MultipleCheckbox />)
    const option1 = screen.getByLabelText('option1')
    // Act
    await user.click(option1)
    // Assert
    expect(option1).toBeChecked()
  })

  it('InputCheckboxを複数クリックする', async () => {
    // Arrange
    const { user } = render(<MultipleCheckbox />)
    const option1 = screen.getByLabelText('option1')
    const option2 = screen.getByLabelText('option2')
    // Act
    await user.click(option1)
    await user.click(option2)
    // Assert
    expect(option1).toBeChecked()
    expect(option2).toBeChecked()
  })

  it('InputRadioをレンダーする', async () => {
    // Arrange
    render(<MultipleRadio />)
    const option1 = screen.getByLabelText('option1')
    // Act

    // Assert
    expect(option1).not.toBeChecked()
  })

  it('InputRadioをクリックする', async () => {
    // Arrange
    const { user } = render(<MultipleRadio />)
    const option1 = screen.getByLabelText('option1')
    // Act
    await user.click(option1)
    // Assert
    expect(option1).toBeChecked()
  })

  it('InputRadioを複数クリックする', async () => {
    // Arrange
    const { user } = render(<MultipleRadio />)
    const option1 = screen.getByLabelText('option1')
    const option2 = screen.getByLabelText('option2')
    // Act
    await user.click(option1)
    await user.click(option2)
    // Assert
    expect(option1).not.toBeChecked()
    expect(option2).toBeChecked()
  })
})
