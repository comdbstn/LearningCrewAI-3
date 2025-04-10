'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaComments, FaSync } from 'react-icons/fa';
import Image from 'next/image';

const solutionFeatures = [
  {
    id: 1,
    title: "AI 기반 맞춤형 학습 경로 설계",
    description: "사용자의 학습 패턴, 강점 및 약점을 분석하여 개인별 최적의 학습 경로를 자동으로 생성합니다. 학습자의 진도에 따라 실시간으로 학습 경로를 조정합니다.",
    image: "/images/solution-1.jpg",
    icon: <FaRobot className="text-primary-600 text-2xl" />,
    features: [
      "개인 학습 데이터 분석",
      "학습 진도에 따른 동적 경로 조정",
      "취약점 집중 보완 시스템"
    ],
    color: "primary"
  },
  {
    id: 2,
    title: "실시간 피드백 제공",
    description: "AI 튜터가 학습자의 질문에 즉시 응답하고, 학습 과정에서 실시간 피드백을 제공합니다. 24시간 내내 도움을 받을 수 있어 학습의 연속성을 유지할 수 있습니다.",
    image: "/images/solution-2.jpg",
    icon: <FaComments className="text-secondary-600 text-2xl" />,
    features: [
      "24/7 AI 튜터 상시 대기",
      "상세한 오답 설명 및 가이드",
      "개념 이해도 실시간 진단"
    ],
    color: "secondary"
  },
  {
    id: 3,
    title: "자동 콘텐츠 업데이트",
    description: "최신 학습 자료를 자동으로 수집하고 가공하여 항상 최신 정보로 학습할 수 있습니다. 관련 분야의 새로운 연구와 트렌드를 반영하여 시대에 뒤처지지 않는 학습 내용을 제공합니다.",
    image: "/images/solution-3.jpg",
    icon: <FaSync className="text-accent-600 text-2xl" />,
    features: [
      "최신 연구 자동 통합",
      "산업 트렌드 실시간 반영",
      "학습 자료 지속적 최적화"
    ],
    color: "accent"
  }
];

const Solution = () => {
  return (
    <section id="solution" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-secondary-600 bg-secondary-50 rounded-full">
            혁신적인 솔루션
          </span>
          <h2 className="mb-4">
            <span className="text-gradient-primary">Learning Crew.AI</span> 솔루션
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            AI 기술을 통해 학습자 개개인에게 최적화된 학습 경험을 제공합니다.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {solutionFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={index % 2 !== 0 ? "lg:col-start-2" : ""}>
                <div className="relative">
                  <div className={`absolute -inset-1 ${
                    feature.color === 'primary' 
                      ? 'bg-gradient-to-r from-primary-500 to-primary-700' 
                      : feature.color === 'secondary' 
                        ? 'bg-gradient-to-r from-secondary-500 to-secondary-700' 
                        : 'bg-gradient-to-r from-accent-500 to-accent-700'
                  } rounded-2xl blur opacity-20`}></div>
                  <div className="bg-white p-3 rounded-2xl shadow-strong relative overflow-hidden">
                    <div className="aspect-w-16 aspect-h-9 relative">
                      <Image 
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="rounded-xl object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={index % 2 !== 0 ? "lg:col-start-1" : ""}>
                <div className="flex flex-col sm:flex-row sm:items-start mb-6">
                  <div className={`p-4 rounded-xl ${
                    feature.color === 'primary' 
                      ? 'bg-primary-50' 
                      : feature.color === 'secondary' 
                        ? 'bg-secondary-50' 
                        : 'bg-accent-50'
                  } mr-0 sm:mr-5 mb-4 sm:mb-0 flex-shrink-0 flex items-center justify-center`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {feature.features.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center bg-white p-3 rounded-lg shadow-soft"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-8 h-8 rounded-full bg-${feature.color}-100 flex items-center justify-center mr-3`}>
                        <svg className={`w-4 h-4 text-${feature.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution; 