import { StyleSheet } from 'react-native';
import { GLOBAL } from '../../../theme';
import { useTheme } from 'react-native-paper';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {

    },
    bottom: {
      backgroundColor: theme.colors.primary,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center'
    },
    top: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
    }
    
  });
};
