import { MessageCircle, Sparkles } from "lucide-react";

export const ChatHeader = () => {
  return (
    <div className="glass border-b border-white/10 p-6 relative">
      <div className="flex items-center gap-4">
        <div className="glass-card p-3 rounded-2xl">
          <MessageCircle className="w-7 h-7 text-primary" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold gradient-text">Customer Support</h1>
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          </div>
          <p className="text-muted-foreground text-sm mt-1">
            Always here to help you
          </p>
        </div>
      </div>
    </div>
  );
};
