import * as React from 'react';
import FormProviderMono from './FormProviderMono';
import TextInputMono from '../TextInputMono';
import {
  fireEvent,
  render,
  waitFor
} from '@testing-library/react-native';

describe('<FormProviderMono/>', () => {
  it('Base form submits', async () => {
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
          name='textfield'/>

      </FormProviderMono>
    );

    // TODO: Add Onchange handling
    //const input = getByTestId('input');
    //fireEvent.changeText(input, userText);

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
    });

  });
});

