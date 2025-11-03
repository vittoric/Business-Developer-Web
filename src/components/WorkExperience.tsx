export function WorkExperience() {
  const experiences = [
    {
      title: "Technical Business Development",
      company: "Telefónica Innovación Digital Open Gateway Global",
      location: "Madrid",
      period: "01/2025 - Present",
      summary: "Leading technical business development initiatives, I improved team performance by 37% through CRM optimization and conducted 25+ API demonstrations. Developed new use cases by analyzing client requirements and collaborated cross-functionally to expand Open Gateway awareness and drive product adoption across the industry."
    },
    {
      title: "Web Developer",
      company: "Nucleao Studio",
      location: "Madrid | Remote",
      period: "09/2024 - 01/2025",
      summary: "Delivered multiple customized web projects across diverse sectors including IT consulting services, venture capital, Web3 and B2B sales, improving clients' online presence through optimized loading times and enhanced user engagement."
    },
    {
      title: "Open Gateway - Strategy GTM & Partner Program",
      company: "Telefónica Innovación Digital",
      location: "Madrid | Internship",
      period: "07/2023 - 09/2024",
      summary: "Managed monthly newsletters for 2,000 subscribers and increased educational webinar attendance by 23% through content optimization. Handled Open Gateway product inquiries, providing detailed customer solutions and supporting the go-to-market strategy."
    },
    {
      title: "Project Manager",
      company: "HER DAO SPAIN",
      location: "Madrid | Decentralized Autonomous Organization",
      period: "10/2022 - 06/2023",
      summary: "Led comprehensive project management across various areas including websites and digital initiatives. Developed and tracked roadmaps to ensure efficient and timely execution of all project activities in a decentralized environment."
    },
    {
      title: "Administrator",
      company: "Lenca Tours S.L.",
      location: "Móstoles, Madrid",
      period: "08/2018 - 01/2020",
      summary: "Managed supplier relationships with Eastern European travel providers, contributing to a 60% increase in Eastern travel sales revenue and expanded regional service offerings. Handled invoicing documentation and provided customer service support."
    }
  ];

  return (
    <div id="work" className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left side - Sticky title */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="space-y-8">
              <h2 className="text-[clamp(3rem,6vw,7rem)] font-black tracking-tighter leading-[0.85] text-black uppercase">
                WORK
                <br />
                EXPERIENCE
              </h2>
              
              {/* Decorative line */}
              <div className="w-24 h-1 bg-[#00D4AA]"></div>
              
              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                A journey through innovation, strategy, and technical excellence across multiple industries and roles.
              </p>
            </div>
          </div>

          {/* Right side - Scrolling experiences */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="border-l-2 border-gray-200 pl-8 pb-12 relative group hover:border-[#00D4AA] transition-colors duration-500"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-300 rounded-full group-hover:bg-[#00D4AA] transition-colors duration-500"></div>
                
                {/* Period */}
                <div className="text-sm tracking-widest text-[#00D4AA] uppercase mb-2">
                  {exp.period}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-black text-black mb-2 tracking-tight">
                  {exp.title}
                </h3>
                
                {/* Company and Location */}
                <div className="text-sm text-gray-600 mb-4 space-y-1">
                  <div className="font-medium">{exp.company}</div>
                  <div className="text-xs tracking-wide uppercase opacity-70">{exp.location}</div>
                </div>
                
                {/* Summary */}
                <p className="text-gray-700 text-base leading-relaxed">
                  {exp.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
