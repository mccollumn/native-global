import * as React from 'react';
import TextInputMono from './TextInputMono';
import {
  fireEvent,
  render,
  waitFor
} from '@testing-library/react-native';

describe('<TextInputMono/>', () => {
  it('onChange works out of form context', async () => {
    const mockOnChange = jest.fn();
    const userText = 'Typing in field';

    const {
      getByTestId,
      getByText,
      queryByTestId,
      toJSON,
      findByTestId
    } = render(
      <TextInputMono
        onChangeText={mockOnChange}
        testID='input'
      />
    );

    const input = getByTestId('input');
    fireEvent.changeText(input, userText);

    await waitFor(() => {
      expect(mockOnChange).toBeCalledWith(userText);
    });

  });
});

