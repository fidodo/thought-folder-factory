
import { useState, useEffect, useCallback, useRef } from "react";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { toast } from "@/hooks/use-toast";
import { 
  FolderPlus, 
  LightbulbIcon, 
  CheckCircle2Icon, 
  MoreHorizontal, 
  Edit, 
  Trash,
  Folder
} from "lucide-react";
import { auth } from "@/lib/firebase";
import { thoughtService } from "@/services/thoughtService";
import { Thought, ThoughtFolder } from "@/services/models"; // Updated import path

import ThoughtInput from "./ThoughtInput";
import SortableItem from "./SortableItem";
import FolderItem from "./FolderItem";

const ThoughtsManager = () => {
  // State variables
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [folders, setFolders] = useState<ThoughtFolder[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedText, setEditedText] = useState("");
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [showNewFolderInput, setShowNewFolderInput] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const thoughtInputRef = useRef<HTMLTextAreaElement>(null);

  // Filter thoughts based on section
  const ideas = thoughts.filter(thought => thought.section === "ideas" && 
    (selectedFolder === null || thought.folder === selectedFolder));
  const done = thoughts.filter(thought => thought.section === "done" && 
    (selectedFolder === null || thought.folder === selectedFolder));
  
  // Count total thoughts to determine UI state
  const totalThoughts = thoughts.length;

  // Check authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(!!auth.currentUser);
  
  // Watch for auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(!!user);
      if (user) {
        loadThoughtData();
      } else {
        // Clear thoughts when signed out
        setThoughts([]);
        setFolders([]);
      }
    });
    
    return () => unsubscribe();
  }, []);
  
  // Load thoughts data from API
  const loadThoughtData = useCallback(async () => {
    if (!isAuthenticated) return;
    
    setIsLoading(true);
    setErrorMessage("");

    try {
      // Fetch thoughts from API
      const fetchedThoughts = await thoughtService.getThoughts();
      setThoughts(fetchedThoughts);
      
      // Fetch folders (currently from localStorage as a fallback)
      const fetchedFolders = await thoughtService.getFolders();
      setFolders(fetchedFolders);
    } catch (error) {
      console.error("Error loading thoughts:", error);
      setErrorMessage("Failed to load your thoughts.");
      toast({
        title: "Error loading thoughts",
        description: "Please try refreshing the page.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [isAuthenticated]);

  // Load data on component mount and when auth state changes
  useEffect(() => {
    if (isAuthenticated) {
      loadThoughtData();
    }
  }, [loadThoughtData, isAuthenticated]);

  // Helper to capitalize first letter
  const capitalizeFirstLetter = (text: string) => {
    if (!text.trim()) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  // Add new thought
  const addThought = async (text: string, folderId?: string) => {
    if (!text.trim() || !isAuthenticated) return;

    setIsLoading(true);
    const capitalizedText = capitalizeFirstLetter(text);
    const timestamp = new Date().toISOString();
    
    try {
      const newThought = await thoughtService.createThought({
        text: capitalizedText,
        timestamp,
        section: "ideas",
        ...(folderId ? { folder: folderId } : {})
      });

      setThoughts(prev => [...prev, newThought]);
      
      // Focus back on input after adding
      if (thoughtInputRef.current) {
        thoughtInputRef.current.focus();
      }
      
      toast({
        title: "Thought added",
        description: "Your thought has been saved.",
      });
    } catch (error) {
      console.error("Error adding thought:", error);
      toast({
        title: "Error adding thought",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Add thought to folder
  const addThoughtToFolder = (folderId: string) => {
    // Focus on input and prompt user to add thought to this folder
    setSelectedFolder(folderId);
    if (thoughtInputRef.current) {
      thoughtInputRef.current.focus();
    }
    
    const folder = folders.find(f => f.id === folderId);
    if (folder) {
      toast({
        title: `Adding to "${folder.name}"`,
        description: "Type your thought and press Add",
      });
    }
  };

  // Add update to a thought
  const addUpdate = async (thoughtId: string, updateText: string) => {
    if (!updateText.trim() || !isAuthenticated) return;

    setIsLoading(true);
    const timestamp = new Date().toISOString();
    
    try {
      const thoughtToUpdate = thoughts.find(t => t.id === thoughtId);
      if (!thoughtToUpdate) return;
      
      const updates = thoughtToUpdate.updates || [];
      const updatedThought = await thoughtService.updateThought({
        id: thoughtId,
        updates: [...updates, { text: updateText, timestamp }]
      });
      
      setThoughts(prev => prev.map(t => 
        t.id === thoughtId ? updatedThought : t
      ));
      
      toast({
        title: "Update added",
        description: "Your update has been saved.",
      });
    } catch (error) {
      console.error("Error adding update:", error);
      toast({
        title: "Error adding update",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Move thought to done section
  const moveToDone = async (thought: Thought) => {
    if (!isAuthenticated) return;
    
    setIsLoading(true);
    try {
      const updatedThought = await thoughtService.updateThought({
        id: thought.id,
        section: "done"
      });
      
      setThoughts(prev => prev.map(t => 
        t.id === thought.id ? updatedThought : t
      ));
      
      toast({
        title: "Moved to Done",
        description: "Your thought has been completed.",
      });
    } catch (error) {
      console.error("Error moving thought to done:", error);
      toast({
        title: "Error moving thought",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Move thought back to ideas section
  const moveToIdeas = async (thought: Thought) => {
    if (!isAuthenticated) return;
    
    setIsLoading(true);
    try {
      const updatedThought = await thoughtService.updateThought({
        id: thought.id,
        section: "ideas"
      });
      
      setThoughts(prev => prev.map(t => 
        t.id === thought.id ? updatedThought : t
      ));
      
      toast({
        title: "Moved to Ideas",
        description: "Your thought has been moved back to ideas.",
      });
    } catch (error) {
      console.error("Error moving thought to ideas:", error);
      toast({
        title: "Error moving thought",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Delete thought
  const deleteThought = async (thoughtToDelete: Thought) => {
    if (!isAuthenticated) return;
    
    setIsLoading(true);
    try {
      await thoughtService.deleteThought(thoughtToDelete.id);
      
      setThoughts(prev => prev.filter(t => t.id !== thoughtToDelete.id));
      
      toast({
        title: "Thought deleted",
        description: "Your thought has been permanently removed.",
      });
    } catch (error) {
      console.error("Error deleting thought:", error);
      toast({
        title: "Error deleting thought",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle thought editing
  const handleEditClick = (thought: Thought) => {
    setEditingId(thought.id);
    setEditedText(thought.text);
    setMenuOpenId(null);
  };

  // Save edited thought
  const handleSaveEdit = async (thought: Thought) => {
    if (!editedText.trim() || !isAuthenticated) return;

    setIsLoading(true);
    try {
      const updatedThought = await thoughtService.updateThought({
        id: thought.id,
        text: editedText
      });
      
      setThoughts(prev => prev.map(t => 
        t.id === thought.id ? updatedThought : t
      ));
      
      setEditingId(null);
      
      toast({
        title: "Thought updated",
        description: "Your changes have been saved.",
      });
    } catch (error) {
      console.error("Error updating thought:", error);
      toast({
        title: "Error updating thought",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Add new folder
  const addFolder = async () => {
    if (!newFolderName.trim() || !isAuthenticated) return;
    
    setIsLoading(true);
    try {
      const newFolder = await thoughtService.createFolder({
        name: newFolderName
      });
      
      setFolders(prev => [...prev, newFolder]);
      setNewFolderName("");
      setShowNewFolderInput(false);
      
      // Auto-select the new folder
      setSelectedFolder(newFolder.id);
      
      toast({
        title: "Folder created",
        description: `"${newFolderName}" folder has been created.`,
      });
    } catch (error) {
      console.error("Error creating folder:", error);
      toast({
        title: "Error creating folder",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Rename folder
  const renameFolder = async (folderId: string, newName: string) => {
    if (!newName.trim() || !isAuthenticated) return;
    
    setIsLoading(true);
    try {
      const updatedFolder = await thoughtService.updateFolder({
        id: folderId,
        name: newName
      });
      
      setFolders(prev => prev.map(folder => 
        folder.id === folderId ? updatedFolder : folder
      ));
      
      toast({
        title: "Folder renamed",
        description: "Your folder has been renamed.",
      });
    } catch (error) {
      console.error("Error renaming folder:", error);
      toast({
        title: "Error renaming folder",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Delete folder
  const deleteFolder = async (folderId: string) => {
    if (!isAuthenticated) return;
    
    // First, check if the folder contains thoughts
    const folderThoughts = thoughts.filter(t => t.folder === folderId);
    
    if (folderThoughts.length > 0) {
      // Confirm with the user
      if (!window.confirm(`This folder contains ${folderThoughts.length} thoughts. Delete anyway? (Thoughts will be moved out of the folder)`)) {
        return;
      }
      
      setIsLoading(true);
      try {
        // Move thoughts out of the folder
        const updatePromises = folderThoughts.map(thought => 
          thoughtService.updateThought({
            id: thought.id,
            folder: undefined
          })
        );
        
        const updatedThoughts = await Promise.all(updatePromises);
        
        // Update local thoughts state
        setThoughts(prev => prev.map(thought => {
          const updated = updatedThoughts.find(ut => ut.id === thought.id);
          return updated || thought;
        }));
        
        // Now delete the folder
        await thoughtService.deleteFolder(folderId);
        
        // Update local folders state
        setFolders(prev => prev.filter(folder => folder.id !== folderId));
        
        // If the deleted folder was selected, clear selection
        if (selectedFolder === folderId) {
          setSelectedFolder(null);
        }
        
        toast({
          title: "Folder deleted",
          description: "Your folder has been removed.",
        });
      } catch (error) {
        console.error("Error deleting folder:", error);
        toast({
          title: "Error deleting folder",
          description: "Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      // No thoughts in the folder, just delete it
      setIsLoading(true);
      try {
        await thoughtService.deleteFolder(folderId);
        
        setFolders(prev => prev.filter(folder => folder.id !== folderId));
        
        if (selectedFolder === folderId) {
          setSelectedFolder(null);
        }
        
        toast({
          title: "Folder deleted",
          description: "Your folder has been removed.",
        });
      } catch (error) {
        console.error("Error deleting folder:", error);
        toast({
          title: "Error deleting folder",
          description: "Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Handle drag end for thoughts reordering
  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id.toString();
    const overId = over.id.toString();
    
    if (activeId === overId) return;

    const activeThought = thoughts.find(t => t.id === activeId);
    const overThought = thoughts.find(t => t.id === overId);
    
    if (!activeThought || !overThought) return;
    
    // Only allow reordering within the same section
    if (activeThought.section === overThought.section) {
      const items = activeThought.section === "ideas" ? ideas : done;
      const oldIndex = items.findIndex(t => t.id === activeId);
      const newIndex = items.findIndex(t => t.id === overId);
      
      const reordered = arrayMove(items, oldIndex, newIndex);
      
      // Update the main thoughts array while preserving other entries
      const updatedThoughts = [
        ...thoughts.filter(t => t.section !== activeThought.section),
        ...reordered
      ];
      
      setThoughts(updatedThoughts);
    }
  };

  // Select all thoughts (clear folder filter)
  const handleSelectAllThoughts = () => {
    setSelectedFolder(null);
  };

  // If not authenticated, only show the thought input
  if (!isAuthenticated) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center py-16 text-center slide-in-up">
          <div className="text-5xl mb-6 animate-float text-idea">
            <LightbulbIcon size={64} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-bold mb-4">Capture Your Thoughts</h1>
          <p className="text-muted-foreground mb-8 max-w-md">
            Sign in to start saving your thoughts and ideas.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Initial empty state */}
      {totalThoughts === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center slide-in-up">
          <div className="text-5xl mb-6 animate-float text-idea">
            <LightbulbIcon size={64} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-bold mb-4">Capture Your Thoughts</h1>
          <p className="text-muted-foreground mb-8 max-w-md">
            Start by adding your first thought below. Ideas can be organized, marked as done, and grouped into folders.
          </p>
        </div>
      )}
      
      {/* Main thought input */}
      <div className={`w-full max-w-2xl mx-auto ${totalThoughts === 0 ? 'slide-in-up delay-200' : ''}`}>
        <ThoughtInput 
          onAddThought={(text) => addThought(text, selectedFolder || undefined)}
          inputRef={thoughtInputRef}
          placeholder={selectedFolder 
            ? `Add thought to selected folder...` 
            : "What's on your mind?"}
        />
      </div>
      
      {/* Only show sections if there are thoughts */}
      {totalThoughts > 0 && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar with folders */}
          <div className="md:col-span-1 fade-in">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-medium text-lg">Folders</h3>
              <button
                onClick={() => setShowNewFolderInput(true)}
                className="p-1.5 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                title="Add new folder"
              >
                <FolderPlus size={18} />
              </button>
            </div>
            
            {/* New folder input */}
            {showNewFolderInput && (
              <div className="mb-3 flex items-center">
                <input
                  type="text"
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                  placeholder="Folder name"
                  className="flex-1 rounded-l-md border border-r-0 border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter") addFolder();
                    if (e.key === "Escape") setShowNewFolderInput(false);
                  }}
                />
                <button
                  onClick={addFolder}
                  className="rounded-r-md bg-folder px-3 py-1.5 text-sm font-medium text-white hover:bg-folder/90"
                >
                  Add
                </button>
              </div>
            )}
            
            {/* All thoughts option */}
            <div 
              className={`flex items-center py-2 px-3 rounded-lg cursor-pointer transition-all duration-200 mb-1
                ${selectedFolder === null ? 'bg-gray-100 text-foreground' : 'hover:bg-gray-100'}`}
              onClick={handleSelectAllThoughts}
            >
              <LightbulbIcon size={18} className="mr-2 text-gray-500" />
              <span className="flex-1 text-sm font-medium">All thoughts</span>
              <span className="text-xs text-gray-500 bg-gray-200 rounded-full px-2 py-0.5">
                {thoughts.length}
              </span>
            </div>
            
            {/* Folders list */}
            {folders.length > 0 ? (
              <div className="space-y-1 mt-2">
                {folders.map(folder => (
                  <FolderItem
                    key={folder.id}
                    id={folder.id}
                    name={folder.name}
                    thoughts={thoughts.filter(t => t.folder === folder.id)}
                    onAddThought={addThoughtToFolder}
                    onRenameFolder={renameFolder}
                    onDeleteFolder={deleteFolder}
                    isActive={selectedFolder === folder.id}
                    onSelect={() => setSelectedFolder(folder.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-4 text-muted-foreground text-sm italic">
                No folders yet
              </div>
            )}
          </div>
          
          {/* Main content with thoughts */}
          <div className="md:col-span-3 fade-in delay-100">
            {/* Section title with folder indicator */}
            <div className="flex items-center mb-5">
              {selectedFolder && (
                <div className="flex items-center mr-2 bg-folder/10 text-folder px-2 py-1 rounded-md text-sm">
                  <Folder size={16} className="mr-1" />
                  {folders.find(f => f.id === selectedFolder)?.name || "Folder"}
                </div>
              )}
              <h2 className="font-medium text-lg">
                {selectedFolder 
                  ? `Thoughts in folder` 
                  : "All thoughts"
                }
              </h2>
            </div>
            
            {/* Ideas Section */}
            <div className="mb-8 fade-in delay-200">
              <h3 className="flex items-center mb-4 font-medium">
                <div className="bg-idea/10 text-idea py-1 px-3 rounded-md flex items-center mr-2">
                  <LightbulbIcon size={16} className="mr-1.5" />
                  <span>Ideas</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {ideas.length} {ideas.length === 1 ? 'thought' : 'thoughts'}
                </span>
              </h3>
              
              {ideas.length > 0 ? (
                <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
                  <SortableContext
                    items={ideas.map(idea => idea.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    {ideas.map((idea) => (
                      <div key={idea.id} className="flex items-start gap-2 w-full">
                        {editingId === idea.id ? (
                          <div className="w-full mb-3">
                            <textarea
                              value={editedText}
                              onChange={(e) => setEditedText(e.target.value)}
                              onBlur={() => handleSaveEdit(idea)}
                              className="border p-3 rounded-xl w-full text-gray-800 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                              autoFocus
                            />
                          </div>
                        ) : (
                          <SortableItem
                            id={idea.id}
                            value={idea.text}
                            timestamp={idea.timestamp}
                            onDoubleClick={() => moveToDone(idea)}
                            section="ideas"
                            folder={idea.folder && folders.find(f => f.id === idea.folder)?.name}
                            onUpdate={(text) => addUpdate(idea.id, text)}
                            updates={idea.updates}
                          />
                        )}
                        
                        {!editingId && (
                          <div className="relative mt-3">
                            <button
                              onClick={() => setMenuOpenId(menuOpenId === idea.id ? null : idea.id)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <MoreHorizontal size={18} />
                            </button>
                            
                            {menuOpenId === idea.id && (
                              <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                <button
                                  onClick={() => handleEditClick(idea)}
                                  className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  <Edit size={16} className="mr-2" />
                                  Edit
                                </button>
                                <button
                                  onClick={() => moveToDone(idea)}
                                  className="w-full flex items-center px-4 py-2 text-sm text-done hover:bg-gray-100"
                                >
                                  <CheckCircle2Icon size={16} className="mr-2" />
                                  Mark done
                                </button>
                                <button
                                  onClick={() => deleteThought(idea)}
                                  className="w-full flex items-center px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                                >
                                  <Trash size={16} className="mr-2" />
                                  Delete
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </SortableContext>
                </DndContext>
              ) : (
                <div className="text-center py-6 text-muted-foreground text-sm italic border border-dashed rounded-xl">
                  No ideas in this section yet
                </div>
              )}
            </div>
            
            {/* Done Section */}
            <div className="fade-in delay-300">
              <h3 className="flex items-center mb-4 font-medium">
                <div className="bg-done/10 text-done py-1 px-3 rounded-md flex items-center mr-2">
                  <CheckCircle2Icon size={16} className="mr-1.5" />
                  <span>Done</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {done.length} {done.length === 1 ? 'thought' : 'thoughts'}
                </span>
              </h3>
              
              {done.length > 0 ? (
                <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
                  <SortableContext
                    items={done.map(item => item.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    {done.map((idea) => (
                      <div key={idea.id} className="flex items-start gap-2 w-full">
                        <SortableItem
                          id={idea.id}
                          value={idea.text}
                          timestamp={idea.timestamp}
                          onDoubleClick={() => moveToIdeas(idea)}
                          section="done"
                          folder={idea.folder && folders.find(f => f.id === idea.folder)?.name}
                        />
                        
                        <div className="relative mt-3">
                          <button
                            onClick={() => setMenuOpenId(menuOpenId === idea.id ? null : idea.id)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <MoreHorizontal size={18} />
                          </button>
                          
                          {menuOpenId === idea.id && (
                            <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                              <button
                                onClick={() => moveToIdeas(idea)}
                                className="w-full flex items-center px-4 py-2 text-sm text-idea hover:bg-gray-100"
                              >
                                <LightbulbIcon size={16} className="mr-2" />
                                Move to ideas
                              </button>
                              <button
                                onClick={() => deleteThought(idea)}
                                className="w-full flex items-center px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                              >
                                <Trash size={16} className="mr-2" />
                                Delete
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </SortableContext>
                </DndContext>
              ) : (
                <div className="text-center py-6 text-muted-foreground text-sm italic border border-dashed rounded-xl">
                  No completed thoughts yet
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThoughtsManager;

