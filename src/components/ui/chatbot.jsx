"use client";

import { Bot } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="mb-4 w-[350px] h-[500px] rounded-lg shadow-lg overflow-hidden"
          >
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/DlKtVvxLKs4PgcYWDMz7j"
              width="100%"
              height="100%"
              frameBorder="0"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-primary-foreground rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-200"
      >
        <Bot className="w-6 h-6" />
        <span className="sr-only">Toggle chatbot</span>
      </button>
    </div>
  );
}