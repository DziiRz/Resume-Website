import { Layout } from './components/layout/Layout';
import { HeroSection } from './components/sections/HeroSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { AboutSection } from './components/sections/AboutSection';
import { ResumeSection } from './components/sections/ResumeSection';
import { PageTransition } from './components/ui/PageTransition';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <PageTransition>
          <div className="max-w-full w-full mx-auto">
            <HeroSection />
            <PortfolioSection />
            <AboutSection />
            <ResumeSection />
          </div>
        </PageTransition>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
