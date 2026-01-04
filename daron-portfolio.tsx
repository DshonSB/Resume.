import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, Award, ChevronDown, Sparkles, Zap, TrendingUp } from 'lucide-react';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const skills = [
    'SQL', 'Public Relations', 'Teamwork', 'Time Management', 'Leadership',
    'Effective Communication', 'Critical Thinking', 'Customer Service',
    'Marketing Campaigns', 'Lead Generation', 'Social Media', 'Event Management',
    'Hubspot', 'Excel', 'Email Marketing', 'Brand Management', 'SEO & SEM', 'Google Analytics'
  ];

  const experience = [
    {
      title: 'Marketing Specialist',
      company: 'Life & Annuity Masters',
      period: '2020 - PRESENT',
      icon: <Sparkles />,
      duties: [
        'Created marketing campaigns for both internal agency and external clients',
        'Led backend support on company website re-design with SSO integration',
        'Designed professional high-level marketing presentations',
        'Encouraged sales and marketing relationships with partner agencies',
        'Developed and maintained prospective case status reports'
      ]
    },
    {
      title: 'Marketing Specialist',
      company: 'FFP Insurance Services',
      period: '2017-2020',
      icon: <TrendingUp />,
      duties: [
        'Developed new business by recruiting new agents and growing existing agent groups',
        'Assisted with life insurance illustrations and technical case design',
        'Successfully built relationships with key producers',
        'Improved customer campaign delivery with personalized targeting'
      ]
    },
    {
      title: 'Marketing Manager',
      company: 'Farmers Insurance Group',
      period: '2014-2017',
      icon: <Zap />,
      duties: [
        'Maintained and grew individual sales revenue goals',
        'Coordinated and executed local marketing efforts',
        'Trained agencies in sales techniques and new products',
        'Led prospecting efforts for new Property and Casualty business'
      ]
    },
    {
      title: 'Digital Marketing Manager',
      company: '360 Agency',
      period: '2012-2014',
      icon: <Briefcase />,
      duties: [
        'Daily management of agency primary social media accounts',
        'Established budgets and benchmarks for online campaigns',
        'Created comprehensive action plans for targeted viewership',
        'Developed editorial calendars to support client priorities'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <div 
        className="fixed w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-screen transition-transform duration-150"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-40 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>

      <section className="min-h-screen flex items-center justify-center relative">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px)`,
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="container mx-auto px-6 z-10 text-center relative">
          <div className="animate-fade-in">
            <div className="mb-6 inline-block">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-5xl font-bold animate-bounce">
                DO
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              DARON O'BRIEN
            </h1>
            <p className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-8 animate-pulse">
              Marketing Specialist
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <a href="tel:+3232709810" className="flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-full hover:bg-blue-500/20 hover:border-blue-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20">
                <Phone size={20} className="group-hover:rotate-12 transition-transform" /> 
                +323-270-9810
              </a>
              <a href="mailto:dshonobrien@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-full hover:bg-blue-500/20 hover:border-blue-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20">
                <Mail size={20} className="group-hover:scale-110 transition-transform" /> 
                dshonobrien@gmail.com
              </a>
              <span className="flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-full">
                <MapPin size={20} /> Los Angeles, CA
              </span>
              <a href="https://daronobrien.xyz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-full hover:bg-blue-500/20 hover:border-blue-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20">
                <Globe size={20} className="group-hover:rotate-180 transition-transform duration-500" /> 
                daronobrien.xyz
              </a>
            </div>

            <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xl font-semibold hover:scale-110 transition-transform cursor-pointer shadow-lg shadow-blue-500/50 animate-pulse">
              13+ Years of Excellence
            </div>
          </div>
          
          <ChevronDown className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce" size={40} />
        </div>
      </section>

      <section 
        ref={el => sectionRefs.current['profile'] = el}
        id="profile"
        className={`py-32 relative transition-all duration-1000 ${isVisible['profile'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-8 flex items-center gap-4">
            <div className="w-3 h-16 bg-gradient-to-b from-blue-400 to-purple-400"></div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Profile</span>
          </h2>
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-10 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
            <p className="text-xl text-gray-300 leading-relaxed">
              Dynamic Marketing Consultant with over 13 years of experience driving business growth and enhancing marketing strategies across multiple sectors. Expertise in business development, campaign management, and fostering strong relationships with partners and clients. Proven ability to elevate brand visibility and strategy through targeted outreach. Committed to delivering exceptional results by leveraging analytical skills and strategic thinking to meet and exceed revenue goals. Passionate about creating impactful marketing solutions that resonate with diverse audiences.
            </p>
          </div>
        </div>
      </section>

      <section 
        ref={el => sectionRefs.current['experience'] = el}
        id="experience"
        className={`py-32 relative transition-all duration-1000 ${isVisible['experience'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 flex items-center gap-4">
            <Briefcase className="text-blue-400 animate-bounce" size={48} />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Work Experience</span>
          </h2>
          
          <div className="space-y-10">
            {experience.map((job, index) => (
              <div 
                key={index}
                className="relative pl-16 pr-8 py-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute -left-4 top-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white animate-pulse">
                  {job.icon}
                </div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                      {job.title}
                    </h3>
                    <p className="text-2xl text-gray-300">{job.company}</p>
                  </div>
                  <span className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold mt-2 md:mt-0">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-3 text-gray-300">
                  {job.duties.map((duty, i) => (
                    <li key={i} className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="text-blue-400 mt-1 text-xl">▹</span>
                      <span className="text-lg">{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        ref={el => sectionRefs.current['skills'] = el}
        id="skills"
        className={`py-32 relative transition-all duration-1000 ${isVisible['skills'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 flex items-center gap-4">
            <Award className="text-blue-400" size={48} />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Skills</span>
          </h2>
          
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 rounded-full text-lg font-semibold hover:scale-110 hover:rotate-2 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section 
        ref={el => sectionRefs.current['education'] = el}
        id="education"
        className={`py-32 relative transition-all duration-1000 ${isVisible['education'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 flex items-center gap-4">
            <GraduationCap className="text-blue-400 animate-bounce" size={48} />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Education</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:rotate-1">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3">
                University of California, Santa Barbara
              </h3>
              <p className="text-xl text-gray-300 mb-2">Bachelor's in Communication</p>
              <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">2010-2012</p>
            </div>
            
            <div className="p-10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:rotate-1">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3">
                College of the Canyons
              </h3>
              <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">2008-2010</p>
            </div>
          </div>
        </div>
      </section>

      <section 
        ref={el => sectionRefs.current['languages'] = el}
        id="languages"
        className={`py-32 relative transition-all duration-1000 ${isVisible['languages'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Languages
          </h2>
          <div className="flex flex-wrap gap-6 text-lg">
            {['English', 'Arabic (Basic)', 'German (Basic)'].map((lang, i) => (
              <span 
                key={i}
                className="px-6 py-3 bg-blue-500/20 border border-blue-500/50 rounded-xl font-semibold hover:scale-110 hover:bg-blue-500/30 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-16 text-center border-t border-slate-800 relative">
        <p className="text-gray-400 text-lg">© 2026 Daron O'Brien. All rights reserved.</p>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}