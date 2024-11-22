import { ClipboardCheck, Sparkles, CreditCard, FileCheck, FileCheck2Icon } from 'lucide-react';

export function Steps() {
  const steps = [
    {
      icon: <ClipboardCheck className="w-8 h-8 text-azure" />,
      title: "Заповни анкету на сайті",
      description: "Я зв’яжусь з тобою протягом робочого дня"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-azure" />,
      title: "Пройди безкоштовний пробний урок з групою",
      description: "Познайомимось поближче та обговоримо твої цілі"
    },
    {
      icon: <FileCheck2Icon className="w-8 h-8 text-azure" />,
      title: "Укладаємо договір про співпрацю",
      description: "Оформимо нащі стосунки офіційно"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-azure" />,
      title: "Оплати перший місяць занять",
      description: "У зручний для тебе валюті"
    },
    {
      icon: <FileCheck className="w-8 h-8 text-azure" />,
      title: "Отримай програму навчання",
      description: "Тримай під контролем свій прогрес"
    },
    {
      icon: <FileCheck className="w-8 h-8 text-azure" />,
      title: "Почни свій шлях у вивченні іспанської мови",
      description: "Nos vemos pronto"
    }
  ];

  return (
    <section id="steps" className="py-16 bg-pearl">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-olive">Шлях до початку навчання</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative p-6 rounded-lg pearl-bg animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="absolute flex items-center justify-center w-8 h-8 font-bold rounded-full -top-3 -left-3 bg-sage text-pearl">
                {index + 1}
              </div>
              <div className="mb-4">{step.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-olive">{step.title}</h3>
              <p className="text-sage">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}