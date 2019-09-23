import { createContext } from 'react';
export const AppContext = createContext(
  {
    drawerWidth: 240,
    tracked: [],
    onTrackedUpdate: () => {},
    isLoading: false
  }
);
