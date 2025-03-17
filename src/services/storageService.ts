/**
 * Service for handling local storage operations
 */
export const storageService = {
  /**
   * Get an item from localStorage
   * @param key The storage key
   * @param defaultValue The default value if key doesn't exist
   * @returns The stored value or defaultValue
   */
  get<T>(key: string, defaultValue: T): T {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error getting item ${key} from localStorage:`, error);
      return defaultValue;
    }
  },

  /**
   * Set an item in localStorage
   * @param key The storage key
   * @param value The value to store
   */
  set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting item ${key} in localStorage:`, error);
    }
  },

  /**
   * Remove an item from localStorage
   * @param key The storage key
   */
  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item ${key} from localStorage:`, error);
    }
  },
};
