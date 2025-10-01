import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    console.log('WhatsApp chat opened');
    window.open('https://wa.me/966123456789', '_blank');
  };

  return (
    <Button
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#20BD5A] z-50"
      onClick={handleWhatsAppClick}
      data-testid="button-whatsapp-float"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </Button>
  );
}
