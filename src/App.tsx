import React from 'react';
import { Phone, AtSign, Globe } from 'lucide-react';

const educationItems = [
  {
    date: '2011 - 2014',
    title: 'Lorem ipsum dolor sit amet, consec.',
    desc: 'adipiscing elit, sed diam nonummy nibh',
  },
  {
    date: '2014 - 2016',
    title: 'Lorem ipsum dolor sit amet, consec.',
    desc: 'adipiscing elit, sed diam nonummy nibh',
  },
  {
    date: '2016 - 2018',
    title: 'Lorem ipsum dolor sit amet, consec.',
    desc: 'adipiscing elit, sed diam nonummy nibh',
  },
];

const experienceItems = [
  {
    date: '2011 - 2014',
    title: 'Lorem ipsum dolor sit amet, consec.',
    desc: 'adipiscing elit, sed diam nonummy nibh',
  },
  {
    date: '2014 - 2016',
    title: 'Lorem ipsum dolor sit amet, consec.',
    desc: 'adipiscing elit, sed diam nonummy nibh',
  },
  {
    date: '2016 - 2018',
    title: 'Lorem ipsum dolor sit amet, consec.',
    desc: 'adipiscing elit, sed diam nonummy nibh',
  },
  {
    date: '2011 - 2014',
    title: 'Lorem ipsum dolor sit amet, consec.',
    desc: 'adipiscing elit, sed diam nonummy nibh',
  },
  {
    date: '2014 - 2016',
    title: 'Lorem ipsum dolor sit amet, consec.',
    desc: 'adipiscing elit, sed diam nonummy nibh',
  },
];

const SectionTitle = ({ title, className }: { title: string; className?: string }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <h2 className="font-extrabold text-sm md:text-[15px] tracking-[0.15em] text-black uppercase shrink-0">
      {title}
    </h2>
    <div className="flex-1 h-px bg-gray-300 relative ml-4">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 md:w-32 h-[3px] bg-black"></div>
    </div>
  </div>
);

const TimelineItem = ({
  date,
  title,
  desc,
  isLast,
}: {
  date: string;
  title: string;
  desc: string;
  isLast?: boolean;
}) => (
  <div className="flex group">
    <div className="w-24 md:w-28 shrink-0 pt-[2px] text-[11px] md:text-[13px] font-bold text-[#111]">
      {date}
    </div>
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="w-[10px] h-[10px] rounded-full border-2 border-gray-400 bg-[#f8f8f8] z-10 shrink-0" />
      <div className={`w-px flex-1 bg-gray-400 my-1 ${isLast ? 'hidden' : 'block'}`} />
    </div>
    <div className={`pb-8 md:pb-10 pl-2 md:pl-4 -mt-[2px] flex-1`}>
      <h3 className="font-bold text-[13px] md:text-sm text-black leading-tight">{title}</h3>
      <p className="text-[12px] md:text-[13px] text-gray-500 mt-1 leading-snug">{desc}</p>
    </div>
  </div>
);

const SkillRing = ({ label, short, percentage }: { label: string; short: string; percentage: number }) => {
  const r = 26;
  const circ = 2 * Math.PI * r;
  const offset = circ - (circ * percentage) / 100;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-[60px] h-[60px] rounded-full flex items-center justify-center">
        <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
          <circle cx="30" cy="30" r={r} fill="transparent" stroke="#ddd" strokeWidth="2" />
          <circle
            cx="30"
            cy="30"
            r={r}
            fill="transparent"
            stroke="#111"
            strokeWidth="3"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <span className="font-extrabold text-lg text-black">{short}</span>
      </div>
      <span className="text-[10px] md:text-xs text-center text-gray-700 font-medium capitalize max-w-[70px] truncate leading-tight">
        {label}
      </span>
    </div>
  );
};

