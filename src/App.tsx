import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ReferralModal from './components/ReferralModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <HeroSection onReferNowClick={() => setIsModalOpen(true)} />
        <BenefitsSection />
      </div>

      <ReferralModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Add animated confetti component here if needed */}
    </div>
  );
}

export default App;