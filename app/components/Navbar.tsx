'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: '/' });
  };

  const menuLinks = [
    { href: "#features", label: "기능" },
    { href: "#problem", label: "솔루션" },
    { href: "#testimonials", label: "후기" },
    { href: "#pricing", label: "가격" },
    { href: "#team", label: "팀" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="relative z-10">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-bold text-gradient-primary">LEARNING CREW</span>
              <span className="text-gradient-accent font-bold text-2xl">.AI</span>
            </motion.div>
          </div>
        </Link>
        
        {/* 모바일 메뉴 토글 버튼 */}
        <div className="md:hidden">
          <button 
            className="p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="메뉴 토글"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl text-gray-700" />
            ) : (
              <FaBars className="text-2xl text-gray-700" />
            )}
          </button>
        </div>
        
        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex items-center space-x-1">
          <div className="hidden md:flex space-x-1">
            {menuLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link 
                  href={link.href}
                  className="px-4 py-2 text-gray-700 hover:text-primary-600 rounded-md transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="flex space-x-3 ml-6">
            {session ? (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/dashboard" 
                  className="text-primary-600 hover:text-primary-800 transition-colors"
                >
                  대시보드
                </Link>
                <span className="text-gray-700 font-semibold">{session.user?.name}</span>
                <button 
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <Link 
                href="/login" 
                className="px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
              >
                로그인
              </Link>
            )}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="btn-primary">
                시작하기
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* 모바일 메뉴 (슬라이드다운) */}
      <motion.div
        className={`absolute top-full left-0 right-0 bg-white shadow-md md:hidden overflow-hidden`}
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-custom py-5 flex flex-col space-y-3">
          {menuLinks.map((link, index) => (
            <Link 
              key={index}
              href={link.href}
              className="px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col space-y-3 pt-3 border-t border-gray-100">
            {session ? (
              <div className="pt-2 border-t border-gray-200">
                <p className="text-gray-700 mb-2">{session.user?.name}님</p>
                <Link 
                  href="/dashboard" 
                  className="block text-primary-600 hover:text-primary-800 mb-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  대시보드
                </Link>
                <button 
                  onClick={handleLogout}
                  className="w-full px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <Link 
                href="/login" 
                className="w-full px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                로그인
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 