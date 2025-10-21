import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export const ChatInput = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="glass border-t border-white/10 p-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative">
        <div className="glass-card rounded-2xl p-2 flex gap-2 shadow-2xl">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here... (Press Enter to send)"
            className="min-h-[60px] resize-none bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground placeholder:text-muted-foreground"
            disabled={isLoading}
          />
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              size="icon"
              className="relative h-[60px] w-[60px] bg-gradient-to-br from-primary to-secondary hover:opacity-90 transition-all disabled:opacity-50 shadow-lg rounded-xl"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
