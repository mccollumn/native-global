import React from 'react';
import { AppLayout } from './AppLayout';
import {
  fireEvent,
  render,
  waitFor
} from '@testing-library/react-native';

describe('<AppLayout/>', () => {
  it('Should set navigation item was pressed by user', async () => {
    const mockNavigationPress = jest.fn();

    const handleNavigationSelect = (action, type) => {
      console.log('Handling action', action, type);
      mockNavigationPress(action, type);
    };

    const {
      getByTestId,
      getByText,
      queryByTestId,
      toJSON,
      findByTestId,
      getByLabelText,
      findByLabelText
    } = render(
      <AppLayout
        topActions={topActions}
        bottomActions={bottomActions}
        navigationPress={handleNavigationSelect}
        selectedAction={bottomActions[1]}
      />
    );

    const selectedAction = getByTestId(
      `${bottomActions[1].accessibilityLabel}-true`
    );

    expect(selectedAction.props.accessibilityLabel)
      .toEqual(bottomActions[1].accessibilityLabel);

    const icon = await findByLabelText(
      bottomActions[1].accessibilityLabel
    );

    fireEvent.press(
      icon
    );

    expect(mockNavigationPress).toBeCalledWith(
      bottomActions[1],
      'bottom'
    );

  });
});

const topActions = [
  {
    id: 'SEARCH',
    accessibilityLabel: 'Search',
    icon: 'magnify',
    onPress: () => { }
  },
  {
    id: 'ACCOUNT',
    accessibilityLabel: 'Account',
    icon: 'account',
    onPress: () => { },
  }
];

const bottomActions = [
  {
    id: 'LABEL',
    accessibilityLabel: 'Access Label',
    icon: 'label',
    onPress: () => { }
  },
  {
    id: 'MAIL',
    accessibilityLabel: 'Send Message',
    icon: 'mail',
    onPress: () => { },
  },
  {
    id: 'LIST',
    accessibilityLabel: 'List items',
    icon: 'format-list-bulleted',
    onPress: () => { },
  },
  {
    id: 'SETTING',
    accessibilityLabel: 'Settings',
    icon: 'cog',
    onPress: () => { },
  }
];
