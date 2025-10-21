import { useState } from "react";
import { ChatInterface } from "@/components/ChatInterface";
import { ChatButton } from "@/components/ChatButton";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <ChatButton onClick={() => setIsChatOpen(true)} />
      
      <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
        <DialogContent className="max-w-4xl h-[80vh] p-0 gap-0">
          <ChatInterface />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
