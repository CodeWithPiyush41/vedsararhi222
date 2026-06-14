import { FaWhatsapp } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
              aria-label="Chat on WhatsApp"
            >
              <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></div>
              <FaWhatsapp size={32} />
            </a>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-foreground text-background font-medium">
            <p>Chat with Pandit Ji</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
