import { ImageLoader } from "./ImageLoader";
import securebites from "../assets/securebites.png";
import qwak from "../assets/qwak.png";
import invoinet from "../assets/invoinet.png";
import migrant from "../assets/migrant.png";

export function LatestProjects() {
  const projects = [
    {
      title: "SecureBites Demo",
      category: "Open Gateway API",
      description: "Modern restaurant voucher system with operator-level phone verification using Open Gateway APIs, featuring vibrant dark mode with neon gradients.",
      image: securebites,
      tags: ["Open Gateway", "Number Verification", "Dark Mode"],
      link: "https://secure-bites.vercel.app/"
    },
    {
      title: "Driver Tracking Demo Solution",
      category: "Open Gateway API",
      description: "Interactive Qwak demo showcasing real-time fraud detection and security capabilities using Telefónica's Open Gateway APIs with modern fleet management design.",
      image: qwak,
      tags: ["Qwak", "Fraud Detection", "Fleet Management"],
      link: "https://demo-qwak-1zgg.vercel.app/"
    },
    {
      title: "INVOINET",
      category: "FinTech Platform",
      description: "Automated reconciliation and transaction management platform streamlining accounts receivable and treasury operations for consumer goods companies.",
      image: invoinet ,
      tags: ["FinTech", "Automation", "Treasury Management"],
      link: "https://www.invoinet.com/"
    },
    {
      title: "Web Proyecto Migrante",
      category: "Social Impact",
      description: "Community-focused platform connecting migrants with essential resources, services, and support networks across Madrid.",
      image: migrant,
      tags: ["Community", "Web Dev", "Social"],
      link: undefined
    }
  ];

  return (
    <div className="min-h-screen bg-white py-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-[clamp(4rem,8vw,8rem)] font-black tracking-tighter leading-[0.85] text-black uppercase mb-6">
            LATEST
            <br />
            PROJECTS
          </h2>
          <div className="w-24 h-1 bg-[#00D4AA]"></div>
          <p className="text-lg text-gray-600 mt-8 max-w-2xl">
            A showcase of recent work spanning API demonstrations, web development, and impactful digital solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-200 hover:border-[#00D4AA] transition-all duration-500 overflow-hidden rounded-lg"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-gray-100">
                <ImageLoader
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 bg-[#00D4AA] text-white px-4 py-2 uppercase tracking-widest">
                  <span className="text-xs">{project.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-black tracking-tight text-black mb-4 group-hover:text-[#00D4AA] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 border border-gray-300 text-gray-600 uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                {project.link ? (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#00D4AA] group-hover:text-black transition-colors duration-300"
                  >
                    <span className="text-sm uppercase tracking-widest mr-2">View Project</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                ) : (
                  <div className="flex items-center text-gray-400">
                    <span className="text-sm uppercase tracking-widest mr-2">Coming Soon</span>
                  </div>
                )}
              </div>

              {/* Decorative corner element */}
              <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute bottom-0 right-0 w-full h-full border-r-4 border-b-4 border-[#00D4AA]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
