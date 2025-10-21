import { MessageBubble } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";

export const MessageList = ({ messages, isLoading, messagesEndRef }) => {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
      {isLoading && <TypingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  );
};
