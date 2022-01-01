import * as React from 'react';
import CheckboxMono from './CheckboxMono';
import { FormProviderMono } from '../form/FormProviderMono';
import {
  fireEvent,
  render,
  waitFor
} from '@testing-library/react-native';

describe('<CheckboxMono/>', () => {
  it('onPress works out of form context', async () => {
    const mockOnChange = jest.fn();
    const testID = 'checkbox';

    const {
      getByTestId,
      getByText,
      queryByTestId,
      toJSON,
      findByTestId
    } = render(
      <CheckboxMono
        onChange={mockOnChange}
        testID={testID}
      />
    );

    const input = getByTestId(testID);
    fireEvent.press(input);

    // Click away
    expect(mockOnChange).toBeCalledWith(true);
    fireEvent.press(input);
    expect(mockOnChange).toBeCalledWith(false);
    fireEvent.press(input);
    expect(mockOnChange).toBeCalledWith(true);

  });

  it('Error handling works on form context', async () => {
    const mockSubmit = jest.fn();
    const mockOnChange = jest.fn();
    const testID = 'checkbox';
    const nameField = 'checkbox-name';

    const submitHandler = (formStuff) => {
      mockSubmit(formStuff);
    };

    const {
      getByTestId,
      getByText,
    } = render(
      <FormProviderMono
        submitButtonText='Submit'
        onSubmit={submitHandler}>

        <CheckboxMono
          onChange={mockOnChange}
          testID={testID}
          name={nameField}
        />

      </FormProviderMono>
    );

    const input = getByTestId(testID);
    fireEvent.press(input);

    // Click away
    expect(mockOnChange).toBeCalledWith(true);
    fireEvent.press(input);
    expect(mockOnChange).toBeCalledWith(false);
    fireEvent.press(input);
    expect(mockOnChange).toBeCalledWith(true);

    jest.clearAllMocks();

    // Submit form
    fireEvent.press(
      getByText('Submit'),
    );

    await waitFor(() => {
      expect(mockSubmit).toBeCalledWith({
        [nameField]: true
      });
    });

  });

  it('Should set initial checked value on form', async () => {
    const mockSubmit = jest.fn();
    const mockOnChange = jest.fn();
    const testID = 'checkbox';
    const nameField = 'checkbox-name';

    const submitHandler = (formStuff) => {
      mockSubmit(formStuff);
    };

    const {
      getByTestId,
      getByText,
    } = render(
      <FormProviderMono
        submitButtonText='Submit'
        onSubmit={submitHandler}>

        <CheckboxMono
          onChange={mockOnChange}
          testID={testID}
          name={nameField}
          checked={true}
        />

      </FormProviderMono>
    );

    // Submit form
    fireEvent.press(
      getByText('Submit'),
    );

    await waitFor(() => {
      expect(mockSubmit).toBeCalledWith({
        [nameField]: true
      });
    });

  });

  it('Should set default values on form', async () => {
    const mockSubmit = jest.fn();
    const mockOnChange = jest.fn();
    const testID = 'checkbox';
    const nameField = 'checkbox-name';

    const submitHandler = (formStuff) => {
      mockSubmit(formStuff);
    };

    const defaultValues = {
      [nameField]: true
    };

    const {
      getByTestId,
      getByText,
    } = render(
      <FormProviderMono
        defaultValues={defaultValues}
        submitButtonText='Submit'
        onSubmit={submitHandler}>

        <CheckboxMono
          onChange={mockOnChange}
          testID={testID}
          name={nameField}
        />

      </FormProviderMono>
    );

    // Submit form
    fireEvent.press(
      getByText('Submit'),
    );

    await waitFor(() => {
      expect(mockSubmit).toBeCalledWith({
        [nameField]: true
      });
    });

  });
});

