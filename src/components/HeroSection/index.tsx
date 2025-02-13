import { motion } from 'framer-motion';
import { Gift, Users, ArrowRight, X, Medal, Trophy, Star, Award } from 'lucide-react';
import { toast } from 'react-toastify';

interface HeroSectionProps {
  onReferNowClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onReferNowClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto text-center"
    >
      <div className="relative inline-block mb-8">
        <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
        <div className="relative flex justify-center mb-8">
          <Gift className="w-24 h-24 text-indigo-600 animate-pulse" />
        </div>
      </div>

      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Share & Earn
      </h1>
      
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
        Empower your friends' learning journey and unlock exclusive rewards with every successful referral. 
        The more you share, the more you earn! 🚀
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReferNowClick}
        className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl hover:shadow-xl transition-all duration-300"
      >
        Start Referring Now
        <ArrowRight className="ml-3 w-6 h-6 animate-bounce-horizontal" />
      </motion.button>

      <div className="mt-12 flex justify-center items-center space-x-6 text-gray-600">
        <div className="flex items-center">
          <Trophy className="w-6 h-6 text-amber-500 mr-2" />
          <span>1000+ Successful Referrals</span>
        </div>
        <div className="h-6 w-px bg-gray-300" />
        <div className="flex items-center">
          <Medal className="w-6 h-6 text-rose-500 mr-2" />
          <span>5000+ Rewards Claimed</span>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;