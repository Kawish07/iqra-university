import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


import { useState } from 'react';
import { Link } from 'react-router-dom';

const programs = [
  { title: 'Fast Track UK Degree', description: 'Accelerated UK degree programs for international students.', link: '/departments/uk-qualifications/programs' },
  { title: 'International Foundation Year', description: 'Foundation year for global academic preparation.', link: '/departments/uk-qualifications/programs' },
];

const UKQualifications = () => {
  const [tab, setTab] = useState('Vision');
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full h-[350px] flex items-center justify-center bg-gray-200">
        <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1200&q=80" alt="UK Programs Students" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <div className="relative z-10 text-white text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">UK Qualifications</h2>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="max-w-5xl mx-auto mt-8">
        <div className="flex border-b border-gray-300">
          <button onClick={() => setTab('Vision')} className={`px-6 py-2 font-semibold focus:outline-none ${tab === 'Vision' ? 'bg-blue-900 text-white' : 'bg-gray-100 text-blue-900'}`}>Vision</button>
          <button onClick={() => setTab('Mission')} className={`px-6 py-2 font-semibold focus:outline-none ${tab === 'Mission' ? 'bg-blue-900 text-white' : 'bg-gray-100 text-blue-900'}`}>Mission</button>
        </div>
        <div className="bg-white p-6 shadow">
          {tab === 'Vision' && (
            <p>
              To provide international-standard education and qualifications, enabling students to pursue global academic and career opportunities.
            </p>
          )}
          {tab === 'Mission' && (
            <p>
              Our mission is to collaborate with UK institutions and offer pathways for students to achieve recognized international degrees and skills.
            </p>
          )}
        </div>
      </section>

      {/* Programs Grid */}
      <section className="max-w-5xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((prog, idx) => (
            <Link key={idx} to={prog.link} className="bg-white rounded-lg shadow p-6 flex flex-col justify-between border border-gray-200 hover:shadow-lg transition group">
              <div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-blue-900 transition">{prog.title}</h4>
                <p className="text-gray-600 mb-4">{prog.description}</p>
              </div>
              <span className="flex items-center text-blue-900 font-semibold mt-auto group-hover:translate-x-1 transition-transform">Program Details →</span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default UKQualifications;
