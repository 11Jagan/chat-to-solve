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
      <div className="max-w-2xl w-full space-y-10 animate-slide-up">
        <div className="text-center space-y-6">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="relative glass-card p-6 rounded-full">
              <MessageCircle className="w-16 h-16 text-primary" />
            </div>
          </div>
          
          <div className="space-y-3">
            <h2 className="text-5xl font-bold gradient-text">
              Welcome to AI Support
            </h2>
            <p className="text-muted-foreground text-xl max-w-md mx-auto">
              I'm here to help you solve any issues instantly with AI-powered assistance
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <p className="text-sm font-medium text-muted-foreground">
              Try asking about
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {suggestedQuestions.map((question, index) => {
              const Icon = question.icon;
              return (
                <div
                  key={index}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Card
                    className="relative glass-card p-5 cursor-pointer hover:scale-105 transition-all duration-300 border-primary/20 hover:border-primary/40"
                    onClick={() => onQuestionClick(question.text)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="glass p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground mb-1">{question.text}</p>
                        <p className="text-xs text-muted-foreground">
                          {question.category}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
