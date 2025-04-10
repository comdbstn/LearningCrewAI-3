'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

interface PricingTierProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  delay: number;
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  period,
  description,
  features,
  isPopular = false,
  buttonText,
  delay
}) => {
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      className={`border rounded-xl p-8 ${
        isPopular 
          ? 'border-purple-500 shadow-lg shadow-purple-100' 
          : 'border-gray-200'
      }`}
    >
      {isPopular && (
        <span className="inline-block bg-purple-500 text-white text-xs font-semibold py-1 px-3 rounded-full mb-4">
          인기 선택
        </span>
      )}
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-500 ml-2">{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
          isPopular
            ? 'bg-purple-600 hover:bg-purple-700 text-white'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
        }`}
      >
        {buttonText}
      </button>
    </motion.div>
  );
};

const Pricing = () => {
  const pricingTiers = [
    {
      title: '기본형',
      price: '무료',
      period: '평생',
      description: '개인 학습자를 위한 기본 기능',
      features: [
        '개인 학습 진도 추적',
        '기본 AI 학습 추천',
        '제한된 학습 자료 접근',
        '주간 학습 리포트'
      ],
      buttonText: '시작하기',
      isPopular: false
    },
    {
      title: '프리미엄',
      price: '₩19,900',
      period: '월',
      description: '적극적인 학습자를 위한 고급 기능',
      features: [
        '모든 기본형 기능 포함',
        '고급 AI 학습 분석',
        '무제한 학습 자료 접근',
        '1:1 AI 튜터링',
        '맞춤형 학습 계획'
      ],
      buttonText: '가입하기',
      isPopular: true
    },
    {
      title: '교육기관용',
      price: '문의',
      period: '연간 계약',
      description: '학교 및 학원을 위한 기관용 솔루션',
      features: [
        '모든 프리미엄 기능 포함',
        '다수 사용자 관리',
        '기관 맞춤형 분석 리포트',
        'API 연동 지원',
        '전담 지원 매니저'
      ],
      buttonText: '문의하기',
      isPopular: false
    }
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            심플한 요금제
          </span>
        </h2>
        <p className="text-gray-600 text-lg">
          여러분의 필요에 맞는 다양한 요금제를 제공합니다. 
          언제든지 업그레이드하거나 다운그레이드할 수 있습니다.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier, index) => (
          <PricingTier
            key={index}
            title={tier.title}
            price={tier.price}
            period={tier.period}
            description={tier.description}
            features={tier.features}
            isPopular={tier.isPopular}
            buttonText={tier.buttonText}
            delay={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing; 