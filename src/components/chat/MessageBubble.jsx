import { User, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

export const MessageBubble = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex gap-4 animate-slide-up",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div className="relative group">
        <div
          className={cn(
            "absolute inset-0 rounded-full blur-md opacity-75 transition-opacity",
            isUser
              ? "bg-gradient-to-br from-primary to-secondary"
              : "bg-gradient-to-br from-secondary to-primary"
          )}
        />
        <div
          className={cn(
            "relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2",
            isUser
              ? "bg-gradient-to-br from-primary to-secondary border-primary/20"
              : "bg-gradient-to-br from-secondary/20 to-primary/20 border-primary/30 glass"
          )}
        >
          {isUser ? (
            <User className="w-5 h-5 text-white" />
          ) : (
            <Bot className="w-5 h-5 text-primary" />
          )}
        </div>
      </div>
      
      <div
        className={cn(
          "max-w-[75%] rounded-2xl px-5 py-3.5 shadow-lg relative group",
          isUser
            ? "bg-gradient-to-br from-primary to-secondary text-white rounded-tr-sm"
            : "glass-card rounded-tl-sm"
        )}
      >
        <div className={cn(
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl",
          isUser
            ? "bg-gradient-to-br from-primary to-secondary"
            : "bg-primary/20",
          isUser ? "rounded-tr-sm" : "rounded-tl-sm"
        )} />
        
        <div className="relative">
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
          <p
            className={cn(
              "text-xs mt-2 opacity-60",
              isUser ? "text-white" : "text-muted-foreground"
            )}
          >
            {message.timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
