import React, { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    previousExperience: '',
    purpose: '',
    days: [] as string[],
    time: [] as string[],
    contactMethod: '',
    contactDetails: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const formDataEncoded = new URLSearchParams();
      Object.keys(formData).forEach(key => {
        const value = formData[key as keyof typeof formData];
        formDataEncoded.append(key, Array.isArray(value) ? value.join(',') : value);
      });
      formDataEncoded.append('timestamp', new Date().toISOString());

      await fetch('https://script.google.com/macros/s/AKfycbxd1m0ynCkb2t3_iZW6AFQMwrIOhtUhC9OMR6C5VU7Ak46SOXmi9h9uvbQ-0R83ykxO/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataEncoded.toString(),
      });

      alert('Дякуємо! Ваша заявка прийнята.');
      setFormData({
        name: '',
        dateOfBirth: '',
        previousExperience: '',
        purpose: '',
        days: [],
        time: [],
        contactMethod: '',
        contactDetails: ''
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Виникла помилка. Спробуйте ще раз.');
    }
  };

  return (
    <section id="apply" className="py-16 bg-cream">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-olive">Записатися на заняття</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl p-8 mx-auto rounded-lg pearl-bg">
          <div className="space-y-6">
            <div>
              <label className="block mb-2 text-sage">Як тебе звати?</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg border-sage focus:outline-none focus:border-azure"
              />
            </div>

            <div>
              <label className="block mb-2 text-sage">Коли в тебе день народження?</label>
              <input
                type="date"
                required
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg border-sage focus:outline-none focus:border-azure"
              />
            </div>

            <div>
              <label className="block mb-2 text-sage">Чи вивчав(-ла) раніше іспанську?</label>
              <textarea
                required
                value={formData.previousExperience}
                onChange={(e) => setFormData({...formData, previousExperience: e.target.value})}
                className="w-full h-24 px-4 py-2 border rounded-lg border-sage focus:outline-none focus:border-azure"
              />
            </div>

            <div>
              <label className="block mb-2 text-sage">Розкажи, для чого хочеш вивчати мову?</label>
              <textarea
                required
                value={formData.purpose}
                onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                className="w-full h-24 px-4 py-2 border rounded-lg border-sage focus:outline-none focus:border-azure"
              />
            </div>

            <div>
              <label className="block mb-2 text-sage">Які дні тижня підійдуть для занять? (вибери всі зручні варіанти)</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="monday"
                    checked={formData.days.includes('monday')}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData(prev => ({
                        ...prev,
                        days: e.target.checked 
                          ? [...prev.days, value]
                          : prev.days.filter(day => day !== value)
                      }));
                    }}
                    className="mr-2"
                  />
                  <span>Пон-Сер</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="wednesday"
                    checked={formData.days.includes('wednesday')}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData(prev => ({
                        ...prev,
                        days: e.target.checked 
                          ? [...prev.days, value]
                          : prev.days.filter(day => day !== value)
                      }));
                    }}
                    className="mr-2"
                  />
                  <span>Сер-Пт</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="friday"
                    checked={formData.days.includes('friday')}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData(prev => ({
                        ...prev,
                        days: e.target.checked 
                          ? [...prev.days, value]
                          : prev.days.filter(day => day !== value)
                      }));
                    }}
                    className="mr-2"
                  />
                  <span>Пон-Пт</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sage">Який час тобі підійде для занять? (вибери всі зручні варіанти)</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="10:00-11:30"
                    checked={formData.time.includes('10:00-11:30')}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData(prev => ({
                        ...prev,
                        time: e.target.checked 
                          ? [...prev.time, value]
                          : prev.time.filter(t => t !== value)
                      }));
                    }}
                    className="mr-2"
                  />
                  <span>Ранок (10:00-11:30)</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="12:00-13:30"
                    checked={formData.time.includes('12:00-13:30')}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData(prev => ({
                        ...prev,
                        time: e.target.checked 
                          ? [...prev.time, value]
                          : prev.time.filter(t => t !== value)
                      }));
                    }}
                    className="mr-2"
                  />
                  <span>Ранок (12:00-13:30)</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="16:00-17:30"
                    checked={formData.time.includes('16:00-17:30')}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData(prev => ({
                        ...prev,
                        time: e.target.checked 
                          ? [...prev.time, value]
                          : prev.time.filter(t => t !== value)
                      }));
                    }}
                    className="mr-2"
                  />
                  <span>Вечір (16:00-17:30)</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="19:30-21:00"
                    checked={formData.time.includes('19:30-21:00')}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData(prev => ({
                        ...prev,
                        time: e.target.checked 
                          ? [...prev.time, value]
                          : prev.time.filter(t => t !== value)
                      }));
                    }}
                    className="mr-2"
                  />
                  <span>Вечір (19:30-21:00)</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sage">Як можна з тобою зв'язатися?</label>
              <div className="grid grid-cols-2 gap-4">
                <select
                  required
                  value={formData.contactMethod}
                  onChange={(e) => setFormData({...formData, contactMethod: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg border-sage focus:outline-none focus:border-azure"
                >
                  <option value="">Обери месенджер</option>
                  <option value="telegram">Telegram</option>
                  <option value="viber">Viber</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="phone">Телефон</option>
                </select>
                <input
                  type="text"
                  required
                  placeholder="Твій номер або нік"
                  value={formData.contactDetails}
                  onChange={(e) => setFormData({...formData, contactDetails: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg border-sage focus:outline-none focus:border-azure"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 mt-8 transition-colors rounded-full bg-azure text-pearl hover:bg-sage"
          >
            Надіслати заявку
          </button>
        </form>
      </div>
    </section>
  );
}