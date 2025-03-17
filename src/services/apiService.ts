
import { authService } from "./authService";
import { API_URL } from "@/lib/firebase";

/**
 * Service for handling API requests with authentication
 */
export const apiService = {
  /**
   * Make an authenticated GET request
   * @param endpoint The API endpoint
   * @returns Promise with the response data
   */
  async get<T>(endpoint: string): Promise<T> {
    const idToken = await authService.getIdToken();
    if (!idToken) {
      throw new Error("User not authenticated");
    }

    const url = endpoint.startsWith('http') ? endpoint : `${API_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
  },

  /**
   * Make an authenticated POST request
   * @param endpoint The API endpoint
   * @param data The data to send
   * @returns Promise with the response data
   */
  async post<T, U>(endpoint: string, data: T): Promise<U> {
    const idToken = await authService.getIdToken();
    if (!idToken) {
      throw new Error("User not authenticated");
    }

    const url = endpoint.startsWith('http') ? endpoint : `${API_URL}${endpoint}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
  },

  /**
   * Make an authenticated PUT request
   * @param endpoint The API endpoint
   * @param data The data to send
   * @returns Promise with the response data
   */
  async put<T, U>(endpoint: string, data: T): Promise<U> {
    const idToken = await authService.getIdToken();
    if (!idToken) {
      throw new Error("User not authenticated");
    }

    const url = endpoint.startsWith('http') ? endpoint : `${API_URL}${endpoint}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
  },

  /**
   * Make an authenticated DELETE request
   * @param endpoint The API endpoint
   * @param data The data to send
   * @returns Promise with the response data
   */
  async delete<T, U>(endpoint: string, data: T): Promise<U> {
    const idToken = await authService.getIdToken();
    if (!idToken) {
      throw new Error("User not authenticated");
    }

    const url = endpoint.startsWith('http') ? endpoint : `${API_URL}${endpoint}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
  }
};
