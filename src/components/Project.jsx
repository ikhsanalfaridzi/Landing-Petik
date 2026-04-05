const Projects = () => {
  const data = [
    { 
      title: "React Covid-19", 
      desc: "Aplikasi monitoring data Covid-19 secara real-time menggunakan API eksternal dan visualisasi grafik.",
      tech: ["React", "Chart.js", "Tailwind"] 
    },
    { 
      title: "Clone Instagram", 
      desc: "Replika antarmuka Instagram dengan fitur feed, upload foto sederhana, dan desain yang sepenuhnya responsif.",
      tech: ["React", "SQL", "Tailwind"]
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6"> 
        <h2 className="text-3xl font-bold text-center mb-4">My Projects</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  {item.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <button className="text-blue-600 font-semibold flex items-center hover:gap-2 transition-all">
                  Learn more <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;