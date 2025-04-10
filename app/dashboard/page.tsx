'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login?callbackUrl=/dashboard');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!session) {
    return null; // 리다이렉트 처리 중이므로 아무것도 표시하지 않음
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 mt-10"
      >
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-xl font-bold">
                {session.user?.name?.charAt(0) || 'U'}
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">안녕하세요, {session.user?.name || '사용자'}님!</h1>
                <p className="text-gray-600">{session.user?.email}</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold mb-4">대시보드</h2>
              <p className="text-gray-600">
                이곳은 로그인한 사용자만 접근할 수 있는 대시보드입니다.
                필요에 따라 사용자 정보, 학습 진행 상황, 통계 등을 표시할 수 있습니다.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-blue-50 p-6 rounded-lg"
              >
                <h3 className="font-semibold text-lg mb-2">학습 진행률</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full w-2/3"></div>
                </div>
                <p className="mt-2 text-sm text-gray-600">총 학습 시간: 32시간</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="bg-green-50 p-6 rounded-lg"
              >
                <h3 className="font-semibold text-lg mb-2">완료한 강의</h3>
                <p className="text-3xl font-bold text-green-600">12</p>
                <p className="mt-2 text-sm text-gray-600">총 20개 중</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="bg-purple-50 p-6 rounded-lg"
              >
                <h3 className="font-semibold text-lg mb-2">다음 추천 강의</h3>
                <p className="font-medium">머신러닝 기초 이해하기</p>
                <p className="mt-2 text-sm text-gray-600">예상 소요 시간: 2시간</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 