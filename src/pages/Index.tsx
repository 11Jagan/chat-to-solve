import { ChatInterface } from "@/components/ChatInterface";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <ChatInterface />
    </div>
  );
};

export default Index;
