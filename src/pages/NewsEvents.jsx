import React, { useState, Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Card = lazy(() => import('../components/Card'));

const newsEvents = [
  { 
    title: 'Convocation 2025', 
    description: 'Join us for the annual convocation ceremony celebrating our graduates achievements and academic excellence.', 
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80',
    date: 'March 15, 2025',
    category: 'Academic Event',
    link: '#' 
  },
  { 
    title: 'Research Symposium 2025', 
    description: 'Showcasing cutting-edge student and faculty research across all departments and disciplines.', 
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    date: 'April 20, 2025',
    category: 'Research',
    link: '#' 
  },
  { 
    title: 'Admissions Open Fall 2025', 
    description: 'Applications are now open for Fall 2025 intake. Apply now and secure your future with us.', 
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80',
    date: 'April 1, 2025',
    category: 'Admissions',
    link: '#' 
  },
  { 
    title: 'International Conference on AI', 
    description: 'Leading experts from around the world discuss the future of artificial intelligence and machine learning.', 
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80',
    date: 'May 10, 2025',
    category: 'Conference',
    link: '#' 
  },
  { 
    title: 'Student Achievement Awards', 
    description: 'Recognizing outstanding academic performance and extracurricular achievements of our students.', 
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80',
    date: 'February 28, 2025',
    category: 'Awards',
    link: '#' 
  },
  { 
    title: 'Career Fair 2025', 
    description: 'Connect with top employers and explore career opportunities across various industries.', 
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80',
    date: 'March 25, 2025',
    category: 'Career',
    link: '#' 
  },
  { 
    title: 'Sports Week Championship', 
    description: 'Annual inter-department sports competitions promoting health, fitness, and team spirit.', 
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=400&q=80',
    date: 'April 5, 2025',
    category: 'Sports',
    link: '#' 
  },
  { 
    title: 'Innovation & Entrepreneurship Summit', 
    description: 'Inspiring the next generation of entrepreneurs with success stories and startup opportunities.', 
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400&q=80',
    date: 'May 15, 2025',
    category: 'Innovation',
    link: '#' 
  },
  { 
    title: 'Cultural Festival 2025', 
    description: 'Celebrating diversity and cultural richness through music, dance, and traditional performances.', 
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80',
    date: 'April 30, 2025',
    category: 'Cultural',
    link: '#' 
  }
];

const categories = ['All', 'Academic Event', 'Research', 'Admissions', 'Conference', 'Awards', 'Career', 'Sports', 'Innovation', 'Cultural'];

const NewsEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = newsEvents.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category) => {
    const colors = {
      'Academic Event': 'from-blue-500 to-cyan-500',
      'Research': 'from-purple-500 to-pink-500',
      'Admissions': 'from-green-500 to-emerald-500',
      'Conference': 'from-amber-500 to-orange-500',
      'Awards': 'from-yellow-500 to-amber-500',
      'Career': 'from-indigo-500 to-blue-500',
      'Sports': 'from-red-500 to-pink-500',
      'Innovation': 'from-teal-500 to-cyan-500',
      'Cultural': 'from-violet-500 to-purple-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="overflow-hidden">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=1200&q=80" 
            alt="News & Events Hero" 
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-[8s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-slate-900/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-white text-center px-4 max-w-6xl mx-auto">
          <div className="transform hover:scale-105 transition-all duration-700">
            <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent leading-tight animate-fade-in">
              NEWS & EVENTS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-200 font-light leading-relaxed max-w-4xl mx-auto">
              Stay connected with the latest happenings, achievements, and upcoming events at Iqra University. 
              Discover opportunities to engage, learn, and celebrate with our vibrant community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative overflow-hidden bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-black px-10 py-4 rounded-full shadow-2xl hover:shadow-amber-400/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
                <span className="relative z-10 text-lg">VIEW UPCOMING EVENTS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
              
              <button className="group relative overflow-hidden border-2 border-white text-white font-black px-10 py-4 rounded-full hover:text-slate-900 transition-all duration-500 transform hover:scale-110">
                <span className="relative z-10 text-lg">SUBSCRIBE TO UPDATES</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-gradient-to-b from-slate-100 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">Discover What's Happening</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Filter through our events and news to find exactly what interests you
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search news and events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl shadow-lg focus:border-amber-400 focus:outline-none focus:shadow-2xl transition-all duration-300 text-slate-700 placeholder-slate-500"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-amber-500 transition-colors duration-300">
                🔍
              </div>
            </div>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg'
                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced News & Events Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Suspense fallback={
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-amber-500"></div>
            </div>
          }>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredEvents.map((item, i) => (
                <div 
                  key={i} 
                  className="group relative overflow-hidden transform hover:scale-105 hover:-translate-y-3 transition-all duration-700"
                >
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden border border-slate-200/50 hover:border-amber-400/50 transition-all duration-500">
                    
                    {/* Image Section */}
                    <div className="relative overflow-hidden h-56">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Category Badge */}
                      <div className={`absolute top-4 left-4 bg-gradient-to-r ${getCategoryColor(item.category)} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                        {item.category}
                      </div>
                      
                      {/* Date Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 text-slate-800 text-xs font-semibold px-3 py-1 rounded-full shadow-lg transform translate-x-8 group-hover:translate-x-0 transition-transform duration-500">
                        📅 {item.date}
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <button className="bg-white text-slate-800 px-6 py-2 rounded-full font-semibold shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                          Read More
                        </button>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 relative">
                      <h3 className="font-black text-xl mb-3 text-slate-800 group-hover:text-blue-900 transition-colors duration-300 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed text-sm line-clamp-3">
                        {item.description}
                      </p>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className={`flex-1 group/btn relative overflow-hidden bg-gradient-to-r ${getCategoryColor(item.category)} text-white px-4 py-3 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                          <span className="relative z-10">READ MORE</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-black transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </button>
                        <button className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105">
                          SHARE
                        </button>
                      </div>
                      
                      {/* Animated background elements */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-amber-400/10 rounded-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className={`absolute inset-0 rounded-2xl shadow-2xl shadow-amber-400/20`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Suspense>
          
          {/* No Results Message */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-2xl font-black text-slate-800 mb-2">No Events Found</h3>
              <p className="text-slate-600">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {setSelectedCategory('All'); setSearchTerm('');}}
                className="mt-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-amber-600/20 blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="transform hover:scale-105 transition-all duration-700">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-amber-400 bg-clip-text text-transparent">
              Never Miss an Update
            </h2>
            <p className="text-xl text-blue-200 mb-8 font-light max-w-3xl mx-auto">
              Subscribe to our newsletter and be the first to know about upcoming events, 
              important announcements, and exciting opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
              />
              <button className="group relative overflow-hidden bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 px-8 py-4 rounded-xl font-black hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <span className="relative z-10">SUBSCRIBE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-amber-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
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
          background-image: radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default NewsEvents;