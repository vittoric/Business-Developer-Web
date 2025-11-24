import { Linkedin, Mail, Heart, Github } from "lucide-react";
import cv from "../assets/Codreanu_Victoria_CV_EN.pdf";


export function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      {/* Main Footer Section */}
      <div className="min-h-screen flex items-center justify-center border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(3rem,8vw,7rem)] font-black tracking-tighter leading-[0.85] mb-8 uppercase">
              LET'S TALK
            </h2>
            <div className="w-24 h-1 bg-[#00D4AA] mx-auto mb-12"></div>
            <p className="text-xl md:text-2xl mb-16 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Let's collaborate on something extraordinary
            </p>
          </div>

          {/* Contact Methods */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-16">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vcodrean/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white/5 hover:bg-[#00D4AA] px-8 py-5 rounded-lg transition-all duration-300 border border-white/10 hover:border-[#00D4AA] w-full md:w-auto"
            >
              <div className="bg-[#00D4AA] group-hover:bg-white p-3 rounded-full transition-colors duration-300">
                <Linkedin className="w-6 h-6 text-black" />
              </div>
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors duration-300">
                  Connect on
                </div>
                <div className="text-white group-hover:text-white tracking-tight">
                  LinkedIn
                </div>
              </div>
            </a>

            {/* Gmail */}
            <a
              href="mailto:vicoder.tech@gmail.com"
              className="group flex items-center gap-4 bg-white/5 hover:bg-[#00D4AA] px-8 py-5 rounded-lg transition-all duration-300 border border-white/10 hover:border-[#00D4AA] w-full md:w-auto"
            >
              <div className="bg-[#00D4AA] group-hover:bg-white p-3 rounded-full transition-colors duration-300">
                <Mail className="w-6 h-6 text-black" />
              </div>
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors duration-300">
                  Email me
                </div>
                <div className="text-white group-hover:text-white tracking-tight">
                  Gmail
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/vittoric"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white/5 hover:bg-[#00D4AA] px-8 py-5 rounded-lg transition-all duration-300 border border-white/10 hover:border-[#00D4AA] w-full md:w-auto"
            >
              <div className="bg-[#00D4AA] group-hover:bg-white p-3 rounded-full transition-colors duration-300">
                <Github className="w-6 h-6 text-black" />
              </div>
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors duration-300">
                  Follow on
                </div>
                <div className="text-white group-hover:text-white tracking-tight">
                  GitHub
                </div>
              </div>
            </a>
          </div>

          {/* Resume Button */}
          <div className="flex justify-center">
            <a 
              href={cv}
              download="Codreanu_Victoria_CV.pdf"
              className="group bg-transparent border-2 border-[#00D4AA] text-[#00D4AA] hover:bg-[#00D4AA] hover:text-black px-12 py-5 tracking-widest uppercase transition-all duration-300 relative overflow-hidden inline-flex items-center"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>Get My Resume</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m0 0l-3-3m3 3l-3 3"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black py-8 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            {/* Made with love */}
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-[#00D4AA] fill-[#00D4AA]" />
              <span>with React</span>
            </div>

            {/* Copyright */}
            <div className="flex items-center gap-2">
              <span>© 2025 Victoria Codreanu</span>
              <span className="hidden md:inline">•</span>
              <span>ALL RIGHTS RESERVED</span>
            </div>
          </div>

          {/* Decorative line */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <div className="text-xs text-gray-600 uppercase tracking-widest">
              Portfolio • Technical Business Developer
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
