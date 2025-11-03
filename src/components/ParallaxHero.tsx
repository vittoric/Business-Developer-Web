import { useState, useEffect } from "react";
import cameraImage from "figma:asset/71d7f8a930b97e62da19c95bf44e32361c3fe950.png";
import { LiveInfo } from "./LiveInfo";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";

export function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden">
      {/* Navigation - Glass Effect */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/20 border-b border-white/20">
        <div className="flex justify-between items-center px-4 md:px-8 py-4">
          {/* Logo in navbar */}
          <div className="flex flex-col">
            <div className="text-lg md:text-xl font-black tracking-tight text-[#00D4AA] leading-none">
              VICTORIA
            </div>
            <div className="text-lg md:text-xl font-black tracking-tight text-[#00D4AA] leading-none">
              CODREANU
            </div>
          </div>

                  {/* Desktop Navigation links */}
                  <div className="hidden md:flex gap-8 text-[#00D4AA]">
                    <a 
                      href="#about"
                      className="hover:text-black transition-colors duration-300 text-sm tracking-wide font-medium cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      ABOUT
                    </a>
                    <a 
                      href="#work"
                      className="hover:text-black transition-colors duration-300 text-sm tracking-wide font-medium cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      WORK
                    </a>
                    <a 
                      href="#contact"
                      className="hover:text-black transition-colors duration-300 text-sm tracking-wide font-medium cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      CONTACT
                    </a>
                    <a 
                      href="#contact"
                      className="hover:text-black transition-colors duration-300 text-sm tracking-wide font-medium cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      RESUME
                    </a>
                  </div>

          {/* Mobile Menu - Hamburger */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="text-[#00D4AA] hover:text-black transition-colors duration-300">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white/95 backdrop-blur-md" aria-describedby="mobile-menu-description">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="sr-only" id="mobile-menu-description">
                Navigation menu
              </div>
                      <div className="flex flex-col gap-8 mt-12 pl-8">
                        <a 
                          href="#about"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsMenuOpen(false);
                            setTimeout(() => {
                              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                            }, 300);
                          }}
                          className="text-left text-2xl font-black text-[#00D4AA] hover:text-black transition-colors duration-300 tracking-tight cursor-pointer"
                        >
                          ABOUT
                        </a>
                        <a 
                          href="#work"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsMenuOpen(false);
                            setTimeout(() => {
                              document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                            }, 300);
                          }}
                          className="text-left text-2xl font-black text-[#00D4AA] hover:text-black transition-colors duration-300 tracking-tight cursor-pointer"
                        >
                          WORK
                        </a>
                        <a 
                          href="#contact"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsMenuOpen(false);
                            setTimeout(() => {
                              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }, 300);
                          }}
                          className="text-left text-2xl font-black text-[#00D4AA] hover:text-black transition-colors duration-300 tracking-tight cursor-pointer"
                        >
                          CONTACT
                        </a>
                        <a 
                          href="#contact"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsMenuOpen(false);
                            setTimeout(() => {
                              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }, 300);
                          }}
                          className="text-left text-2xl font-black text-[#00D4AA] hover:text-black transition-colors duration-300 tracking-tight cursor-pointer"
                        >
                          RESUME
                        </a>
                      </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* TECHNICAL BUSINESS DEVELOPER - Main title - Contained in hero section */}
      <div
        className="absolute top-20 md:top-24 left-0 right-0 z-40 text-center overflow-hidden px-4"
        style={{ height: "calc(100vh - 5rem)" }}
      >
        <h2
          className="text-[clamp(1.5rem,8vw,8rem)] md:text-[clamp(2rem,6vw,8rem)] font-black tracking-tighter leading-[0.8] text-black will-change-transform"
          style={{
            transform: `translateY(${Math.min(scrollY * (isMobile ? 0.8 : 0.7), typeof window !== "undefined" ? window.innerHeight * 0.6 : 400)}px)`,
          }}
        >
          TECHNICAL BUSINESS
          <br />
          DEVELOPER
        </h2>
      </div>

      {/* Main Content Container */}
      <div className="relative h-screen flex flex-col items-center justify-center pt-32 md:pt-32">
        {/* Background Name Marquee - Constantly Moving */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-10">
          <div className="whitespace-nowrap will-change-transform animate-marquee-slow">
            <h1 className="text-[clamp(6rem,15vw,18rem)] font-black tracking-tighter text-gray-300 opacity-15 select-none inline-block">
              VICTORIA CODREANU&nbsp;&nbsp;&nbsp;&nbsp;VICTORIA
              CODREANU&nbsp;&nbsp;&nbsp;&nbsp;VICTORIA
              CODREANU&nbsp;&nbsp;&nbsp;&nbsp;VICTORIA
              CODREANU&nbsp;&nbsp;&nbsp;&nbsp;
            </h1>
          </div>
        </div>

        {/* Central Image - Rectangular and Much Taller */}
        <div
          className="relative z-30 w-[clamp(280px,90vw,600px)] h-[clamp(500px,60vh,800px)] md:w-[clamp(350px,45vw,600px)] md:h-[clamp(600px,80vh,800px)] overflow-hidden will-change-transform rounded-lg"
          style={{
            transform: `translateY(${scrollY * -0.5}px)`,
          }}
        >
          <img
            src={cameraImage}
            alt="Victoria Codreanu"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Decorative Elements - Desktop: Bottom corners, Mobile: Below image */}
        <div className="hidden md:block absolute bottom-16 left-8 opacity-60 z-40">
          <div className="w-16 h-px bg-[#00D4AA] mb-4"></div>
          <p className="text-xs tracking-widest text-gray-600 uppercase font-medium">
            Based en Madrid
          </p>
        </div>

        <div className="hidden md:block absolute bottom-16 right-8 opacity-60 z-40">
          <div className="w-16 h-px bg-[#00D4AA] mb-4"></div>
          <LiveInfo />
        </div>

        {/* Mobile Info - Below Image */}
        <div className="md:hidden flex flex-row justify-between items-start w-full px-4 mt-8 z-40 opacity-60 max-w-[90vw]">
          <div className="flex flex-col items-start">
            <div className="w-12 h-px bg-[#00D4AA] mb-2"></div>
            <p className="text-[10px] tracking-widest text-gray-600 uppercase font-medium">
              Based en Madrid
            </p>
          </div>
          <div className="flex flex-col items-end">
            <div className="w-12 h-px bg-[#00D4AA] mb-2"></div>
            <LiveInfo />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-40">
        <div className="w-6 h-10 border-2 border-[#00D4AA] rounded-full relative">
          <div className="w-1 h-3 bg-[#00D4AA] rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
}