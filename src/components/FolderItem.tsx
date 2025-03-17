import { useState } from "react";
import {
  Folder,
  ChevronDown,
  ChevronRight,
  FolderPlus,
  MoreVertical,
  Edit,
  Trash2,
} from "lucide-react";

interface FolderItemProps {
  id: string;
  name: string;
  thoughts: any[];
  onAddThought: (folderId: string) => void;
  onRenameFolder: (folderId: string, newName: string) => void;
  onDeleteFolder: (folderId: string) => void;
  isActive: boolean;
  onSelect: () => void;
}

const FolderItem = ({
  id,
  name,
  thoughts,
  onAddThought,
  onRenameFolder,
  onDeleteFolder,
  isActive,
  onSelect,
}: FolderItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleRename = () => {
    if (editedName.trim() && editedName !== name) {
      onRenameFolder(id, editedName);
    }
    setIsEditing(false);
    setShowMenu(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleRename();
    } else if (e.key === "Escape") {
      setIsEditing(false);
      setEditedName(name);
    }
  };

  const handleAddThought = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddThought(id);
  };

  const handleDeleteFolder = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDeleteFolder(id);
    setShowMenu(false);
  };

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const startEditing = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditing(true);
    setShowMenu(false);
  };

  return (
    <div className="mb-1">
      <div
        className={`flex items-center py-2 px-3 rounded-lg cursor-pointer transition-all duration-200
          ${isActive ? "bg-folder/10 text-folder" : "hover:bg-gray-100"}`}
        onClick={onSelect}
      >
        <button
          onClick={handleToggle}
          className="mr-1 text-gray-500 hover:text-gray-700"
        >
          {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>

        <Folder
          size={18}
          className={`mr-2 ${isActive ? "text-folder" : "text-gray-500"}`}
        />

        {isEditing ? (
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            onBlur={handleRename}
            onKeyDown={handleKeyDown}
            onClick={(e) => e.stopPropagation()}
            className="flex-1 bg-white border border-gray-300 rounded px-2 py-0.5 text-sm"
            autoFocus
          />
        ) : (
          <span className="flex-1 text-sm font-medium truncate">{name}</span>
        )}

        <div className="flex items-center">
          <button
            onClick={handleAddThought}
            className="text-gray-500 hover:text-idea mr-1 p-1 rounded-full hover:bg-gray-200"
            title="Add thought to folder"
          >
            <FolderPlus size={16} />
          </button>

          <div className="relative">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-200"
            >
              <MoreVertical size={16} />
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-1 py-1 w-36 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                <button
                  onClick={startEditing}
                  className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                >
                  <Edit size={14} className="mr-2" />
                  Rename
                </button>
                <button
                  onClick={handleDeleteFolder}
                  className="flex items-center w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-100"
                >
                  <Trash2 size={14} className="mr-2" />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {isOpen && thoughts.length > 0 && (
        <div className="pl-8 mt-1 space-y-1">
          {thoughts.map((thought) => (
            <div
              key={thought.id}
              className="py-1 px-2 text-sm rounded-md hover:bg-gray-100 cursor-pointer truncate"
            >
              {thought.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FolderItem;
