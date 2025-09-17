import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => (
  <>
    <Navbar />
    <section className="relative w-full h-[300px] flex items-center justify-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-2xl">
      <img src="https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=1200&q=80" alt="Contact Hero" className="absolute inset-0 w-full h-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
      <div className="relative z-10 text-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">Contact Us</h2>
        <p className="mb-4 max-w-2xl mx-auto text-blue-100 font-medium drop-shadow">Get in touch with Iqra University for admissions, queries, or support. We're here to help you!</p>
      </div>
    </section>
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">Contact Us</h2>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Campus Addresses</h2>
          <p>Main Campus: 123 University Road, Karachi</p>
          <p>North Campus: 456 College Avenue, Karachi</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Map</h2>
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded">[Map Embed Placeholder]</div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Contact Form</h2>
          <form className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Name" className="p-3 rounded border" />
            <input type="email" placeholder="Email" className="p-3 rounded border" />
            <textarea placeholder="Message" className="p-3 rounded border" rows={4}></textarea>
            <button type="submit" className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition">Send</button>
          </form>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default Contact;
