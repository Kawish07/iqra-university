import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Suspense, lazy } from 'react';

const Card = lazy(() => import('../components/Card'));

const departments = [
  { title: 'Computer Science', description: 'Innovative research and teaching in computing.', image: '', link: '#' },
  { title: 'Business Administration', description: 'Developing future business leaders.', image: '', link: '#' },
  { title: 'Media Sciences', description: 'Creative programs in media and communication.', image: '', link: '#' },
];

const Faculties = () => (
  <>
    <Navbar />
    <section className="relative w-full h-[300px] flex items-center justify-center bg-gray-200">
      <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80" alt="Faculties Hero" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
      <div className="relative z-10 text-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">FACULTIES & DEPARTMENTS</h2>
        <p className="mb-4 max-w-2xl mx-auto">Explore the faculties and departments at Iqra University.</p>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Faculties & Departments</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, i) => (
              <Card key={i} {...dept} />
            ))}
          </div>
        </Suspense>
      </div>
    </section>
    <Footer />
  </>
);

export default Faculties;
