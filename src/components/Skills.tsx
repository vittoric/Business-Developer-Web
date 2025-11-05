export function Skills() {
  const topRowSkills = [
    "Business Development",
    "Strategic Partnerships",
    "Agile Project Management"
  ];
  
  const bottomRowSkills = [
    "Open Source Technologies",
    "Business Intelligence",
    "Web Development"
  ];

  const allSkills = [...topRowSkills, ...bottomRowSkills];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-32 overflow-hidden">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-8 mb-20 text-center">
        <h2 className="text-[clamp(4rem,8vw,8rem)] font-black tracking-tighter leading-[0.85] text-black uppercase mb-8">
          AREAS OF EXPERTISE
        </h2>
        <div className="w-24 h-1 bg-[#00D4AA] mx-auto"></div>
      </div>

      {/* Mobile View - Stacked Tags */}
      <div className="md:hidden w-full px-8 space-y-6">
        {allSkills.map((skill, index) => (
          <div
            key={index}
            className="w-full px-6 py-4 bg-white border-2 border-gray-200 hover:border-[#00D4AA] transition-colors duration-500 rounded-lg shadow-sm text-center"
          >
            <span className="text-base font-black tracking-tight text-black uppercase">
              {skill}
            </span>
          </div>
        ))}
      </div>

      {/* Desktop View - Marquee Effect */}
      <div className="hidden md:block w-full">
        {/* Top Row - Moving Left */}
        <div className="relative w-full mb-8 overflow-hidden">
          <div className="flex animate-marquee-left will-change-transform gap-6">
            {/* Duplicate skills for seamless loop */}
            {[...topRowSkills, ...topRowSkills, ...topRowSkills, ...topRowSkills].map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-12 py-8 bg-white border-2 border-gray-200 hover:border-[#00D4AA] transition-colors duration-500 rounded-lg shadow-sm"
              >
                <span className="text-2xl font-black tracking-tight text-black whitespace-nowrap uppercase">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Moving Right */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee-right will-change-transform gap-6">
            {/* Duplicate skills for seamless loop */}
            {[...bottomRowSkills, ...bottomRowSkills, ...bottomRowSkills, ...bottomRowSkills].map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-12 py-8 bg-white border-2 border-gray-200 hover:border-[#00D4AA] transition-colors duration-500 rounded-lg shadow-sm"
              >
                <span className="text-2xl font-black tracking-tight text-black whitespace-nowrap uppercase">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
