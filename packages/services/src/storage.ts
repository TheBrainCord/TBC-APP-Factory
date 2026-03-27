import * as SecureStore from 'expo-secure-store';

/**
 * Typed secure key-value storage backed by expo-secure-store.
 * Use for tokens, user preferences, and small sensitive data.
 */
export const storage = {
  async get<T>(key: string): Promise<T | null> {
    const raw = await SecureStore.getItemAsync(key);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return raw as unknown as T;
    }
  },

  async set(key: string, value: unknown): Promise<void> {
    await SecureStore.setItemAsync(key, JSON.stringify(value));
  },

  async remove(key: string): Promise<void> {
    await SecureStore.deleteItemAsync(key);
  },
};
