'use client';

import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Stats from './components/Stats';
import Team from './components/Team';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// 현재 Testimonials 컴포넌트를 찾을 수 없어 주석 처리
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute top-0 -right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
      </div>
      
      <Navbar />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="features" className="py-20">
        <Features />
      </section>
      
      <section id="problem" className="py-20 bg-gray-50">
        <Problem />
      </section>
      
      <section id="stats" className="py-20">
        <Stats />
      </section>
      
      <section id="solution" className="py-20 bg-gray-50">
        <Solution />
      </section>
      
      <section id="testimonials" className="py-20">
        <Testimonials />
      </section>
      
      <section id="pricing" className="py-20 bg-white">
        <Pricing />
      </section>
      
      <section id="team" className="py-20 bg-gray-50">
        <Team />
      </section>
      
      <section id="cta" className="py-20">
        <CTA />
      </section>
      
      <Footer />
    </main>
  );
} 