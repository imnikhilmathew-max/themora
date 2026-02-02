import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { RecommendationsPage } from './components/pages/RecommendationsPage';
import { BlogPage } from './components/pages/BlogPage';
import { ArticlePage } from './components/pages/ArticlePage';
import { PrivacyPolicyPage } from './components/pages/PrivacyPolicyPage';
import { AffiliateDisclosurePage } from './components/pages/AffiliateDisclosurePage';
import { DisclaimerPage } from './components/pages/DisclaimerPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#FEFEFE]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/recommendations" element={<RecommendationsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<ArticlePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/affiliate-disclosure" element={<AffiliateDisclosurePage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}