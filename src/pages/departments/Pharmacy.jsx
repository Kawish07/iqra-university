import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


import { useState } from 'react';
import { Link } from 'react-router-dom';

const programs = [
  { title: 'Pharm D', description: 'Doctor of Pharmacy program focused on clinical and community pharmacy.', link: '/departments/pharmacy/programs' },
  { title: 'Diploma in Pharmacy Practice', description: 'Practical training for pharmacy professionals.', link: '/departments/pharmacy/programs' },
];

const Pharmacy = () => {
  const [tab, setTab] = useState('Vision');
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full h-[350px] flex items-center justify-center bg-gray-200">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" alt="Pharmacy Students" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <div className="relative z-10 text-white text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Department of Pharmacy</h2>
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
              To provide high-quality pharmacy education, preparing students for leadership roles in clinical, community, and research settings. We strive for innovation and excellence in pharmaceutical sciences.
            </p>
          )}
          {tab === 'Mission' && (
            <p>
              Our mission is to advance pharmacy practice and research, fostering professionals who are ethical, knowledgeable, and committed to improving patient care and public health.
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

export default Pharmacy;
