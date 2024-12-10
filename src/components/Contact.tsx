import { Mail, MessageCircle, Instagram, FileText, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-olive">Контакти</h2>
        <div className="max-w-2xl p-8 mx-auto rounded-lg pearl-bg">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold">Контактна інформація</h3>
              <div className="space-y-4">
                <a href="mailto:es.decir.es@gmail.com" className="flex items-center text-gray-600 hover:text-blue-600">
                  <Mail className="w-5 h-5 mr-2" />
                  es.decir.es@gmail.com
                </a>
                <a 
                  href="https://wa.me/380996171236" 
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp (+380996171236)
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Соціальні мережі</h3>
              <div className="space-y-4">
                <a 
                  href="https://www.instagram.com/_esdecir_/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  @_esdecir_
                </a>
                <a 
                  href="https://t.me/esdecires" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Telegram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a 
              href="https://docs.google.com/document/d/1VkxiSvnnYvbQXTCK1YjgJNiqXNAHNS4q3pEJahFz80k/edit?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-blue-600 hover:text-blue-700"
            >
              <FileText className="w-5 h-5 mr-2" />
              Договір публічної оферти
            </a>
          </div>
        </div>
        <div className="mt-8 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Es Decir. All rights reserved.
        </div>
      </div>
    </section>
  );
}