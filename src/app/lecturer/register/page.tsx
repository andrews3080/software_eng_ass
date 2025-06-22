'use client';
import { useState } from 'react';

export default function LecturerRegister() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/lecturer/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert('Lecturer registered successfully!');
        // You can also redirect to login here if needed
      } else {
        const error = await res.json();
        alert('Error: ' + error.message || 'Registration failed.');
      }
    } catch (err) {
      console.error('Registration Error:', err);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="w-96 bg-gray-50 p-8 shadow-xl rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">Lecturer Registration</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border p-3 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border p-3 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="border p-3 rounded"
          />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Register
          </button>
        </form>
      </div>
    </main>
  );
}
