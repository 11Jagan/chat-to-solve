import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ChatButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      size="lg"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-60 group-hover:opacity-90 transition-opacity" />
      <MessageCircle className="h-9 w-9 relative z-10" />
    </Button>
  );
};
