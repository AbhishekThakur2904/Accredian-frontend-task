import React from 'react';
import { Gift, Users, ArrowRight, X, Medal, Trophy, Star, Award } from 'lucide-react';
import {motion} from 'framer-motion';

const benefits = [
  {
    icon: Gift,
    title: "Exclusive Rewards",
    description: "Earn points redeemable for courses, merch, and cash bonuses",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    icon: Users,
    title: "Community Growth",
    description: "Help build a learning community & get leaderboard perks",
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    icon: Award,
    title: "Achievement Badges",
    description: "Unlock special badges and recognition in our network",
    color: "bg-amber-100 text-amber-600"
  }
];
const BenefitsSection: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
          Why Participate?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Rewards Tier System */}
        <div className="mt-20 bg-indigo-900 rounded-3xl p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Star className="w-8 h-8 text-amber-400 mr-3" />
              <h3 className="text-2xl font-bold">Rewards Tier System</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between bg-white/10 p-4 rounded-xl">
                <div className="flex items-center">
                  <Medal className="w-6 h-6 text-amber-400 mr-3" />
                  <span>Bronze Tier (5+ referrals)</span>
                </div>
                <div className="w-1/3 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-amber-500 h-2.5 rounded-full w-3/4" />
                </div>
              </div>

              <div className="flex items-center justify-between bg-white/10 p-4 rounded-xl">
                <div className="flex items-center">
                  <Medal className="w-6 h-6 text-gray-300 mr-3" />
                  <span>Silver Tier (15+ referrals)</span>
                </div>
                <div className="w-1/3 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gray-300 h-2.5 rounded-full w-1/2" />
                </div>
              </div>

              <div className="flex items-center justify-between bg-white/10 p-4 rounded-xl">
                <div className="flex items-center">
                  <Medal className="w-6 h-6 text-yellow-400 mr-3" />
                  <span>Gold Tier (30+ referrals)</span>
                </div>
                <div className="w-1/3 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-400 h-2.5 rounded-full w-1/4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;