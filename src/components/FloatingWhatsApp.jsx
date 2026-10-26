import React from 'react'
import { MessageSquare } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919561240625?text=Hello%20S%26S%20Corporation%2C%20I%20would%20like%20to%20inquire%20about%20your%20Engineering%20Solutions%20and%20AquaCorp%20Chemicals."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      title="Chat with S&S Corporation on WhatsApp"
    >
      <MessageSquare size={20} />
      <span>WhatsApp Us</span>
    </a>
  )
}
