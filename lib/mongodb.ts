import { MongoClient } from 'mongodb';

// MongoDB 연결 URI (환경 변수에서 가져오기)
const uri = process.env.MONGODB_URI || 'mongodb+srv://your-mongodb-uri';

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error('MongoDB URI가 설정되지 않았습니다. 환경 변수를 확인하세요.');
}

// 개발 환경에서는 전역 변수에 클라이언트를 캐싱하여 핫 리로딩 시 연결이 재생성되지 않도록 함
if (process.env.NODE_ENV === 'development') {
  // @ts-ignore
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    // @ts-ignore
    global._mongoClientPromise = client.connect();
  }
  // @ts-ignore
  clientPromise = global._mongoClientPromise;
} else {
  // 프로덕션 환경에서는 매번 새 연결 생성
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise
export default clientPromise; 