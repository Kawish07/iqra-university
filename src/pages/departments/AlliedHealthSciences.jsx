
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState } from 'react';

const programs = [
  { title: 'BS Radiology Technology', description: 'Program Details', link: '#' },
  { title: 'BS Anaesthesia Technology', description: 'Program Details', link: '#' },
  { title: 'BS Medical Laboratory Technology', description: 'Program Details', link: '#' },
  { title: 'BS Optometry', description: 'Program Details', link: '#' },
  { title: 'Doctor of Physical Therapy', description: 'Program Details', link: '#' },
];

const AlliedHealthSciences = () => {
  const [tab, setTab] = useState('Vision');
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full h-[350px] flex items-center justify-center bg-gray-200">
        <img src="https://static.wixstatic.com/media/030a37_1b6178d931c048bb9a6d010c4996673c~mv2.jpg/v1/fill/w_602,h_490,al_c,lg_1,q_80,enc_avif,quality_auto/Allied%20Health%20.jpg" alt="Allied Health Sciences Students" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <div className="relative z-10 text-white text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Allied Health Sciences</h2>
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
              To foster excellence in healthcare education, equipping students with the knowledge and skills needed to excel in their respective fields. We aim to be a leader in innovation, service, and advancing healthcare practices, improving the quality of life for individuals and communities.
            </p>
          )}
          {tab === 'Mission' && (
            <p>
              Through diverse programs in Dental Technology, Optometry, Medical Laboratory Technology, Physical Therapy, Anesthesia Technology, and Radiology Technology, we prepare professionals who are compassionate, competent, and committed to lifelong learning and professional growth.
            </p>
          )}
        </div>
      </section>

      {/* Programs Grid */}
      <section className="max-w-5xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((prog, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col justify-between border border-gray-200 hover:shadow-lg transition">
              <div>
                <h4 className="font-semibold text-lg mb-2">{prog.title}</h4>
                <p className="text-gray-600 mb-4">{prog.description}</p>
              </div>
              <a href={prog.link} className="flex items-center text-blue-900 font-semibold mt-auto group">
                Program Details <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AlliedHealthSciences;
