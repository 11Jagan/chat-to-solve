import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ChatButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      size="lg"
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-50 group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
      <MessageCircle className="h-7 w-7 relative z-10" />
    </Button>
  );
};
