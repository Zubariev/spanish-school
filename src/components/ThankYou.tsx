import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page after 5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-pearl">
      <div className="max-w-md p-8 text-center bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-olive">Дякуємо за заявку!</h1>
        <p className="mb-6 text-sage">
          Ми зв'яжемося з вами найближчим часом для уточнення деталей.
        </p>
        <p className="text-sm text-gray-500">
          Через 5 секунд ви будете перенаправлені на головну сторінку
        </p>
      </div>
    </div>
  );
}