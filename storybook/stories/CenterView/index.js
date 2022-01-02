import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from '../../../theme';

export default function CenterView({
  children,
  styles = {}
}) {
  return (
    <PaperProvider theme={theme}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          margin: 24,
          height: '100%',
          ...styles
        }}>

        <View style={{
          width: '100%',
          height: '100%',
        }}>

          {children}

        </View>

      </View>
    </PaperProvider>
  );
}

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};
