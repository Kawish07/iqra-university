import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const admissionSteps = [
  {
    step: '01',
    title: 'Online Application',
    description: 'Complete your application form online with all required documents',
    icon: '📝',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    step: '02',
    title: 'Document Verification',
    description: 'Submit and verify your academic transcripts and certificates',
    icon: '📋',
    color: 'from-amber-500 to-orange-500'
  },
  {
    step: '03',
    title: 'Entry Test & Interview',
    description: 'Appear for entrance examination and personal interview',
    icon: '🎓',
    color: 'from-green-500 to-emerald-500'
  },
  {
    step: '04',
    title: 'Final Admission',
    description: 'Complete fee submission and secure your seat',
    icon: '🎉',
    color: 'from-purple-500 to-pink-500'
  }
];

const programs = [
  {
    category: 'Undergraduate Programs',
    color: 'from-blue-500 to-cyan-500',
    programs: [
      { name: 'BS Computer Science', duration: '4 Years', seats: '120' },
      { name: 'BBA (Business Administration)', duration: '4 Years', seats: '100' },
      { name: 'BS Software Engineering', duration: '4 Years', seats: '80' },
      { name: 'BS Data Science', duration: '4 Years', seats: '60' },
    ]
  },
  {
    category: 'Graduate Programs',
    color: 'from-amber-500 to-orange-500',
    programs: [
      { name: 'MS Data Science', duration: '2 Years', seats: '40' },
      { name: 'MBA', duration: '2 Years', seats: '60' },
      { name: 'MS Computer Science', duration: '2 Years', seats: '50' },
      { name: 'MS Project Management', duration: '2 Years', seats: '30' },
    ]
  },
  {
    category: 'Doctoral Programs',
    color: 'from-purple-500 to-pink-500',
    programs: [
      { name: 'PhD Computer Science', duration: '3-5 Years', seats: '15' },
      { name: 'PhD Business Administration', duration: '3-5 Years', seats: '12' },
      { name: 'PhD Management Sciences', duration: '3-5 Years', seats: '10' },
    ]
  }
];

const requirements = [
  {
    level: 'Undergraduate',
    icon: '🎒',
    color: 'from-blue-500 to-cyan-500',
    criteria: [
      'Minimum 50% marks in FSc/A-Level or equivalent',
      'Valid NIC/B-Form',
      'Entry test (where applicable)',
      'Medical fitness certificate',
      'Character certificate from previous institution'
    ]
  },
  {
    level: 'Graduate',
    icon: '🎓',
    color: 'from-amber-500 to-orange-500',
    criteria: [
      'Minimum 2.5 CGPA in Bachelor\'s degree',
      'Valid NIC',
      'GAT General/Subject test score',
      'Two academic references',
      'Statement of purpose'
    ]
  },
  {
    level: 'Doctoral',
    icon: '👨‍🎓',
    color: 'from-purple-500 to-pink-500',
    criteria: [
      'Minimum 3.0 CGPA in Master\'s degree',
      'GRE/GAT Subject test score',
      'Research proposal',
      'Three academic references',
      'Interview with admission committee'
    ]
  }
];

