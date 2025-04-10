import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";
import { getUsers, User } from "@/lib/users";

// Session 타입 확장
interface CustomSession extends Session {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // 로그인 폼에 표시될 필드 정의
      name: "이메일/비밀번호",
      credentials: {
        email: { label: "이메일", type: "email", placeholder: "이메일을 입력하세요" },
        password: { label: "비밀번호", type: "password", placeholder: "비밀번호를 입력하세요" }
      },
      // 인증 로직
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // 사용자 검색 (users.ts에서 가져온 모든 사용자 중에서 검색)
        const users = getUsers();
        const user = users.find(user => user.email === credentials.email);
        
        if (!user || user.password !== credentials.password) {
          return null;
        }

        // 인증 성공 시 사용자 정보 반환 (비밀번호 제외)
        return {
          id: user.id,
          name: user.name,
          email: user.email
        };
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30일
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }): Promise<CustomSession> {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
        }
      };
    },
  },
  pages: {
    signIn: "/login", // 커스텀 로그인 페이지 경로
  },
  secret: process.env.NEXTAUTH_SECRET || "learning-crew-secret-key", // 실제 운영 환경에서는 환경 변수로 관리
});

export { handler as GET, handler as POST }; 