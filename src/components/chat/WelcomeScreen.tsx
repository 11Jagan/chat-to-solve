import { HelpCircle, Wrench, FileQuestion, MessageSquare, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface WelcomeScreenProps {
  onQuestionClick: (question: string) => void;
}

const suggestedQuestions = [
  {
    icon: HelpCircle,
    text: "How do I reset my password?",
    category: "Account"
  },
  {
    icon: Wrench,
    text: "I'm having trouble logging in",
    category: "Troubleshooting"
  },
  {
    icon: FileQuestion,
    text: "Where can I find my order history?",
    category: "Information"
  },
  {
    icon: MessageSquare,
    text: "How do I contact support?",
    category: "Support"
  }
];

export const WelcomeScreen = ({ onQuestionClick }: WelcomeScreenProps) => {
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8 animate-in fade-in duration-500">
        <div className="text-center space-y-4">
          <div className="inline-block p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full">
            <MessageCircle className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome to Support
          </h2>
          <p className="text-muted-foreground text-lg">
            I'm here to help you with any questions or issues you might have.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground text-center">
            Popular questions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {suggestedQuestions.map((question, index) => {
              const Icon = question.icon;
              return (
                <Card
                  key={index}
                  className="p-4 cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30"
                  onClick={() => onQuestionClick(question.text)}
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{question.text}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {question.category}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
