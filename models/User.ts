import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

// DB 연결이 존재하지 않으면 연결 생성
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://your-mongodb-uri');
    console.log('MongoDB 연결 성공');
  } catch (error) {
    console.error('MongoDB 연결 실패:', error);
    throw error;
  }
};

// User 문서 인터페이스 정의
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  name: string;
  createdAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// User 스키마 정의
const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// 비밀번호 해싱 미들웨어
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

// 비밀번호 비교 메서드
UserSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

// Mongoose는 Next.js의 개발 모드에서 모델을 중복 정의하는 것을 방지하기 위한 로직
// models 객체에 User가 이미 있으면 그것을 사용하고, 없으면 새로 생성
export const User = (mongoose.models.User as mongoose.Model<IUser>) || 
                   mongoose.model<IUser>('User', UserSchema);

export { connectDB }; 