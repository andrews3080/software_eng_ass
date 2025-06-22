'use client';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Welcome to the University Portal</h1>
      <div className="flex gap-8">
        <button
          onClick={() => router.push('/student/login')}
          className="bg-blue-600 text-white px-8 py-4 rounded-2xl shadow-md hover:bg-blue-700 transition"
        >
          Student
        </button>
        <button
          onClick={() => router.push('/lecturer/login')}
          className="bg-green-600 text-white px-8 py-4 rounded-2xl shadow-md hover:bg-green-700 transition"
        >
          Lecturer
        </button>
      </div>
    </main>
  );
}
