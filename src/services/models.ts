/**
 * Thought interface for representing a thought record
 */
export interface Thought {
  id: string;
  text: string;
  timestamp: string;
  section: "ideas" | "done";
  folder?: string;
  updates?: { text: string; timestamp: string }[];
  user_id?: string;
}

/**
 * ThoughtFolder interface for representing a folder record
 */
export interface ThoughtFolder {
  id: string;
  name: string;
  timestamp: string;
  user_id?: string;
}
