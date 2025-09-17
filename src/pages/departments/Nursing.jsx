import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


import { useState } from 'react';
import { Link } from 'react-router-dom';

const programs = [
  { title: 'BS Nursing', description: 'Bachelor of Science in Nursing with clinical and academic training.', link: '/departments/nursing/programs' },
  { title: 'Diploma in Nursing', description: 'Diploma program for foundational nursing skills.', link: '/departments/nursing/programs' },
];

const Nursing = () => {
  const [tab, setTab] = useState('Vision');
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full h-[350px] flex items-center justify-center bg-gray-200">
        <img src="https://static.wixstatic.com/media/030a37_d6d9bcb8c4c2484da0d9387837a590e0~mv2.jpg/v1/fill/w_602,h_490,al_c,lg_1,q_80,enc_avif,quality_auto/Pharmacy%20.jpg" alt="Nursing Students" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <div className="relative z-10 text-white text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Department of Nursing</h2>
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
              To provide exceptional nursing education, preparing students for compassionate and evidence-based care in diverse healthcare settings.
            </p>
          )}
          {tab === 'Mission' && (
            <p>
              Our mission is to develop nursing professionals with strong clinical skills, ethical values, and a commitment to lifelong learning and patient advocacy.
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

export default Nursing;
