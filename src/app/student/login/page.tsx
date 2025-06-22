'use client';
import { useRouter } from 'next/navigation';

export default function StudentLogin() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="w-96 bg-gray-50 p-8 shadow-xl rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">Student Login</h2>
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="border p-3 rounded" />
          <input type="password" placeholder="Password" className="border p-3 rounded" />
          <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
        </form>
        <p className="text-sm text-center mt-4">
          Don’t have an account?{' '}
          <button
            onClick={() => router.push('/student/register')}
            className="text-blue-600 underline"
          >
            Register here
          </button>
        </p>
      </div>
    </main>
  );
}
