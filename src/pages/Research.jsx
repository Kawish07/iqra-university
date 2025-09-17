
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const highlights = [
  { title: 'AI Research', description: 'Pioneering work in artificial intelligence and machine learning.' },
  { title: 'Business Innovation', description: 'Research in entrepreneurship and business strategy.' },
  { title: 'Media Studies', description: 'Exploring the impact of digital media on society.' },
];

const publications = [
  { title: 'Journal of Computer Science', link: '#' },
  { title: 'Business Review', link: '#' },
  { title: 'Media & Communication', link: '#' },
];

const Research = () => (
  <>
    <Navbar />
    <section className="relative w-full h-[300px] flex items-center justify-center bg-gray-200">
      <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80" alt="Research Hero" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
      <div className="relative z-10 text-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">RESEARCH</h2>
        <p className="mb-4 max-w-2xl mx-auto">Research highlights and publications from Iqra University.</p>
      </div>
    </section>
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Research Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {highlights.map((item, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Recent Publications</h2>
        <ul className="list-disc pl-6">
          {publications.map((pub, i) => (
            <li key={i} className="mb-2">
              <a href={pub.link} className="text-blue-900 hover:underline">{pub.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
    <Footer />
  </>
);

export default Research;