export default function App() {
  return (
    <div className="container mx-auto p-0 md:p-10 lg:px-20 min-h-screen flex items-center justify-center font-sans tracking-tight">
      <div className="w-full max-w-5xl mx-auto bg-[#f8f8f8] flex flex-col md:flex-row shadow-2xl overflow-hidden shadow-black/10">
        
        {/* LEFT COLUMN */}
        <div className="w-full md:w-[40%] bg-[#0a0a0a] text-white flex flex-col relative z-0">
          
          {/* Top section with diagonal cut */}
          <div
            className="bg-[#f0f0f0] w-full"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0% 100%)' }}
          >
            <div className="px-8 pt-12 md:px-12 md:pt-16 pb-4">
              <div className="w-8 h-[5px] bg-black mb-3"></div>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-[0.05em] leading-[1.05] text-black">
                Your Name
              </h1>
            </div>
            
            {/* The underlying image container */}
            <div className="h-[350px] md:h-[450px] w-full bg-[#f0f0f0] flex items-end overflow-hidden -mt-8 relative z-0">
               {/* 
                  Using mix-blend-multiply with grayscale filters integrates a 
                  portrait seamlessly into the light background like in the reference.
                */}
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
                alt="Profile"
                className="w-[120%] h-[120%] object-cover object-top filter grayscale contrast-[1.1] opacity-90 mix-blend-multiply translate-x-[-10%]"
              />
            </div>
          </div>

          {/* Bottom section (Dark) */}
          <div className="px-8 md:px-12 pt-6 pb-12 flex-1">
            <h2 className="font-extrabold text-[13px] tracking-widest uppercase text-white mb-4">
              About Me
            </h2>
            <p className="text-[12px] md:text-[13px] text-gray-300 leading-[1.7] text-justify opacity-90">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.
            </p>

            <h2 className="font-extrabold text-[13px] tracking-widest uppercase text-white mt-12 mb-4">
              Contact
            </h2>
            
            <div className="space-y-6">
              <div>
                <p className="font-bold text-[13px] text-white">Address</p>
                <p className="text-[12px] text-gray-400 mt-2 leading-[1.6]">
                  Lorem ipsum dolor sit amet, consec-<br />
                  tetuer adipiscing elit, sed diam<br />
                  nonummy nibh euismod
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-[22px] h-[22px] rounded-full border-[1.5px] border-gray-400 flex items-center justify-center shrink-0">
                    <Phone className="w-[10px] h-[10px] text-white" />
                  </div>
                  <span className="text-[12px] text-gray-300 tracking-wide font-medium">
                    +62 000 000 000
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[22px] h-[22px] rounded-full border-[1.5px] border-gray-400 flex items-center justify-center shrink-0">
                    <AtSign className="w-[10px] h-[10px] text-white" />
                  </div>
                  <span className="text-[12px] text-gray-300 tracking-wide font-medium">
                    @yoursocialmedia
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[22px] h-[22px] rounded-full border-[1.5px] border-gray-400 flex items-center justify-center shrink-0">
                    <Globe className="w-[10px] h-[10px] text-white" />
                  </div>
                  <span className="text-[12px] text-gray-300 tracking-wide font-medium">
                    www.yourblogspot.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full md:w-[60%] bg-[#f8f8f8] text-black px-8 py-10 md:px-16 md:py-16 flex flex-col">
          
          <SectionTitle title="Education" />
          <div className="mt-8 flex flex-col">
            {educationItems.map((item, idx) => (
              <TimelineItem
                key={idx}
                {...item}
                isLast={idx === educationItems.length - 1}
              />
            ))}
          </div>

          <SectionTitle title="Experience" className="mt-6 md:mt-10" />
          <div className="mt-8 flex flex-col">
            {experienceItems.map((item, idx) => (
              <TimelineItem
                key={idx}
                {...item}
                isLast={idx === experienceItems.length - 1}
              />
            ))}
          </div>

          <SectionTitle title="Skills" className="mt-6 md:mt-10" />
          <div className="mt-8 flex justify-between gap-2 max-w-[400px]">
            <SkillRing label="Photoshop" short="Ps" percentage={80} />
            <SkillRing label="Illustration" short="Ai" percentage={65} />
            <SkillRing label="Indesign" short="Id" percentage={85} />
            <SkillRing label="Premiere" short="Pr" percentage={55} />
          </div>

          <div className="mt-12 pt-2 pb-6 md:pb-0">
            <h3 className="font-extrabold text-[13px] text-black mb-1">
              Note :
            </h3>
            <p className="text-[12px] md:text-[13px] text-gray-600 leading-relaxed font-medium">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
