import {
  AppBarActionProps
} from '../../components/mono/navigation/AppBarMono';

/**
 * Handle navigation display location and auth
 */
export const useNavActions = (
  actions: Array<AppBarActionProps>,
  isAuthenticated: Boolean
) => {
  const authorizedActions = actions.filter(a => {
    if (isAuthenticated) {
      return true
    }

    return a.isPublic;
  });

  const topNavActions = authorizedActions.filter(
    a => a.position === 'top'
  );

  const bottomNavActions = authorizedActions.filter(
    a => a.position === 'bottom'
  );

  const drawerNavActions = authorizedActions.filter(
    a => !['top', 'bottom'].includes(a.position || '')
  );

  return {
    topNavActions,
    bottomNavActions,
    drawerNavActions
  }

};
