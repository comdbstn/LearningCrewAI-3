// 사용자 타입 정의
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

// 임시 사용자 데이터 (실제로는 데이터베이스를 사용해야 함)
let users: User[] = [
  {
    id: "1",
    name: "관리자",
    email: "admin@learningcrew.ai",
    password: "admin1234", // 실제로는 암호화된 비밀번호를 저장해야 함
  },
  {
    id: "2",
    name: "테스트 사용자",
    email: "user@learningcrew.ai",
    password: "user1234",
  },
];

// 모든 사용자 가져오기
export function getUsers(): User[] {
  return users;
}

// 특정 ID의 사용자 찾기
export function getUserById(id: string): User | undefined {
  return users.find(user => user.id === id);
}

// 특정 이메일의 사용자 찾기
export function getUserByEmail(email: string): User | undefined {
  return users.find(user => user.email === email);
}

// 새 사용자 추가
export function addUser(name: string, email: string, password: string): User {
  // 이메일 중복 확인
  const existingUser = getUserByEmail(email);
  if (existingUser) {
    throw new Error("이미 사용 중인 이메일입니다.");
  }

  // 새 사용자 ID 생성
  const newUserId = (users.length + 1).toString();

  // 새 사용자 객체 생성
  const newUser: User = {
    id: newUserId,
    name,
    email,
    password, // 실제로는 암호화해야 함 (예: bcrypt 사용)
  };

  // 사용자 추가
  users.push(newUser);

  return newUser;
}

// 사용자 정보 업데이트
export function updateUser(id: string, updates: Partial<Omit<User, 'id'>>): User | undefined {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) {
    return undefined;
  }

  // 사용자 정보 업데이트
  users[userIndex] = {
    ...users[userIndex],
    ...updates,
  };

  return users[userIndex];
}

// 사용자 삭제
export function deleteUser(id: string): boolean {
  const initialLength = users.length;
  users = users.filter(user => user.id !== id);
  return users.length !== initialLength;
}

// 인증된 사용자 반환 (비밀번호 제외)
export function getAuthenticatedUser(email: string, password: string): Omit<User, 'password'> | null {
  const user = getUserByEmail(email);
  
  if (!user || user.password !== password) {
    return null;
  }

  // 비밀번호를 제외한 사용자 정보 반환
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
} 