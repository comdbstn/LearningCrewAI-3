'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const teamMembers = [
  {
    name: '김지영',
    role: 'COO (마케팅/개발)',
    image: '/images/team-1.jpg',
    description: '10년 이상의 IT 마케팅 경력과 AI 기반 서비스 개발 경험을 가지고 있습니다.',
    links: {
      linkedin: '#',
      twitter: '#',
      github: '#',
      email: 'jiyoung@learningcrew.ai'
    },
    color: 'primary'
  },
  {
    name: '박민호',
    role: '세일즈팀장 (플랫폼 세일즈)',
    image: '/images/team-2.jpg',
    description: '교육 산업에서 7년 이상의 B2B 세일즈 경험을 바탕으로 기관과의 협력을 주도합니다.',
    links: {
      linkedin: '#',
      twitter: '#',
      github: '#',
      email: 'minho@learningcrew.ai'
    },
    color: 'secondary'
  },
  {
    name: '이서연',
    role: '콘텐츠기획자',
    image: '/images/team-3.jpg',
    description: '교육 콘텐츠 전문가로서 수준 높은 학습 자료 큐레이션 및 품질 관리를 담당합니다.',
    links: {
      linkedin: '#',
      twitter: '#',
      github: '#',
      email: 'seoyeon@learningcrew.ai'
    },
    color: 'primary'
  },
  {
    name: '정현우',
    role: '데이터분석가',
    image: '/images/team-4.jpg',
    description: '머신러닝 전문가로 학습자 데이터 분석 및 AI 알고리즘 최적화를 담당합니다.',
    links: {
      linkedin: '#',
      twitter: '#',
      github: '#',
      email: 'hyunwoo@learningcrew.ai'
    },
    color: 'accent'
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary-600 bg-primary-50 rounded-full">
            우리 팀 소개
          </span>
          <h2 className="mb-4">
            <span className="text-gradient-primary">전문가</span> 팀 소개
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            교육, 기술, 마케팅 분야의 전문가들이 모여 최고의 학습 경험을 만들어갑니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative mb-5 overflow-hidden rounded-2xl">
                <div className={`absolute inset-0 ${
                  member.color === 'primary' 
                    ? 'bg-gradient-to-tr from-primary-600 to-primary-400' 
                    : member.color === 'secondary' 
                      ? 'bg-gradient-to-tr from-secondary-600 to-secondary-400' 
                      : 'bg-gradient-to-tr from-accent-600 to-accent-400'
                } opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative aspect-[3/4] bg-gray-200 group-hover:scale-105 transition-transform duration-500 ease-out">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover object-center"
                    style={{ objectPosition: 'top' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-lg shadow-soft transform translate-y-0 group-hover:-translate-y-10 transition-transform duration-300 ease-out">
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className={`text-sm ${
                      member.color === 'primary'
                        ? 'text-primary-600'
                        : member.color === 'secondary'
                          ? 'text-secondary-600'
                          : 'text-accent-600'
                    } font-medium`}>{member.role}</p>
                    <p className="text-gray-600 text-sm line-clamp-2">{member.description}</p>
                    <div className="flex justify-center space-x-3 pt-2">
                      <a href={member.links.linkedin} className="text-gray-400 hover:text-primary-600 transition-colors">
                        <FaLinkedin className="text-xl" />
                      </a>
                      <a href={member.links.twitter} className="text-gray-400 hover:text-primary-600 transition-colors">
                        <FaTwitter className="text-xl" />
                      </a>
                      <a href={member.links.github} className="text-gray-400 hover:text-primary-600 transition-colors">
                        <FaGithub className="text-xl" />
                      </a>
                      <a href={`mailto:${member.links.email}`} className="text-gray-400 hover:text-primary-600 transition-colors">
                        <FaEnvelope className="text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;