import React from 'react';
import amaneImg from '../assets/amane.jpg'; 

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-slate-800">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img 
              src={amaneImg} 
              alt="Foto Amane" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <p className="text-slate-600 leading-relaxed mb-4 text-lg">
              Saya adalah seorang pelajar SMK Wikrama Bogor yang sedang mendalami dunia Web Development. Project ini dibuat sebagai pembuktian kemampuan saya dalam menggunakan modern stack.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>✅ React JS (Vite)</li>
              <li>✅ Tailwind CSS</li>
              <li>✅ Responsive Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;