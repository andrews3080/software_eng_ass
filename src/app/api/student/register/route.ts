// app/api/student/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest) {
  try {
    const { name, dat_of_birth, email, level, password } = await req.json();

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into DB
    const result = await pool.query(
      `INSERT INTO students (name, dat_of_birth, email, level, password)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name, dat_of_birth, email, level, hashedPassword]
    );

    return NextResponse.json({ student: result.rows[0] }, { status: 201 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}
