import { useState, useRef, useEffect } from "react";
import { Plus, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ThoughtInputProps {
  onAddThought: (text: string) => Promise<void>;
  inputRef?: React.RefObject<HTMLTextAreaElement>;
  placeholder?: string;
}

const ThoughtInput = ({ 
  onAddThought, 
  inputRef: externalInputRef,
  placeholder = "Add a new thought..." 
}: ThoughtInputProps) => {
  const [text, setText] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const internalInputRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = externalInputRef || internalInputRef;

  // Resize textarea height based on content
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [text, inputRef]);

  // Auto-focus the input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (!isExpanded && e.target.value.length > 0) {
      setIsExpanded(true);
    }
  };

  const handleSubmit = async () => {
    if (!text.trim()) return;
    
    try {
      setIsLoading(true);
      await onAddThought(text);
      setText("");
      setIsExpanded(false);
      toast({
        title: "Thought added",
        description: "Your thought has been saved.",
        duration: 3000,
      });
    } catch (error) {
      console.error("Error adding thought:", error);
      toast({
        title: "Error",
        description: "Failed to add thought. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
      // Keep focus on the input after submission
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Submit on Ctrl+Enter or Cmd+Enter
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={`w-full transition-all duration-300 ease-out ${isExpanded ? 'mb-6' : 'mb-0'}`}>
      <div className="relative glass rounded-xl shadow-glass transition-all duration-300 ease-out hover:shadow-lg">
        <textarea
          ref={inputRef}
          value={text}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`w-full resize-none overflow-hidden bg-transparent px-4 py-3 outline-none transition-all duration-300 text-lg ${
            isExpanded ? 'min-h-[120px] rounded-t-xl border-b' : 'min-h-[56px] rounded-xl'
          }`}
          style={{ color: 'hsl(var(--foreground))' }}
        />
        
        {isExpanded && (
          <div className="flex items-center justify-between p-3 rounded-b-xl bg-secondary/50">
            <div className="flex items-center text-sm text-muted-foreground">
              <Sparkles size={16} className="mr-2 text-idea/70" />
              <span>Ctrl+Enter to add</span>
            </div>
            <button
              onClick={handleSubmit}
              disabled={isLoading || !text.trim()}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-all duration-300
                ${isLoading ? 'bg-muted cursor-not-allowed' : 'bg-idea text-white hover:bg-idea/90 hover-scale'}`}
            >
              <Plus size={18} />
              <span>Add</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThoughtInput;
