import { StyleSheet } from 'react-native';
import { GLOBAL } from '../../../theme';
import { useTheme } from 'react-native-paper';

export const useStyles = (isError: boolean) => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      marginVertical: GLOBAL.container.margin
    },
    helperText: {
      fontSize: 12,
      marginLeft: 12,
      paddingTop: 2,
      color: isError ? theme.colors.error : theme.colors.placeholder,
      position: 'absolute',
      bottom: -18
    }
  });
};
