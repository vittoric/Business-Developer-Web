import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ContentSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del título completo - suave y elegante
      if (titleContainerRef.current) {
        const words = titleContainerRef.current.querySelectorAll('.title-word');
        
        gsap.from(words, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 80,
          scale: 0.9,
          stagger: 0.25,
          duration: 2.5,
          ease: 'power3.out',
        });
      }

      // Elementos flotantes
      const floaters = document.querySelectorAll('.gsap-floater');
      floaters.forEach((el, i) => {
        gsap.to(el, {
          y: `random(-50, 50)`,
          x: `random(-50, 50)`,
          duration: `random(3, 6)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.2,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      id="about" 
      ref={sectionRef}
      className="min-h-screen bg-black relative overflow-hidden py-20 md:py-32"
    >
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at 50% 50%, #00D4AA, transparent 70%)`,
        }}
      ></div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#00D4AA 1px, transparent 1px), linear-gradient(90deg, #00D4AA 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Title - GSAP Animated - REESTRUCTURADO */}
        <div 
          ref={titleContainerRef}
          className="text-center mb-20 md:mb-32"
        >
          <div className="space-y-2 md:space-y-4">
            {/* CONNECTING */}
            <div className="title-word">
              <h1 
                className="font-black tracking-tighter leading-[0.85] uppercase"
                style={{
                  fontSize: 'clamp(2.5rem, 10vw, 10rem)',
                  background: 'linear-gradient(135deg, #00D4AA 0%, #FFFFFF 50%, #00D4AA 100%)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'shimmer 4s linear infinite',
                }}
              >
                Connecting
              </h1>
            </div>
            
            {/* TECHNOLOGY */}
            <div className="title-word">
              <h1 
                className="font-black tracking-tighter leading-[0.85] uppercase"
                style={{
                  fontSize: 'clamp(2.5rem, 10vw, 10rem)',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #00D4AA 50%, #FFFFFF 100%)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'shimmer 4s linear infinite 0.5s',
                }}
              >
                Technology
              </h1>
            </div>
            
            {/* TO BUSINESS */}
            <div className="title-word">
              <h1 
                className="font-black tracking-tighter leading-[0.85] uppercase"
                style={{
                  fontSize: 'clamp(2.5rem, 10vw, 10rem)',
                  background: 'linear-gradient(135deg, #00D4AA 0%, #FFFFFF 50%, #00D4AA 100%)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'shimmer 4s linear infinite 1s',
                }}
              >
                to Business
              </h1>
            </div>
          </div>
          
          {/* Animated underline */}
          <div className="flex justify-center mt-10 md:mt-16">
            <div className="w-40 md:w-96 h-2 bg-gradient-to-r from-transparent via-[#00D4AA] to-transparent rounded-full shadow-lg shadow-[#00D4AA]/50"></div>
          </div>
        </div>

        {/* Content - Párrafos simples uno debajo del otro */}
        <div className="max-w-4xl mx-auto space-y-6 px-8 md:px-0">
          <p className="text-base md:text-lg leading-relaxed text-white font-normal">
            Trained in both <span className="font-semibold text-[#00D4AA]">Economics</span> and <span className="font-semibold text-[#00D4AA]">Software Engineering</span> (42 Madrid), I serve as the key link where market strategy meets technical execution. As a Technical Business Developer, my job is to find, translate, and deliver tech solutions that create real business growth.
          </p>
          
          <p className="text-base md:text-lg leading-relaxed text-white font-normal">
            Currently with <span className="font-semibold text-[#00D4AA]">Telefónica Digital Innovation's Open Gateway Project</span>, I focus on closing the distance between complex engineering and scalable business opportunities, turning new ideas into measurable income.
          </p>
          
          <p className="text-base md:text-lg leading-relaxed text-white font-normal">
            I bring a unique mix of analytical skill, adaptability, and teamwork to every project. My passion for <span className="font-semibold text-[#00D4AA]">analog photography</span> and <span className="font-semibold text-[#00D4AA]">travel</span> influences how I work: they teach me to simplify complicated subjects and always look for fresh perspectives.
          </p>
          
          <p className="text-base md:text-lg leading-relaxed text-white font-normal">
            This curiosity helps me understand the technology and the different markets it can successfully impact. I'm motivated by results and driven to find the next competitive edge.
          </p>
        </div>

        {/* GSAP Floating elements */}
        <div className="gsap-floater absolute top-20 right-10 w-5 h-5 bg-[#00D4AA] rounded-full opacity-80 shadow-[0_0_30px_#00D4AA]"></div>
        <div className="gsap-floater absolute bottom-40 left-20 w-6 h-6 bg-[#00D4AA] rounded-full opacity-80 shadow-[0_0_35px_#00D4AA]"></div>
        <div className="gsap-floater absolute top-1/2 right-1/4 w-4 h-4 bg-[#00D4AA] rounded-full opacity-80 shadow-[0_0_25px_#00D4AA]"></div>
        <div className="gsap-floater absolute top-1/3 left-1/4 w-4 h-4 bg-[#00D4AA] rounded-full opacity-80 shadow-[0_0_25px_#00D4AA]"></div>
        <div className="gsap-floater absolute bottom-1/3 right-1/3 w-5 h-5 bg-[#00D4AA] rounded-full opacity-60 shadow-[0_0_30px_#00D4AA]"></div>
        <div className="gsap-floater hidden md:block absolute top-[15%] left-[15%] w-3 h-3 bg-[#00D4AA] rounded-full opacity-70 shadow-[0_0_20px_#00D4AA]"></div>
        <div className="gsap-floater hidden md:block absolute bottom-[25%] right-[15%] w-4 h-4 bg-[#00D4AA] rounded-full opacity-70 shadow-[0_0_25px_#00D4AA]"></div>
      </div>
    </div>
  );
}
