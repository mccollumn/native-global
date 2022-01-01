import { StyleSheet } from 'react-native';
import { GLOBAL } from '../theme';
import { useTheme } from 'react-native-paper';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      height: '100%'
    }
  });
};
