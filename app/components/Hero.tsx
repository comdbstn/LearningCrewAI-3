'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-indigo-50 py-20 md:py-32">
      {/* 백그라운드 장식 요소 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-300 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary-300 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="inline-block px-4 py-1.5 mb-4 md:mb-6 text-sm font-medium text-primary-600 bg-primary-50 rounded-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              인공지능 기반 맞춤형 학습 솔루션
            </motion.span>
            
            <h1 className="mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl">
              <span className="text-gradient-primary">AI 기반</span> 맞춤형 학습으로<br />
              <span className="text-gradient-accent">학습 효율</span>을 극대화하세요
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              개인별 최적화된 학습 경로 설계, 실시간 피드백, 자동 콘텐츠 업데이트로<br />
              여러분의 학습 여정을 혁신적으로 변화시킵니다.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                무료로 시작하기
              </motion.button>
              <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                데모 체험하기
              </motion.button>
            </div>
            
            <motion.div 
              className="mt-8 flex items-center space-x-4 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white text-xs">JS</div>
                <div className="w-8 h-8 rounded-full bg-secondary-600 flex items-center justify-center text-white text-xs">KM</div>
                <div className="w-8 h-8 rounded-full bg-accent-600 flex items-center justify-center text-white text-xs">LH</div>
              </div>
              <span>1000+ 명이 이미 시작했습니다</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl blur opacity-30"></div>
              <div className="bg-white p-2 rounded-2xl shadow-strong relative overflow-hidden">
                <div className="aspect-w-16 aspect-h-10 relative">
                  <Image 
                    src="/images/hero-dashboard.jpg" 
                    alt="AI 학습 추천 시스템 대시보드" 
                    fill
                    className="rounded-xl object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                
                {/* 떠있는 요소 */}
                <motion.div 
                  className="absolute top-6 right-6 md:top-10 md:right-10 bg-white rounded-lg p-2 md:p-3 shadow-lg"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold">맞춤형 학습</div>
                      <div className="text-xs text-gray-500">개인별 설계</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white rounded-lg p-2 md:p-3 shadow-lg"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold">AI 튜터</div>
                      <div className="text-xs text-gray-500">24/7 지원</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 