'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="relative rounded-2xl overflow-hidden">
        {/* 배경 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800"></div>
        
        {/* 장식적 요소 */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 -mt-10 -mr-10"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full filter blur-3xl opacity-10 -mb-20 -ml-20"></div>
        
        <div className="relative py-16 px-6 md:py-20 md:px-12 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="mb-8 md:mb-0 text-center md:text-left md:w-3/5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                지금 Learning Crew AI를 시작하세요
              </h2>
              <p className="text-lg text-indigo-100 max-w-2xl">
                맞춤형 학습 경험을 통해 여러분의 잠재력을 최대한 발휘하세요. 무료 체험으로 시작하고 학습 혁명에 동참하세요.
              </p>
            </motion.div>
            
            <motion.div
              className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
                무료로 시작하기
              </button>
              <button className="px-8 py-4 bg-primary-700 text-white font-semibold rounded-xl border border-primary-400 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
                문의하기
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA; 