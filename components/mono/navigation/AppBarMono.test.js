import React from 'react';
import { AppBarMono } from './AppBarMono';
import {
  fireEvent,
  render,
  waitFor
} from '@testing-library/react-native';

describe('<AppBarMono/>', () => {
  it('Should display bottom Appbar and have clickable icons', async () => {
    const mockOnPress = jest.fn();
    const bottomActions = [
      {
        id: 'LABEL',
        accessibilityLabel: 'Access Label',
        icon: 'label',
        onPress: mockOnPress
      },
      {
        id: 'MAIL',
        accessibilityLabel: 'Send Message',
        icon: 'mail',
        onPress: mockOnPress
      }
    ];

    const {
      getByTestId,
      getByText,
      queryByTestId,
      toJSON,
      findByTestId,
      getByLabelText,
      findByLabelText
    } = render(
      <AppBarMono
        actions={bottomActions}
      />
    );

    const icon = await findByLabelText(
      bottomActions[1].accessibilityLabel
    );

    fireEvent.press(
      icon
    );

    expect(mockOnPress).toBeCalledWith(
      bottomActions[1].id
    );

  });
});
