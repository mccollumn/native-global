import { StyleSheet } from 'react-native';
import { GLOBAL } from '../../../theme';
import { useTheme } from 'react-native-paper';

export const useStyles = (
  color: string,
  style={}
) => {
  const theme: any = useTheme();

  return StyleSheet.create({
    container: {
      
    },
    bottom: {
      backgroundColor: theme.colors[color],
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      ...style
    },
    top: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      ...style
    }

  });
};
