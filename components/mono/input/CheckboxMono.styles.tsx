import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

export const useStyles = (isError: any) => {
  const theme = useTheme();

  return StyleSheet.create({
    label: {
      color: isError ? theme.colors.error : theme.colors.placeholder,
    }
  });
};
