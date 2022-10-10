import * as React from 'react';
import TextInputMono from './TextInputMono';
import { FormProviderMono } from '../form/FormProviderMono';
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

  it('Error handling works on form context', async () => {
    const mockSubmit = jest.fn();
    const mockError = jest.fn();
    const requiredMessage = 'Field is required';

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
        onError={mockError}
        onSubmit={submitHandler}>

        <TextInputMono
          testID='input'
          name='textfield'
          rules={{
            required: requiredMessage
          }}
        />

      </FormProviderMono>
    );

    // Submit form
    fireEvent.press(
      getByText('Submit'),
    );

    await waitFor(() => {

      // Error shows
      getByText(requiredMessage);

      expect(mockError).toBeCalledWith(
        {
          textfield: {
            message: requiredMessage,
            type: 'required',
            ref: expect.anything()
          }
        },
        undefined
      );

      expect(mockSubmit).not.toBeCalled();
    });

  });
});

