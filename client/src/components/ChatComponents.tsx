import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef, useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import { FaCircleUser } from "react-icons/fa6";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  const [isAuthUserReady, setIsAuthUserReady] = useState(false);

  useEffect(() => {
    if (authUser?._id) {
      setIsAuthUserReady(true);
    }
  }, [authUser]);

  useEffect(() => {
    if (isAuthUserReady) {
      getMessages(selectedUser?._id || "");
      subscribeToMessages();
    }

    return () => unsubscribeFromMessages();
  }, [isAuthUserReady, selectedUser?._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (!isAuthUserReady || isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <div className="flex-1 flex items-center justify-center">Loading...</div>
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`flex ${message.senderId === authUser?._id ? "justify-end" : "justify-start"
              }`}
            ref={messageEndRef}
          >
            <div
              className={`flex items-start space-x-2 ${message.senderId === authUser?._id
                  ? "flex-row-reverse space-x-reverse"
                  : ""
                }`}
            >
              {/* Bubble container around avatar and message */}
              <div
                className={`flex items-center p-3 rounded-2xl shadow-md ${message.senderId === authUser?._id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-900"
                  }`}
              >
                {/* Avatar */}
                <div className="chat-avatar flex-shrink-0">
                  <FaCircleUser className={`w-8 h-8 ${message.senderId === authUser?._id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-900"
                    }`} />
                </div>
                {/* Message */}
                <div className="ml-2">
                  {message.image && (
                    <img
                      src={message.image}
                      alt="Attachment"
                      className="sm:max-w-[200px] rounded-md mb-2"
                    />
                  )}
                  <p>{message.text}</p>
                  <time className="block mt-1 text-xs opacity-70">
                    {message.created_at}
                  </time>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
