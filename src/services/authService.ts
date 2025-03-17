import { auth } from "@/lib/firebase";

/**
 * Service for handling authentication-related operations
 */
export const authService = {
  /**
   * Get the current user's ID token
   * @returns Promise with the ID token or null if not authenticated
   */
  async getIdToken(): Promise<string | null> {
    const user = auth.currentUser;
    if (!user) return null;

    try {
      return await user.getIdToken();
    } catch (error) {
      console.error("Error getting ID token:", error);
      return null;
    }
  },

  /**
   * Check if the user is authenticated
   * @returns True if user is authenticated, false otherwise
   */
  isAuthenticated(): boolean {
    return !!auth.currentUser;
  },

  /**
   * Get the current user's UID
   * @returns User ID or null if not authenticated
   */
  getCurrentUserId(): string | null {
    return auth.currentUser?.uid || null;
  },
};
