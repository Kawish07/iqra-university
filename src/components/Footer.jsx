// Enhanced Footer Component
const Footer = () => (
  <footer className="bg-gradient-to-b from-slate-900 to-black text-white py-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-amber-400">IQRA UNIVERSITY</h3>
          <p className="text-gray-300">Shaping futures through excellence in education since 1998.</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <div className="space-y-2">
            {['About Us', 'Admissions', 'Academic Programs', 'Campus Life'].map((link) => (
              <a key={link} href="#" className="block text-gray-300 hover:text-amber-400 transition-colors duration-300">{link}</a>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Contact</h4>
          <p className="text-gray-300">Chak Shahzad Campus<br />Islamabad, Pakistan</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Follow Us</h4>
          <div className="flex space-x-4">
            {['Facebook', 'Twitter', 'LinkedIn'].map((social) => (
              <a key={social} href="#" className="text-gray-300 hover:text-amber-400 transition-all duration-300 hover:scale-125">{social}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2024 Iqra University. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
