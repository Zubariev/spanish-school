import React, { useEffect } from 'react';
import teacherImage from '../../images/face.jpg';
import logo from '../../images/small_logo.jpeg';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

interface TxtRotateProps {
  toRotate: string[];
  period: number;
}

function TxtRotate({ toRotate, period }: TxtRotateProps) {
  const [text, setText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const [delta, setDelta] = React.useState(300);

  useEffect(() => {
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullTxt = toRotate[i];

      if (isDeleting) {
        setText(fullTxt.substring(0, text.length - 1));
      } else {
        setText(fullTxt.substring(0, text.length + 1));
      }

      let newDelta = 300 - Math.random() * 100;

      if (isDeleting) {
        newDelta /= 2;
      }

      if (!isDeleting && text === fullTxt) {
        setIsDeleting(true);
        newDelta = period;
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        newDelta = 500;
      }

      setDelta(newDelta);
    };

    const timer = setTimeout(tick, delta);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, delta, toRotate, period]);

  return <span className="wrap">{text}</span>;
}

export function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="relative pt-24 pb-16 overflow-hidden bg-white">
      <div className="container relative px-20 mx-auto">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="space-y-3 md:w-1/2 animate-float">
            <img 
              loading="lazy"
              src={logo}
              alt="Es Decir Logo - Школа іспанської мови"
              className="w-24 mb-6"
            />
            <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
              Говори Вільно
            </h1>
            <p className="text-xl italic text-azure">
              Es decir
            </p>
            <p className="text-xl text-gray-600">
              Говори <TxtRotate toRotate={["те, що думаєш", "відверто", "з ким захочеш"]} period={2000} />
            </p>
            <button 
              onClick={() => scrollToSection('apply')}
              className="px-8 py-3 text-white transition-colors rounded-full bg-azure hover:bg-azure"
            >
              Записатися на заняття
            </button>
          </div>
          <div className="mt-8 md:mt-0 md:w-5/12">
            <img 
              loading="lazy"
              src={teacherImage}
              alt="Spanish Teacher"
              className="w-full mx-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}