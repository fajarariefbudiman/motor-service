import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "6281234567890";
  const message = encodeURIComponent("Halo, saya ingin konsultasi tentang service motor.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow hover:bg-[hsl(160,84%,35%)] transition-colors duration-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" strokeWidth={2} />
    </a>
  );
};

export default WhatsAppButton;
