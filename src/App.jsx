import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Faculties from './pages/Faculties';
import Research from './pages/Research';
import NewsEvents from './pages/NewsEvents';
import Contact from './pages/Contact';
import Academics from './pages/Academics';
import AlliedHealthSciences from './pages/departments/AlliedHealthSciences';
import Pharmacy from './pages/departments/Pharmacy';
import BusinessAdministration from './pages/departments/BusinessAdministration';
import ComputingTechnology from './pages/departments/ComputingTechnology';
import UKQualifications from './pages/departments/UKQualifications';
import Nursing from './pages/departments/Nursing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/academics" element={<Academics />} />
  <Route path="/departments/allied-health-sciences" element={<AlliedHealthSciences />} />
  <Route path="/departments/pharmacy" element={<Pharmacy />} />
  <Route path="/departments/business-administration" element={<BusinessAdministration />} />
  <Route path="/departments/computing-technology" element={<ComputingTechnology />} />
  <Route path="/departments/uk-qualifications" element={<UKQualifications />} />
  <Route path="/departments/nursing" element={<Nursing />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculties" element={<Faculties />} />
        <Route path="/research" element={<Research />} />
        <Route path="/news-events" element={<NewsEvents />} />
        <Route path="/contact" element={<Contact />} />
        {/* Fallback route for unmatched paths */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
