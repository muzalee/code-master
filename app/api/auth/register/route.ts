import bcrypt from 'bcrypt';
import executeQuery from '@/lib/db';
import { NextResponse } from 'next/server';
import { AuthRequest } from '@/lib/models/request';

export async function POST(request: Request) 
{
  const data: AuthRequest = await request.json();
  
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';

  const values = [data.name, data.email, hashedPassword];
  try {
    const result = await executeQuery({ query, values });
    return NextResponse.json({ data: {
        id: result.insertId,
        name: data.name,
        email: data.email,
      }, 
      message: 'Your account have been registered successfully!' },
    );
   } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}