import { useState } from 'react';
import diploma from '../../images/diploma.jpg';
import certificate1 from '../../images/certificate1.png';
import certificate2 from '../../images/certificate2.png';

export function Diplomas() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const diplomas = [
    {
      title: "Диплом перекладача",
      image: diploma,
      year: "2023"
    },
    {
      title: "Курс з методології навчання",
      image: certificate1,
      year: "2024"
    },
    {
      title: "Курс групового навчання",
      image: certificate2,
      year: "2024"
    }
  ];

  return (
    <section id="diplomas" className="py-16 bg-pearl">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-olive">Кваліфікації</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {diplomas.map((diploma, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg pearl-bg">
              <img 
                loading="lazy"
                src={diploma.image} 
                alt={diploma.title}
                className="object-cover w-full h-48 transition-transform cursor-pointer hover:scale-105"
                onClick={() => setSelectedImage(diploma.image)}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-olive">{diploma.title}</h3>
                <p className="text-sage">{diploma.year}</p>
              </div>
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
              alt="Full size"
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