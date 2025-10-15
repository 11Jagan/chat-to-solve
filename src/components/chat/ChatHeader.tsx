import { MessageCircle, Sparkles } from "lucide-react";

export const ChatHeader = () => {
  return (
    <div className="glass border-b border-white/10 p-6 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 animate-shimmer" />
      
      <div className="relative flex items-center gap-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-75" />
          <div className="relative glass-card p-3 rounded-2xl">
            <MessageCircle className="w-7 h-7 text-primary" />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold gradient-text">AI Support</h1>
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          </div>
          <p className="text-muted-foreground text-sm mt-1">
            Powered by advanced AI • Always here to help
          </p>
        </div>
      </div>
    </div>
  );
};
