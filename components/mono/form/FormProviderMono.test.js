import * as React from 'react';
import FormProviderMono from './FormProviderMono';
import TextInputMono from '../input/TextInputMono';
import {
  fireEvent,
  render,
  waitFor
} from '@testing-library/react-native';

describe('<FormProviderMono/>', () => {
  it('Base form submits', async () => {
    const mockOnChange = jest.fn();
    const mockSubmit = jest.fn();
    const userText = 'user text';

    const submitHandler = (formStuff) => {
      mockSubmit(formStuff);
    };

    const {
      getByTestId,
      getByText,
      queryByTestId,
      toJSON,
      findByTestId
    } = render(
      <FormProviderMono
        submitButtonText='Submit'
        onSubmit={submitHandler}>

        <TextInputMono
          testID='input'
          name='textfield'
          onChange={mockOnChange}
        />

      </FormProviderMono>
    );

    const input = getByTestId('input');
    fireEvent.changeText(input, userText);

    // Submit form
    fireEvent.press(
      getByText('Submit'),
    );

    await waitFor(() => {
      expect(mockSubmit).toBeCalledWith({
        textfield: userText
      });

      expect(mockOnChange).toBeCalledWith(
        userText
      );
    });

  });
});

