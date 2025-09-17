import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => (
  <>
    <Navbar />
    <section className="relative w-full h-[300px] flex items-center justify-center bg-gray-200">
      <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80" alt="About IU" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
      <div className="relative z-10 text-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">ABOUT IQRA UNIVERSITY</h2>
        <p className="mb-4 max-w-2xl mx-auto">Iqra University is committed to academic excellence, innovation, and leadership. Our mission is to empower students with knowledge, skills, and values to excel in a rapidly changing world.</p>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-2">Mission & Vision</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>To provide quality education and foster research.</li>
          <li>To nurture ethical leaders and responsible citizens.</li>
          <li>To achieve global recognition for academic excellence.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-2">Accreditation</h2>
        <p>Iqra University is recognized by the Higher Education Commission (HEC) and other national and international bodies.</p>
      </div>
    </section>
    <Footer />
  </>
);

export default About;
