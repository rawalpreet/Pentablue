import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Testimonials from './pages/Testimonials';
import Portfolio from './pages/Portfolio';
import ThreeBackground from './components/ThreeBackground';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.25, ease: 'easeIn' } },
};

const AnimatedPage = ({ children }) => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <>
      <ThreeBackground />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="about" element={<AnimatedPage><About /></AnimatedPage>} />
          <Route path="services" element={<AnimatedPage><Services /></AnimatedPage>} />
          <Route path="team" element={<AnimatedPage><Team /></AnimatedPage>} />
          <Route path="testimonials" element={<AnimatedPage><Testimonials /></AnimatedPage>} />
          <Route path="work" element={<AnimatedPage><Portfolio /></AnimatedPage>} />
          <Route path="contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
          <Route path="signup" element={<AnimatedPage><SignUp /></AnimatedPage>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
