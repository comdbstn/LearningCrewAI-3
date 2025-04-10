'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: '홈', href: '/' },
    { name: '주요 기능', href: '#features' },
    { name: '왜 필요한가', href: '#problem' },
    { name: '솔루션', href: '#solution' },
    { name: '팀 소개', href: '#team' },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: '서울특별시 강남구 테헤란로 123, 러닝크루 타워 8층' },
    { icon: <FaEnvelope />, text: 'contact@learningcrew.ai' },
    { icon: <FaPhone />, text: '02-123-4567' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook size={22} />, href: '#' },
    { name: 'Twitter', icon: <FaTwitter size={22} />, href: '#' },
    { name: 'Instagram', icon: <FaInstagram size={22} />, href: '#' },
    { name: 'YouTube', icon: <FaYoutube size={22} />, href: '#' },
    { name: 'LinkedIn', icon: <FaLinkedin size={22} />, href: '#' },
  ];

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-gray-900 text-white">
      {/* 장식적 요소 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-800 rounded-full filter blur-3xl opacity-10 -mt-20 -mr-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-800 rounded-full filter blur-3xl opacity-10 -mb-40 -ml-40"></div>
      
      <div className="container-custom relative z-10">
        {/* 상단 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {/* 회사 정보 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-1">
                <span className="text-gradient-primary">LEARNING CREW</span>
                <span className="text-gradient-accent">.AI</span>
              </h3>
              <div className="h-1 w-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mt-2"></div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI 기반 맞춤형 학습 경로 설계를 통해 개인별 최적의 학습 경험을 제공합니다. 학습의 효율성과 지속성을 높이는 혁신적인 솔루션을 경험하세요.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-2.5 rounded-full text-gray-300 hover:text-white hover:bg-primary-600 transition-all duration-300"
                  whileHover={{ y: -3 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* 빠른 링크 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">바로가기</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors flex items-center group">
                    <FaChevronRight className="mr-2 text-xs text-primary-400 group-hover:text-primary-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* 연락처 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">연락처</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent-400 mt-1 mr-3">{info.icon}</span>
                  <span className="text-gray-300">{info.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* 하단 섹션 */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-center items-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Learning Crew AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 