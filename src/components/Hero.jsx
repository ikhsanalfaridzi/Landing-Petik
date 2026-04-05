const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-slate-50">
      <div className="text-center px-6">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-blue-500 mb-2">Welcome to my world</h2>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Building Future <br /> <span className="text-blue-600">With React</span></h1>
        <p className="max-w-xl mx-auto text-slate-600 text-lg mb-8">
          Halo! Saya Ikhsan Alfaridzi sedang mengerjakan tugas project React menggunakan Vite dan Tailwind CSS.
        </p>
        <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
          Lihat Project
        </a>
      </div>
    </section>
  );
};

export default Hero;