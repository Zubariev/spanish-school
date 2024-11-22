import { useState } from 'react';
import feedback1 from '../../images/feedback/feedback_1.jpg';
import feedback2 from '../../images/feedback/feedback_2.jpg';
import feedback3 from '../../images/feedback/feedback_3.jpg';
import feedback4 from '../../images/feedback/feedback_4.jpg';
import feedback5 from '../../images/feedback/feedback_5.jpg';

interface Testimonial {
  name: string;
  imageSrc: string;
}

export function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const testimonials: Testimonial[] = [
    {
      name: "Client 1",
      imageSrc: feedback1
    },
    {
      name: "Client 2",
      imageSrc: feedback2
    },
    {
      name: "Client 3",
      imageSrc: feedback3
    },
    {
      name: "Client 4",
      imageSrc: feedback4
    },
    {
      name: "Client 5",
      imageSrc: feedback5
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-primary-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-olive">Відгуки учнів</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg pearl-bg w-[200px]">
              <img
                loading="lazy"
                src={testimonial.imageSrc}
                alt={`Feedback from ${testimonial.name}`}
                className="object-cover w-full h-[250px] transition-transform cursor-pointer hover:scale-105"
                onClick={() => setSelectedImage(testimonial.imageSrc)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <img 
              src={selectedImage} 
              alt="Full size feedback"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button 
              className="absolute w-8 h-8 text-xl font-bold text-white bg-black bg-opacity-50 rounded-full top-4 right-4"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}