import NetInfo from '@react-native-community/netinfo';
import { useEffect, useState } from 'react';

interface NetworkState {
  isConnected: boolean;
  isInternetReachable: boolean | null;
  type: string | null;
}

/** Tracks real-time network connectivity. */
export function useNetwork(): NetworkState {
  const [state, setState] = useState<NetworkState>({
    isConnected: true,
    isInternetReachable: null,
    type: null,
  });

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((info) => {
      setState({
        isConnected: info.isConnected ?? false,
        isInternetReachable: info.isInternetReachable,
        type: info.type,
      });
    });
    return unsubscribe;
  }, []);

  return state;
}
