const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">MyProject</h1>
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#home" className="hover:text-blue-600 transition">Home</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;