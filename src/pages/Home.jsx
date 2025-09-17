import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const departments = [
  { title: 'Allied Health Sciences', image: 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=400&q=80' },
  { title: 'Nursing', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
  { title: 'Business Administration', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80' },
  { title: 'Computing and Technology', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80' },
  { title: 'UK Qualifications', image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80' },
];

const campusLife = [
  'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
];

const Home = () => (
  <div className="overflow-hidden">
    <Navbar />
    
    {/* Enhanced Hero Section */}
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://static.wixstatic.com/media/030a37_5b03e496fed24c02bed4503c66a09c28~mv2.jpg/v1/fill/w_1476,h_502,al_c,q_85,enc_avif,quality_auto/Main-Banner%20.jpg" 
          alt="Iqra University Campus" 
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-[10s] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-slate-900/70 to-blue-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-white text-center px-4 max-w-5xl mx-auto">
        <div className="transform hover:scale-105 transition-all duration-700">
          <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-amber-400 bg-clip-text text-transparent leading-tight animate-fade-in">
            TOP RANKED UNIVERSITY
            <span className="block text-3xl md:text-5xl mt-2">OF PAKISTAN</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-200 font-light tracking-wide">
            BECOME A PART OF ONE OF THE TOP RANKED UNIVERSITIES IN PAKISTAN
          </p>
          <button className="group relative overflow-hidden bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-black px-10 py-4 rounded-full shadow-2xl hover:shadow-amber-400/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
            <span className="relative z-10 text-lg">APPLY NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-amber-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>

    {/* Enhanced Welcome Section */}
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-amber-400 to-blue-500"></div>
      
      <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
        <div className="transform hover:scale-105 transition-all duration-700">
          <h3 className="text-lg font-semibold mb-2 text-blue-600 uppercase tracking-widest">Welcome to</h3>
          <h2 className="text-3xl md:text-5xl font-black mb-8 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent leading-tight">
            Iqra University Chak Shahzad Campus, Islamabad
          </h2>
          <p className="text-lg md:text-xl mb-8 text-slate-700 leading-relaxed max-w-4xl mx-auto font-light">
            Since 1998, we have been committed to delivering high-quality education that shapes the future of our students. 
            At our campus, we place you at the center of an exceptional academic journey, complemented by a vibrant and enriching campus life.
          </p>
          <button className="group relative overflow-hidden border-2 border-slate-800 px-8 py-3 rounded-full text-slate-800 font-semibold hover:text-white transition-all duration-500 transform hover:scale-105 hover:shadow-lg">
            <span className="relative z-10">READ MORE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-transparent rounded-full blur-3xl transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-l from-amber-200/20 to-transparent rounded-full blur-3xl transform -translate-y-1/2"></div>
    </section>

    {/* Enhanced Departments Section */}
    <section className="py-20 bg-gradient-to-b from-slate-100 to-slate-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">OUR DEPARTMENTS</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover world-class academic programs designed to shape tomorrow's leaders
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, i) => (
            <a 
              key={i} 
              href={`#departments-${dept.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} 
              className="group relative overflow-hidden"
            >
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={dept.image} 
                    alt={dept.title} 
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 text-center relative">
                  <h3 className="font-black text-xl mb-4 text-slate-800 group-hover:text-blue-900 transition-colors duration-300">
                    {dept.title}
                  </h3>
                  <span className="inline-block bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
                    EXPLORE MORE
                  </span>
                  
                  {/* Animated background element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-amber-400/20 rounded-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Enhanced Life at IQRA Section */}
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">Life at IQRA</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Maximize your university experience with a range of extracurricular activities. From sports and clubs to cultural events 
            and community service opportunities, Iqra University provides the perfect platform for you to get involved, broaden your horizons, and make a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {campusLife.map((img, i) => (
            <div 
              key={i} 
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              <img 
                src={img} 
                alt="Campus Life" 
                className="h-32 w-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-2">
                <span className="text-white text-xs font-semibold">Campus Life</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Enhanced Call to Action Section */}
    <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=1200&q=80" 
          alt="Where Your Future Begins" 
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-[8s] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-slate-900/80 to-blue-900/90"></div>
      </div>
      
      <div className="relative z-10 text-white text-center px-4">
        <div className="transform hover:scale-105 transition-all duration-700">
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
            WHERE YOUR FUTURE BEGINS!
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-200 font-light">
            Join Iqra University for a world-class education that shapes your tomorrow.
          </p>
          <button className="group relative overflow-hidden bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-black px-12 py-4 rounded-full shadow-2xl hover:shadow-amber-400/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
            <span className="relative z-10 text-xl">APPLY NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>
    </section>

    {/* Enhanced Messages Section */}
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-slate-800">OUR MESSAGES</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {[
            {
              message: "We know that students of today are the leaders of tomorrow. Thus, we here at Iqra University provide an environment where we foster well-rounded, well-groomed individuals who are competent to take on challenges in life and meet them with success.",
              name: "Haji Muhammad Hussain Lakhani (Late)",
              title: "Founding Chancellor"
            },
            {
              message: "IU has been playing a pivotal role in the higher education sector. I pray that Iqra University keeps producing leaders for their nation in a befitting manner.",
              name: "Prof. Dr. Nassar Ikram",
              title: "Vice Chancellor"
            }
          ].map((person, i) => (
            <div key={i} className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              
              <p className="text-lg text-slate-700 mb-8 leading-relaxed italic font-light">
                "{person.message}"
              </p>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-500">
                  <span className="text-white font-black text-xl">{person.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div>
                  <div className="font-black text-slate-800 text-lg">{person.name}</div>
                  <div className="text-blue-600 font-semibold">{person.title}</div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-100/50 to-transparent rounded-full transform translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Enhanced Newsletter Section */}
    <section className="py-16 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-black mb-8 text-white">Stay Connected With Us</h3>
        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-4xl mx-auto">
          {[
            { type: 'text', placeholder: 'Full Name' },
            { type: 'email', placeholder: 'Email Address' },
            { type: 'tel', placeholder: 'Phone Number' }
          ].map((input, i) => (
            <input 
              key={i}
              type={input.type} 
              placeholder={input.placeholder} 
              className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white placeholder-white/70 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 hover:bg-white/20"
            />
          ))}
          <button 
            type="button" 
            className="group relative overflow-hidden bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 px-8 py-4 rounded-xl font-black hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">SUBSCRIBE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
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
      
      .bg-grid-pattern {
        background-image: radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px);
        background-size: 20px 20px;
      }
    `}</style>
  </div>
);

export default Home;