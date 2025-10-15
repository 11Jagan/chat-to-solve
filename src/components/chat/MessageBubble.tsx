import { Message } from "../ChatInterface";
import { User, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex gap-3 animate-in slide-in-from-bottom-2 duration-300",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
          isUser
            ? "bg-gradient-to-br from-primary to-secondary"
            : "bg-gradient-to-br from-secondary to-primary"
        )}
      >
        {isUser ? (
          <User className="w-5 h-5 text-white" />
        ) : (
          <Bot className="w-5 h-5 text-white" />
        )}
      </div>
      <div
        className={cn(
          "max-w-[70%] rounded-2xl px-4 py-3 shadow-sm",
          isUser
            ? "bg-gradient-to-br from-primary to-secondary text-white rounded-tr-none"
            : "bg-card border border-border rounded-tl-none"
        )}
      >
        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        <p
          className={cn(
            "text-xs mt-1 opacity-70",
            isUser ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
};
