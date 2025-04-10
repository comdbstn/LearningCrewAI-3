import { NextResponse } from "next/server";
import { connectDB, User } from "../../../../models/User";

export async function POST(request: Request) {
  try {
    // DB 연결
    await connectDB();

    // 요청 본문에서 사용자 데이터 추출
    const { username, email, password, name } = await request.json();

    // 필수 필드 확인
    if (!username || !email || !password || !name) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 이미 존재하는 사용자 확인
    const existingUserByUsername = await User.findOne({ username });
    if (existingUserByUsername) {
      return NextResponse.json(
        { error: '이미 사용 중인 사용자 이름입니다.' },
        { status: 409 }
      );
    }

    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      return NextResponse.json(
        { error: '이미 사용 중인 이메일입니다.' },
        { status: 409 }
      );
    }

    // 새 사용자 생성
    const user = new User({
      username,
      email,
      password,
      name,
    });

    // 저장 (비밀번호는 저장 전에 미들웨어에서 해싱됨)
    await user.save();

    // 비밀번호를 제외한 사용자 정보 반환
    const userObj = user.toObject();
    const { password: _password, ...userWithoutPassword } = userObj;

    return NextResponse.json({ 
      message: '회원가입 성공',
      user: userWithoutPassword 
    }, { status: 201 });
  } catch (error) {
    console.error('회원가입 오류:', error);
    return NextResponse.json(
      { error: '회원가입 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 