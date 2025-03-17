import { apiService } from "./apiService";
import { storageService } from "./storageService";
import { Thought, ThoughtFolder } from "./models";
import { authService } from "./authService";
import { API_URL } from "@/lib/firebase";

/**
 * Service for handling thoughts-related operations
 */
export const thoughtService = {
  // Get all thoughts for the current user
  async getThoughts(): Promise<Thought[]> {
    try {
      if (!authService.isAuthenticated()) {
        throw new Error("User not authenticated");
      }

      const data = await apiService.get<{ thoughts: Thought[] }>("");
      return data.thoughts || [];
    } catch (error) {
      console.error("Error fetching thoughts:", error);
      throw error;
    }
  },

  // Create a new thought
  async createThought(thoughtData: Partial<Thought>): Promise<Thought> {
    try {
      if (!authService.isAuthenticated()) {
        throw new Error("User not authenticated");
      }

      const result = await apiService.post<
        Partial<Thought>,
        { thought: Thought }
      >("", thoughtData);
      return result.thought;
    } catch (error) {
      console.error("Error creating thought:", error);
      throw error;
    }
  },

  // Update a thought
  async updateThought(
    thoughtData: Partial<Thought> & { id: string },
  ): Promise<Thought> {
    try {
      if (!authService.isAuthenticated()) {
        throw new Error("User not authenticated");
      }

      const result = await apiService.put<
        Partial<Thought> & { id: string },
        { thought: Thought }
      >("", thoughtData);
      return result.thought;
    } catch (error) {
      console.error("Error updating thought:", error);
      throw error;
    }
  },

  // Delete a thought
  async deleteThought(id: string): Promise<boolean> {
    try {
      if (!authService.isAuthenticated()) {
        throw new Error("User not authenticated");
      }

      await apiService.delete<{ id: string }, { deleted: boolean }>("", { id });
      return true;
    } catch (error) {
      console.error("Error deleting thought:", error);
      throw error;
    }
  },

  // Get all folders for the current user
  async getFolders(): Promise<ThoughtFolder[]> {
    try {
      if (!authService.isAuthenticated()) {
        // Fallback to localStorage if not authenticated
        return storageService.get<ThoughtFolder[]>("folders", []);
      }

      const response = await apiService.get<{ folders: ThoughtFolder[] }>(
        `${API_URL.replace("/thoughts", "/folders")}`,
      );
      return response.folders || [];
    } catch (error) {
      console.error("Error fetching folders:", error);
      // Fallback to localStorage
      return storageService.get<ThoughtFolder[]>("folders", []);
    }
  },

  // Create a new folder
  async createFolder(
    folderData: Partial<ThoughtFolder>,
  ): Promise<ThoughtFolder> {
    try {
      if (!authService.isAuthenticated()) {
        // Fallback to localStorage if not authenticated
        const folder: ThoughtFolder = {
          id: Date.now().toString(),
          name: folderData.name || "New Folder",
          timestamp: new Date().toISOString(),
        };

        const folders = storageService.get<ThoughtFolder[]>("folders", []);
        folders.push(folder);
        storageService.set("folders", folders);

        return folder;
      }

      const result = await apiService.post<
        Partial<ThoughtFolder>,
        { folder: ThoughtFolder }
      >(`${API_URL.replace("/thoughts", "/folders")}`, folderData);
      return result.folder;
    } catch (error) {
      console.error("Error creating folder:", error);
      // Fallback to localStorage
      const folder: ThoughtFolder = {
        id: Date.now().toString(),
        name: folderData.name || "New Folder",
        timestamp: new Date().toISOString(),
      };

      const folders = storageService.get<ThoughtFolder[]>("folders", []);
      folders.push(folder);
      storageService.set("folders", folders);

      return folder;
    }
  },

  // Update a folder
  async updateFolder(
    folderData: Partial<ThoughtFolder> & { id: string },
  ): Promise<ThoughtFolder> {
    try {
      if (!authService.isAuthenticated()) {
        // Fallback to localStorage if not authenticated
        const folders = storageService.get<ThoughtFolder[]>("folders", []);
        const updatedFolders = folders.map((f) =>
          f.id === folderData.id ? { ...f, ...folderData } : f,
        );

        storageService.set("folders", updatedFolders);
        return updatedFolders.find(
          (f) => f.id === folderData.id,
        ) as ThoughtFolder;
      }

      const result = await apiService.put<
        Partial<ThoughtFolder> & { id: string },
        { folder: ThoughtFolder }
      >(`${API_URL.replace("/thoughts", "/folders")}`, folderData);
      return result.folder;
    } catch (error) {
      console.error("Error updating folder:", error);
      // Fallback to localStorage
      const folders = storageService.get<ThoughtFolder[]>("folders", []);
      const updatedFolders = folders.map((f) =>
        f.id === folderData.id ? { ...f, ...folderData } : f,
      );

      storageService.set("folders", updatedFolders);
      return updatedFolders.find(
        (f) => f.id === folderData.id,
      ) as ThoughtFolder;
    }
  },

  // Delete a folder
  async deleteFolder(id: string): Promise<boolean> {
    try {
      if (!authService.isAuthenticated()) {
        // Fallback to localStorage if not authenticated
        const folders = storageService.get<ThoughtFolder[]>("folders", []);
        const updatedFolders = folders.filter((f) => f.id !== id);
        storageService.set("folders", updatedFolders);

        return true;
      }

      await apiService.delete<{ id: string }, { deleted: boolean }>(
        `${API_URL.replace("/thoughts", "/folders")}`,
        { id },
      );
      return true;
    } catch (error) {
      console.error("Error deleting folder:", error);
      // Fallback to localStorage
      const folders = storageService.get<ThoughtFolder[]>("folders", []);
      const updatedFolders = folders.filter((f) => f.id !== id);
      storageService.set("folders", updatedFolders);

      return true;
    }
  },
};

// Re-export these types for backward compatibility
export type { Thought, ThoughtFolder };
