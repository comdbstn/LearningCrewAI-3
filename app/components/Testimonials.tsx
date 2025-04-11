'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image: string;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, title, image, delay }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full flex flex-col"
    >
      <div className="mb-6 flex-grow">
        <svg className="h-8 w-8 text-primary-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-700 italic leading-relaxed line-clamp-6 sm:line-clamp-none">{quote}</p>
      </div>
      <div className="flex items-center mt-auto">
        <div className="relative w-14 h-14 mr-4 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
          <Image
            src={image}
            alt={name}
            width={56}
            height={56}
            className="object-cover"
            priority
          />
        </div>
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Learning Crew AI는 제 학습 방식을 완전히 바꿨어요. 개인화된 학습 경로 덕분에 제 약점을 정확히 파악하고 집중적으로 개선할 수 있었습니다.",
      name: "김민지",
      title: "대학생, 컴퓨터공학과",
      image: "https://placehold.co/200x200/4f46e5/ffffff?text=MinJi"
    },
    {
      quote: "아이가 Learning Crew AI를 사용한 후, 수학 성적이 크게 향상되었어요. 특히 실시간 피드백 기능이 아이의 학습 동기를 높이는 데 큰 도움이 되었습니다.",
      name: "이준호",
      title: "학부모",
      image: "https://placehold.co/200x200/f97316/ffffff?text=JunHo"
    },
    {
      quote: "영어 회화 능력을 높이고 싶어서 시작했는데, AI 튜터와의 대화식 학습이 실제 영어 사용 환경과 비슷해서 자연스럽게 실력이 향상되는 것을 느꼈습니다.",
      name: "박소연",
      title: "직장인, 마케팅 매니저",
      image: "https://placehold.co/200x200/14b8a6/ffffff?text=SoYeon"
    },
    {
      quote: "수십 명의 학생을 관리하는 교사로서, Learning Crew AI의 자동화된 학습 진행 추적 기능은 정말 혁신적입니다. 각 학생의 강점과 약점을 쉽게 파악할 수 있어요.",
      name: "최재민",
      title: "고등학교 교사",
      image: "https://placehold.co/200x200/ec4899/ffffff?text=JaeMin"
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-600">
            사용자들의 이야기
          </span>
        </h2>
        <p className="text-gray-600 text-lg">
          Learning Crew AI가 어떻게 학습자와 교육자들의 삶을 변화시키고 있는지 들어보세요.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            name={testimonial.name}
            title={testimonial.title}
            image={testimonial.image}
            delay={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials; 