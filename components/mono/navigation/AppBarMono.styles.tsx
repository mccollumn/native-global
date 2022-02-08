import { StyleSheet } from 'react-native';
import { GLOBAL } from '../../../theme';
import { useTheme } from 'react-native-paper';

export const useStyles = ({
  color = '',
  style = {}
}: any) => {
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
      ...style
    },
    topActions: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      flexGrow: 1,
    },
    bottomActions: {
      flexDirection: 'row',
      justifyContent: 'center',
      flexGrow: 1,
      flex: 1,
      alignContent: 'space-between',
      marginHorizontal: '25%'
    },
    bottomActionIcon: {
      flex: 1,
      ...style
    },
    topActionIcon: {
      ...style
    }
  });
};
