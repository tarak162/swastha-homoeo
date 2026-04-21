"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
    const phoneNumber = "918328171337";
    const message = "Hi, I'd like to book an appointment at Swastha Homoeopathy";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
        >
            <div className="relative flex items-center justify-center">
                {/* Pulse animation ring */}
                <div className="absolute w-14 h-14 bg-[#25D366] rounded-full animate-pulse opacity-40" />

                {/* Main button */}
                <button
                    type="button"
                    className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA58] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                    aria-label="Chat with us on WhatsApp"
                >
                    <MessageCircle className="w-7 h-7" strokeWidth={1.5} />
                </button>

                {/* Tooltip */}
                <div className="absolute bottom-full right-0 mb-3 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Chat with us on WhatsApp
                </div>
            </div>
        </a>
    );
}
