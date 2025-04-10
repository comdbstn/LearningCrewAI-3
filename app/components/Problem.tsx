'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Problem = () => {
  const problems = [
    {
      id: 1,
      title: "획일화된 학습 방식",
      description: "현재 교육 시스템은 개인의 학습 속도와 스타일을 고려하지 않고 모든 학생에게 동일한 콘텐츠와 진도를 강요합니다.",
      icon: (
        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "일방적인 학습 자료",
      description: "학습자는 단순히 정보를 받아들이는 수동적인 입장에 머물게 되어 참여도와 흥미가 감소합니다.",
      icon: (
        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "지속적인 학습 동기 부족",
      description: "전통적인 학습 방식은 학생들이 장기간 학습 동기를 유지하기 어려워 중도 포기율이 높습니다.",
      icon: (
        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 lg:mb-0"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent-600 bg-accent-50 rounded-full">
            현재 교육의 문제점
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient-accent">
              지금 교육이 직면한 한계
            </span>
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            현대 교육은 많은 발전을 이루었지만, 여전히 개인별 맞춤 학습과 지속적인 동기 부여 측면에서 큰 한계를 갖고 있습니다.
          </p>
          
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <motion.div 
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="bg-accent-50 p-3 rounded-lg mr-4">
                    {problem.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                    <p className="text-gray-600">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500 to-accent-700 rounded-2xl blur opacity-20"></div>
          <div className="relative bg-white p-3 rounded-2xl shadow-strong overflow-hidden">
            <div className="aspect-w-6 aspect-h-5 relative">
              <Image 
                src="/images/problem.jpg" 
                alt="학습의 한계와 문제점" 
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* 통계 오버레이 */}
            <motion.div 
              className="absolute top-10 right-10 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md max-w-[200px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <span className="text-3xl font-bold text-accent-600">68%</span>
                <p className="text-sm text-gray-600 mt-1">학생들이 적합하지 않은 학습 방식으로 학습 진행</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md max-w-[200px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <span className="text-3xl font-bold text-accent-600">75%</span>
                <p className="text-sm text-gray-600 mt-1">온라인 강의 중도 포기율</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Problem; 