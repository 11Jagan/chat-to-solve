import { Bot, Sparkles } from "lucide-react";

export const TypingIndicator = () => {
  return (
    <div className="flex gap-4 animate-slide-up">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary to-primary blur-md opacity-75" />
        <div className="relative flex-shrink-0 w-10 h-10 rounded-full glass-card border-2 border-primary/30 flex items-center justify-center">
          <Bot className="w-5 h-5 text-primary animate-pulse" />
        </div>
      </div>
      
      <div className="glass-card rounded-2xl rounded-tl-sm px-5 py-4 shadow-lg relative group">
        <div className="absolute inset-0 rounded-2xl rounded-tl-sm bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
        
        <div className="relative flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
          <Sparkles className="w-4 h-4 text-primary/60 animate-pulse" />
        </div>
      </div>
    </div>
  );
};
