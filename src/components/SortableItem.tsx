import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { MoreVertical, GripVertical } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface SortableItemProps {
  id: string;
  value: string;
  timestamp: string;
  onDoubleClick?: () => void;
  section: "ideas" | "done" | "folder";
  folder?: string;
  onUpdate?: (text: string) => void;
  updates?: { text: string; timestamp: string }[];
}

const SortableItem = ({
  id,
  value,
  timestamp,
  onDoubleClick,
  section,
  folder,
  onUpdate,
  updates = [],
}: SortableItemProps) => {
  const [showUpdates, setShowUpdates] = useState(false);
  const [updateText, setUpdateText] = useState("");
  const [showUpdateInput, setShowUpdateInput] = useState(false);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const handleSubmitUpdate = () => {
    if (!updateText.trim() || !onUpdate) return;
    onUpdate(updateText);
    setUpdateText("");
    setShowUpdateInput(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmitUpdate();
    }
  };

  const getSectionColor = () => {
    switch (section) {
      case "ideas":
        return "bg-blue-50 border-blue-200 hover:bg-blue-100";
      case "done":
        return "bg-green-50 border-green-200 hover:bg-green-100";
      case "folder":
        return "bg-amber-50 border-amber-200 hover:bg-amber-100";
      default:
        return "bg-gray-50 border-gray-200 hover:bg-gray-100";
    }
  };

  const getBadgeColor = () => {
    switch (section) {
      case "ideas":
        return "bg-idea/10 text-idea";
      case "done":
        return "bg-done/10 text-done";
      case "folder":
        return "bg-folder/10 text-folder";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className={`${getSectionColor()} w-full mb-3 rounded-xl border p-3 shadow-sm transition-all duration-200 hover-scale`}
      onDoubleClick={onDoubleClick}
    >
      <div className="flex items-start gap-2">
        {/* Drag handle */}
        <div
          {...listeners}
          className="cursor-grab touch-none mt-0.5 text-gray-400 hover:text-gray-600"
        >
          <GripVertical size={18} />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {folder && (
                <span
                  className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded ${getBadgeColor()}`}
                >
                  {folder}
                </span>
              )}
              {timestamp && (
                <span className="text-xs text-gray-500">
                  {formatDistanceToNow(new Date(timestamp), {
                    addSuffix: true,
                  })}
                </span>
              )}
            </div>

            {section === "ideas" && onUpdate && (
              <button
                onClick={() => setShowUpdates(!showUpdates)}
                className="text-gray-500 hover:text-gray-700"
              >
                <MoreVertical size={16} />
              </button>
            )}
          </div>

          <p className="mt-1 text-gray-800">{value}</p>

          {/* Updates section - only visible for ideas */}
          {section === "ideas" && showUpdates && (
            <div className="mt-3 border-t border-gray-200 pt-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-500">
                  Updates
                </span>
                {onUpdate && (
                  <button
                    onClick={() => setShowUpdateInput(!showUpdateInput)}
                    className="text-xs text-idea hover:text-idea/80"
                  >
                    {showUpdateInput ? "Cancel" : "Add update"}
                  </button>
                )}
              </div>

              {showUpdateInput && (
                <div className="mb-2 flex">
                  <input
                    type="text"
                    value={updateText}
                    onChange={(e) => setUpdateText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Add an update..."
                    className="flex-1 rounded-l-md border border-gray-300 px-3 py-1 text-sm focus:border-blue-500 focus:outline-none"
                  />
                  <button
                    onClick={handleSubmitUpdate}
                    className="rounded-r-md bg-idea px-3 py-1 text-sm font-medium text-white hover:bg-idea/90"
                  >
                    Add
                  </button>
                </div>
              )}

              {updates.length > 0 ? (
                <div className="space-y-2">
                  {updates.map((update, index) => (
                    <div
                      key={index}
                      className="rounded-md bg-white p-2 text-sm shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <p>{update.text}</p>
                        <span className="text-xs text-gray-500">
                          {formatDistanceToNow(new Date(update.timestamp), {
                            addSuffix: true,
                          })}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-500 italic">No updates yet</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SortableItem;
