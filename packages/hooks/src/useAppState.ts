import { useEffect, useRef } from 'react';
import { AppState, type AppStateStatus } from 'react-native';

/**
 * Calls `onForeground` when app comes back from background.
 * Useful for refreshing data when the user returns to the app.
 */
export function useAppState(onForeground: () => void) {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const sub = AppState.addEventListener('change', (next: AppStateStatus) => {
      if (appState.current.match(/inactive|background/) && next === 'active') {
        onForeground();
      }
      appState.current = next;
    });
    return () => sub.remove();
  }, [onForeground]);
}
