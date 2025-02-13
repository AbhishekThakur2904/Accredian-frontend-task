import React, { useState } from "react";
import { X } from "lucide-react";
import { toast } from "react-toastify";
import { useSubmitReferralMutation } from "../../services/ReferralApi";
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

interface ReferralForm {
  referrerName: string;
  referrerEmail: string;
  refereeName: string;
  refereeEmail: string;
  course: string;
}

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReferralModal: React.FC<ReferralModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReferralForm>({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    course: "",
  });

  const [errors, setErrors] = useState<Partial<ReferralForm>>({});
  const [submitReferral, { isLoading }] = useSubmitReferralMutation();

  const validateForm = () => {
    const newErrors: Partial<ReferralForm> = {};
    if (!formData.referrerName) newErrors.referrerName = "Required";
    if (!formData.referrerEmail) {
      newErrors.referrerEmail = "Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.referrerEmail)) {
      newErrors.referrerEmail = "Invalid email";
    }
    if (!formData.refereeName) newErrors.refereeName = "Required";
    if (!formData.refereeEmail) {
      newErrors.refereeEmail = "Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.refereeEmail)) {
      newErrors.refereeEmail = "Invalid email";
    }
    if (!formData.course) newErrors.course = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await submitReferral(formData).unwrap();
        toast.success(response.message);
        setFormData({
          referrerName: "",
          referrerEmail: "",
          refereeName: "",
          refereeEmail: "",
          course: "",
        });
        onClose();
      } catch (error: any) {
        toast.error(error.data?.message || "Failed to submit referral");
      }
    } else {
      toast.error("Please fill out all required fields.");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ReferralForm]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (!isOpen) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Refer a Friend</h2>
          <p className="text-gray-600">Help your friend start their learning journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Details
            </label>
            <div className="space-y-4">
              <input
                type="text"
                name="referrerName"
                value={formData.referrerName}
                onChange={handleInputChange}
                placeholder="Your full name"
                className={`w-full px-4 py-3 border ${
                  errors.referrerName ? 'border-red-500' : 'border-gray-200'
                } rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
              />
              <input
                type="email"
                name="referrerEmail"
                value={formData.referrerEmail}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className={`w-full px-4 py-3 border ${
                  errors.referrerEmail ? 'border-red-500' : 'border-gray-200'
                } rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Friend's Details
            </label>
            <div className="space-y-4">
              <input
                type="text"
                name="refereeName"
                value={formData.refereeName}
                onChange={handleInputChange}
                placeholder="Friend's full name"
                className={`w-full px-4 py-3 border ${
                  errors.refereeName ? 'border-red-500' : 'border-gray-200'
                } rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
              />
              <input
                type="email"
                name="refereeEmail"
                value={formData.refereeEmail}
                onChange={handleInputChange}
                placeholder="friend.email@example.com"
                className={`w-full px-4 py-3 border ${
                  errors.refereeEmail ? 'border-red-500' : 'border-gray-200'
                } rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Course
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
            >
              <option value="">Choose a course</option>
              <option value="react">React Masterclass</option>
              <option value="node">Node.js Professional</option>
              <option value="python">Python Fundamentals</option>
              <option value="ai">AI & Machine Learning</option>
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Submitting...</span>
              </div>
            ) : (
              'Submit Referral'
            )}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ReferralModal;
