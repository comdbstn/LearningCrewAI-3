'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaUsers, FaChartLine, FaBrain } from 'react-icons/fa';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="w-16 h-16 flex items-center justify-center text-primary-600 mb-4 bg-primary-100 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const featuresData = [
    {
      title: "개인 맞춤형 학습",
      description: "각 학생의 학습 스타일, 속도, 강점 및 약점에 맞게 조정된 학습 경험을 제공합니다.",
      icon: <FaUsers size={24} />,
    },
    {
      title: "AI 기반 분석",
      description: "고급 AI 알고리즘이 학습 데이터를 분석하여 최적의 학습 경로를 추천합니다.",
      icon: <FaBrain size={24} />,
    },
    {
      title: "실시간 피드백",
      description: "즉각적인 평가와 피드백으로 학생들이 개념을 더 빠르고 효과적으로 이해할 수 있도록 돕습니다.",
      icon: <FaLaptopCode size={24} />,
    },
    {
      title: "성과 추적",
      description: "진행 상황과 개선 영역을 시각화하여 학습 목표를 향한 명확한 경로를 제시합니다.",
      icon: <FaChartLine size={24} />,
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-600">
            학습의 미래를 여는 기능들
          </span>
        </h2>
        <p className="text-gray-600 text-lg">
          Learning Crew AI는 개인 맞춤형 학습 경험을 통해 교육의 한계를 넓히는 혁신적인 기능들을 제공합니다.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            delay={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features; 