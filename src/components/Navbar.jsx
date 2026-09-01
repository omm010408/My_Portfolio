import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled 
            ? 'bg-white/80 dark:bg-black/80 shadow-lg shadow-black/5 dark:shadow-black/20' 
            : 'bg-white/60 dark:bg-black/60'
        }`}
        style={{
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        {/* Top border accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        
        <div className="max-w-100% mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            
            {/* Logo - Left aligned */}
            <div className="flex-shrink-0">
              <h1 
                className='text-xs  md:text-3xl text-slate-800 dark:text-white transition-colors duration-300'
                style={{fontFamily: '"Ephesis", cursive'}}
              >
                {/* <i className="fa-solid fa-less-than text-xs md:text-base align-middle"></i> */}
                {' '}Omm Roshan Sahoo {' '}
                {/* <i className="fa-solid fa-greater-than text-sm md:text-base align-middle"></i> */}
              </h1>
            </div>

            {/* Desktop Navigation - Centered in remaining space */}
            <div className="hidden lg:flex flex-1 justify-end">
              <ul 
                className="flex items-end gap-1" 
                style={{fontFamily: '"Raleway", sans-serif'}}
              >
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a 
                      href={`#${item.id}`}
                      className={`group relative px-6 py-2.5 rounded-full font-medium tracking-wide transition-all duration-300 ${
                        activeSection === item.id 
                          ? 'text-black dark:text-yellow-300 text-xl font-extrabold '  
                          : 'text-slate-700 dark:text-slate-200 opacity-70'
                      }`}
                    >
                      {/* Active background */}
                      {/* {activeSection === item.id && (
                        <span className="absolute inset-0 bg-black dark:bg-white rounded-full shadow-lg shadow-cyan-500/30" />
                      )}
                       */}
                      {/* Hover background */}
                      <span className={`absolute inset-0 bg-slate-100 dark:bg-slate-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        activeSection === item.id ? 'hidden' : ''
                      }`} />
                      
                      <span className={`relative z-10 ${activeSection === item.id ? 'dark:text-white' : ''}`}>
                        {item.label}
                      </span>
                      
                      
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section - Social Icons & Theme Toggle */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Social Icons */}
              <div className="flex items-center  gap-6 mr-3">
                <a 
                  href="https://github.com/omm010408" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black dark:text-white hover:text-black dark:hover:text-white transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github text-2xl"></i>
                </a>
              </div>
              
              
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button, Social Icons & Theme Toggle */}
            <div className="flex lg:hidden items-end gap-4">
              
              
              <ThemeToggle />
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-2 text-slate-700 dark:text-slate-300 rounded-lg transition-colors duration-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`} />
                  <span className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`} />
                  <span className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>

      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-20 left-0 right-0 z-40 lg:hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="bg-white/95 dark:bg-black/95 backdrop-blur-2xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-2xl">
          <div className="max-w-full mx-auto px-6 py-8">
            <ul className="space-y-2" style={{fontFamily: '"Raleway", sans-serif'}}>
              {navItems.map((item, index) => (
                <li 
                  key={item.id}
                  className="transform transition-all duration-300"
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  <a 
                    href={`#${item.id}`}
                    onClick={closeMenu} 
                    className={`group relative flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg shadow-cyan-500/20' 
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className="text-lg font-medium tracking-wide">{item.label}</span>
                    
                    {/* Arrow */}
                    <svg 
                      className={`w-5 h-5 transform transition-all duration-300 ${
                        activeSection === item.id ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-2xl shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-300"
                style={{fontFamily: '"Raleway", sans-serif'}}
              >
                <span>Let's Talk</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;