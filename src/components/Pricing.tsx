import { CheckCircle2 } from 'lucide-react';

interface PricingProps {
  scrollToSection: (section: string) => void;
}

export function Pricing({ scrollToSection }: PricingProps) {
  const features = [
    "90 хвилин заняття",
    "4-6 людей у групі",
    "Регулярніть 2 рази на тиждень",
    "Ранкова та вечірня групи",
    "Онлайн-формат", 
    "Заняття з дорослими (16+)"
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-olive">Групові заняття</h2>
        <div className="max-w-md p-8 mx-auto rounded-lg pearl-bg">
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold">Рівень А0-А1</h3>
            <p className="mb-6 text-4xl font-bold text-olive-500">€10<span className="text-lg text-gray-600">/заняття</span></p>
            <ul className="mb-8 space-y-4 text-left">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => scrollToSection('apply')}
              className="w-full px-6 py-3 text-white transition-colors rounded-full bg-azure hover:bg-azure"
            >
              Записатися на заняття
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}