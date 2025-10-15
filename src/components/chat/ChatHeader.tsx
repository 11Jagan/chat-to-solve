import { MessageCircle } from "lucide-react";

export const ChatHeader = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary p-6 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Customer Support</h1>
          <p className="text-white/80 text-sm">How can we help you today?</p>
        </div>
      </div>
    </div>
  );
};
