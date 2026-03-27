import { createClient } from '@supabase/supabase-js';
import * as SecureStore from 'expo-secure-store';

// These are populated via environment variables — see .env.example
const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL ?? '';
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? '';

/**
 * Supabase client using expo-secure-store for session persistence.
 * Import this singleton wherever you need DB access or auth.
 *
 * @example
 * import { supabase } from '@tbc/services';
 * const { data, error } = await supabase.from('orders').select('*');
 */
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: {
      async getItem(key: string) {
        return SecureStore.getItemAsync(key);
      },
      async setItem(key: string, value: string) {
        await SecureStore.setItemAsync(key, value);
      },
      async removeItem(key: string) {
        await SecureStore.deleteItemAsync(key);
      },
    },
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
