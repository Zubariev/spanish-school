import { Sparkles, Users, Clock, CheckCircle2 } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: < Users className="w-8 h-8 text-azure" />,
      title: "Міні-групи від 4 до 6 людей",
      desc: "повна залученість кожного учня на уроці"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-azure" />,
      title: " комунікативна та креативна методики",
      desc: "говорити + практикувати в ігровому формати"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-azure" />,
      title: "Робота з сучасними програмами",
      desc: "інтерактивні дошки Miro для проведення уроків, Canva, Genially, Quizlet тощо"
    },
    {
      icon: <Clock className="w-8 h-8 text-azure" />,
      title: "Відкритість та прозорість",
      desc: "я надаю вам чесний розрахунок часу для проходження кожного рівня мови, за європейськими стандартами"
    }
  ];

  const videos = [
    "https://youtu.be/_BOWNQpRAgY?si=PSQkhALQLHA4cn2Z",
    "https://youtu.be/GKRqZ9-CaQw?si=E0h23GJnqMG28Wp0",
    "https://youtu.be/I170eT7PQtI?si=8wyIgPEF1RWrqkU-"
  ];

  // Helper function to get video ID from YouTube URL
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-olive">Уроки зі мною це...</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="p-6 transition-shadow rounded-lg pearl-bg hover:shadow-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 mb-8 text-3xl font-bold text-center text-olive">Ось де ми працюємо:</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {videos.map((video, index) => (
            <div key={index} className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${getYouTubeId(video)}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}