'use client';

import React from 'react';
import { motion } from 'framer-motion';

const statsData = [
  {
    value: '85%',
    label: '학습 효율 증가',
    description: 'AI 맞춤형 학습 경로 사용자',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
      </svg>
    )
  },
  {
    value: '72%',
    label: '강좌 이수율',
    description: '일반 온라인 강좌의 3배',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  },
  {
    value: '94%',
    label: '사용자 만족도',
    description: '실시간 피드백 시스템',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
      </svg>
    )
  },
  {
    value: '45분',
    label: '평균 학습 시간 증가',
    description: '일일 학습 참여 시간',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  }
];

const Stats = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* 배경 요소 */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 transform -skew-y-6 z-0 shadow-xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 text-white"
        >
          <h2 className="mb-4">놀라운 학습 효과</h2>
          <p className="text-lg max-w-3xl mx-auto text-indigo-100">
            Learning Crew AI의 혁신적인 학습 방식으로 수치로 증명된 학습 효과를 경험하세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="p-2 bg-white/20 rounded-lg mr-4">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-1 text-white">{stat.value}</div>
                  <div className="text-lg font-semibold mb-2">{stat.label}</div>
                </div>
              </div>
              <div className="text-indigo-100 text-sm">{stat.description}</div>
              <div className="mt-4 w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-white rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: stat.value.replace('%', '') + '%' }}
                  transition={{ duration: 1.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 