const Admissions = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div className="overflow-hidden">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=1200&q=80" 
            alt="Admissions Hero" 
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-[8s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-slate-900/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-white text-center px-4 max-w-6xl mx-auto">
          <div className="transform hover:scale-105 transition-all duration-700">
            <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent leading-tight animate-fade-in">
              ADMISSIONS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-200 font-light leading-relaxed max-w-4xl mx-auto">
              Begin your journey towards excellence. Discover our admission criteria, programs, 
              and step-by-step application process designed to help you succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative overflow-hidden bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-black px-10 py-4 rounded-full shadow-2xl hover:shadow-amber-400/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
                <span className="relative z-10 text-lg">START APPLICATION</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
              
              <button className="group relative overflow-hidden border-2 border-white text-white font-black px-10 py-4 rounded-full hover:text-slate-900 transition-all duration-500 transform hover:scale-110">
                <span className="relative z-10 text-lg">DOWNLOAD PROSPECTUS</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'requirements', label: 'Requirements', icon: '📋' },
              { id: 'programs', label: 'Programs', icon: '🎓' },
              { id: 'process', label: 'Application Process', icon: '📝' },
              { id: 'deadlines', label: 'Important Dates', icon: '📅' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:shadow-md'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Content Based on Active Tab */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Requirements Tab */}
          {activeTab === 'requirements' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">Admission Requirements</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Meet our comprehensive admission criteria designed to ensure you're prepared for academic success
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {requirements.map((req, i) => (
                  <div key={i} className="group relative overflow-hidden">
                    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 overflow-hidden border border-slate-200/50">
                      
                      {/* Header */}
                      <div className={`bg-gradient-to-r ${req.color} p-6 text-white relative overflow-hidden`}>
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-black">{req.level}</h3>
                          <span className="text-3xl">{req.icon}</span>
                        </div>
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-8 -translate-y-8"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <ul className="space-y-4">
                          {req.criteria.map((criterion, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-700">
                              <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm leading-relaxed">{criterion}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <button className="mt-6 w-full group/btn relative overflow-hidden bg-gradient-to-r from-slate-700 to-slate-800 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                          <span className="relative z-10">VIEW DETAILS</span>
                          <div className={`absolute inset-0 bg-gradient-to-r ${req.color} transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left`}></div>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Programs Tab */}
          {activeTab === 'programs' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">Academic Programs</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Explore our comprehensive range of undergraduate, graduate, and doctoral programs
                </p>
              </div>
              
              <div className="space-y-12">
                {programs.map((category, i) => (
                  <div key={i} className="relative">
                    <div className={`bg-gradient-to-r ${category.color} rounded-2xl p-8 text-white mb-6 relative overflow-hidden`}>
                      <h3 className="text-3xl font-black mb-2">{category.category}</h3>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.programs.map((program, idx) => (
                        <div key={idx} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border border-slate-200/50">
                          <div className="p-6">
                            <h4 className="text-xl font-black text-slate-800 mb-3">{program.name}</h4>
                            <div className="flex justify-between items-center text-sm text-slate-600 mb-4">
                              <span className="bg-slate-100 px-3 py-1 rounded-full">📅 {program.duration}</span>
                              <span className="bg-slate-100 px-3 py-1 rounded-full">👥 {program.seats} Seats</span>
                            </div>
                            <button className={`w-full group/btn relative overflow-hidden bg-gradient-to-r ${category.color} text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105`}>
                              <span className="relative z-10">APPLY NOW</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-black transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Application Process Tab */}
          {activeTab === 'process' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">Application Process</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Follow our simple four-step process to secure your admission at Iqra University
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {admissionSteps.map((step, i) => (
                  <div key={i} className="group relative">
                    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 overflow-hidden border border-slate-200/50">
                      
                      {/* Step Number */}
                      <div className={`bg-gradient-to-r ${step.color} p-6 text-white text-center relative overflow-hidden`}>
                        <div className="text-4xl mb-2">{step.icon}</div>
                        <div className="text-2xl font-black">STEP {step.step}</div>
                        <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full transform translate-x-8 -translate-y-8"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-black text-slate-800 mb-3">{step.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                        
                        <button className={`mt-4 group/btn relative overflow-hidden bg-gradient-to-r ${step.color} text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105`}>
                          <span className="relative z-10">LEARN MORE</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-black transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </button>
                      </div>
                    </div>
                    
                    {/* Connection Line */}
                    {i < admissionSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-300 to-slate-400 z-10"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Important Dates Tab */}
          {activeTab === 'deadlines' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">Important Dates</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Stay updated with key admission dates and deadlines for the academic year 2024-2025
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200/50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Spring Semester */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-black text-slate-800 border-b border-amber-400 pb-2">Spring 2025</h3>
                      
                      {[
                        { event: 'Application Opens', date: 'October 1, 2024', status: 'active' },
                        { event: 'Application Deadline', date: 'December 15, 2024', status: 'upcoming' },
                        { event: 'Entry Tests', date: 'December 20-30, 2024', status: 'upcoming' },
                        { event: 'Merit Lists', date: 'January 5, 2025', status: 'upcoming' },
                        { event: 'Classes Begin', date: 'January 20, 2025', status: 'upcoming' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50 hover:from-blue-50 hover:to-slate-50 transition-all duration-300">
                          <div className={`w-3 h-3 rounded-full ${
                            item.status === 'active' ? 'bg-green-500 animate-pulse' : 
                            item.status === 'upcoming' ? 'bg-amber-500' : 'bg-slate-400'
                          }`}></div>
                          <div className="flex-1">
                            <div className="font-semibold text-slate-800">{item.event}</div>
                            <div className="text-sm text-slate-600">{item.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Fall Semester */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-black text-slate-800 border-b border-orange-400 pb-2">Fall 2025</h3>
                      
                      {[
                        { event: 'Application Opens', date: 'April 1, 2025', status: 'future' },
                        { event: 'Application Deadline', date: 'June 30, 2025', status: 'future' },
                        { event: 'Entry Tests', date: 'July 5-15, 2025', status: 'future' },
                        { event: 'Merit Lists', date: 'July 20, 2025', status: 'future' },
                        { event: 'Classes Begin', date: 'August 15, 2025', status: 'future' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-orange-50 hover:from-orange-50 hover:to-slate-50 transition-all duration-300">
                          <div className={`w-3 h-3 rounded-full ${
                            item.status === 'active' ? 'bg-green-500 animate-pulse' : 
                            item.status === 'upcoming' ? 'bg-amber-500' : 'bg-slate-400'
                          }`}></div>
                          <div className="flex-1">
                            <div className="font-semibold text-slate-800">{item.event}</div>
                            <div className="text-sm text-slate-600">{item.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                    <h4 className="font-black text-slate-800 mb-2">⚠️ Important Note</h4>
                    <p className="text-sm text-slate-700">
                      All dates are subject to change. Please check our official website regularly for updates. 
                      Late applications may be considered on a case-by-case basis with additional fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-amber-600/20 blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="transform hover:scale-105 transition-all duration-700">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-amber-400 bg-clip-text text-transparent">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-blue-200 mb-8 font-light max-w-3xl mx-auto">
              Take the first step towards your bright future. Our admissions team is here to guide you 
              through every step of the application process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative overflow-hidden bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-black px-10 py-4 rounded-full shadow-2xl hover:shadow-amber-400/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
                <span className="relative z-10 text-lg">APPLY NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
              
              <button className="group relative overflow-hidden border-2 border-white text-white font-black px-10 py-4 rounded-full hover:text-slate-900 transition-all duration-500 transform hover:scale-110">
                <span className="relative z-10 text-lg">CONTACT ADMISSIONS</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Admissions;