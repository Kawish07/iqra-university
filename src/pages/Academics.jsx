import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const departments = [
    {
        title: 'Allied Health Sciences',
        image: 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=400&q=80',
        description: 'Comprehensive healthcare education programs preparing future medical professionals',
        programs: ['Physical Therapy', 'Medical Laboratory Technology', 'Radiology Technology'],
        link: '#',
    },
    {
        title: 'Pharmacy',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        description: 'Advanced pharmaceutical sciences and clinical pharmacy practice',
        programs: ['Doctor of Pharmacy', 'Clinical Pharmacy', 'Pharmaceutical Sciences'],
        link: '#',
    },
    {
        title: 'Business Administration',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
        description: 'Strategic business education for tomorrow\'s leaders and entrepreneurs',
        programs: ['MBA', 'BBA', 'Finance', 'Marketing'],
        link: '#',
    },
    {
        title: 'Computing and Technology',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
        description: 'Cutting-edge technology education and software development',
        programs: ['Computer Science', 'Software Engineering', 'AI & Machine Learning'],
        link: '#',
    },
    {
        title: 'UK Qualifications',
        image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
        description: 'International standard education with UK university partnerships',
        programs: ['UK Degree Programs', 'International Certifications', 'Exchange Programs'],
        link: '#',
    },
    {
        title: 'Nursing',
        image: 'https://static.wixstatic.com/media/030a37_d6d9bcb8c4c2484da0d9387837a590e0~mv2.jpg/v1/fill/w_602,h_490,al_c,lg_1,q_80,enc_avif,quality_auto/Pharmacy%20.jpg',
        description: 'Professional nursing education with hands-on clinical experience',
        programs: ['BSN', 'Post-RN BSN', 'Nursing Specializations'],
        link: '#',
    },
];
<>
<Navbar />
<Footer />
</>
const Academics = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState('All');

    const filters = ['All', 'Health Sciences', 'Business', 'Technology', 'International'];

    const getFilteredDepartments = () => {
        if (selectedFilter === 'All') return departments;

        const filterMap = {
            'Health Sciences': ['Allied Health Sciences', 'Pharmacy', 'Nursing'],
            'Business': ['Business Administration'],
            'Technology': ['Computing and Technology'],
            'International': ['UK Qualifications']
        };

        return departments.filter(dept => filterMap[selectedFilter]?.includes(dept.title));
    };

    return (
        <div className="overflow-hidden">
            <Navbar />

            {/* Enhanced Hero Section */}
            <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                        alt="Academics Hero"
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-[8s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-slate-900/90"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="relative z-10 text-white text-center px-4 max-w-6xl mx-auto">
                    <div className="transform hover:scale-105 transition-all duration-700">
                        <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent leading-tight animate-fade-in">
                            Departments
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-200 font-light leading-relaxed max-w-4xl mx-auto">
                            Iqra University offers outstanding student experiences across a wide spectrum of Academic Environments.
                            It is our goal to help you find a specific department/program. Get in touch with us to learn more about
                            admissions, scholarships, and financial aid opportunities.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            <button className="group relative overflow-hidden bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-black px-8 py-3 rounded-full shadow-2xl hover:shadow-amber-400/25 transition-all duration-500 transform hover:scale-110">
                                <span className="relative z-10">EXPLORE PROGRAMS</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </button>
                            <button className="group relative overflow-hidden border-2 border-white text-white font-black px-8 py-3 rounded-full hover:text-slate-900 transition-all duration-500 transform hover:scale-110">
                                <span className="relative z-10">ADMISSION INFO</span>
                                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Floating particles */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-amber-400/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-400/20 rounded-full blur-lg animate-pulse delay-500"></div>
            </section>

            {/* Enhanced Filter Section */}
            <section className="py-16 bg-gradient-to-b from-slate-100 to-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">Choose Your Path</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Discover our comprehensive range of academic programs designed to shape your future
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setSelectedFilter(filter)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${selectedFilter === filter
                                        ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg'
                                        : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:shadow-md'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Departments Grid */}
            <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {getFilteredDepartments().map((dept, i) => (
                            <div
                                key={i}
                                className="group relative overflow-hidden"
                                onMouseEnter={() => setHoveredCard(i)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 overflow-hidden border border-slate-200/50 hover:border-amber-400/50">

                                    {/* Image Section */}
                                    <div className="relative overflow-hidden h-56">
                                        <img
                                            src={dept.image}
                                            alt={dept.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Overlay content */}
                                        <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="flex flex-wrap gap-2">
                                                {dept.programs.slice(0, 2).map((program, idx) => (
                                                    <span key={idx} className="text-xs bg-white/90 text-slate-800 px-2 py-1 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                                        {program}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Floating badge */}
                                        <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform translate-x-8 group-hover:translate-x-0 transition-transform duration-500">
                                            {dept.programs.length} Programs
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6 relative">
                                        <h3 className="font-black text-xl mb-3 text-slate-800 group-hover:text-blue-900 transition-colors duration-300">
                                            {dept.title}
                                        </h3>
                                        <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                                            {dept.description}
                                        </p>

                                        {/* Programs List */}
                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-slate-700 mb-2">Programs Offered:</h4>
                                            <div className="space-y-1">
                                                {dept.programs.map((program, idx) => (
                                                    <div key={idx} className="flex items-center text-sm text-slate-600">
                                                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></div>
                                                        {program}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3">
                                            <button className="flex-1 group/btn relative overflow-hidden bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-3 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                                <span className="relative z-10">LEARN MORE</span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
                                            </button>
                                            <button className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105">
                                                INFO
                                            </button>
                                        </div>

                                        {/* Animated background elements */}
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-amber-400/10 rounded-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
                                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-amber-400/10 to-orange-400/10 rounded-full transform -translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 delay-200"></div>
                                    </div>

                                    {/* Hover glow effect */}
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                        <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-amber-400/20"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-xl text-blue-200 mb-8 font-light max-w-3xl mx-auto">
                            Join thousands of students who have chosen Iqra University as their pathway to success.
                            Apply now and take the first step towards your bright future.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <button className="group relative overflow-hidden bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-black px-10 py-4 rounded-full shadow-2xl hover:shadow-amber-400/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
                                <span className="relative z-10 text-lg">APPLY NOW</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </button>

                            <button className="group relative overflow-hidden border-2 border-white text-white font-black px-10 py-4 rounded-full hover:text-slate-900 transition-all duration-500 transform hover:scale-110">
                                <span className="relative z-10 text-lg">SCHEDULE VISIT</span>
                                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
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
            `}</style>
        </div>
    );
};

export default Academics;