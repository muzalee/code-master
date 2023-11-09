import bcrypt from 'bcrypt';
import executeQuery from '@/lib/db';
import { NextResponse } from 'next/server';
import { AuthRequest } from '@/lib/models/request';

export async function POST(request: Request) 
{
  const data: AuthRequest = await request.json();
  
  const query = 'SELECT * FROM users WHERE email = ?';
  const values = [data.email];
  
  try {
    const result = await executeQuery({ query, values });
    
    if (result.length === 0) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 404 });
    }
    
    const user = result[0];
    const passwordMatch = await bcrypt.compare(data.password, user.password);
    
    if (!passwordMatch) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }
    
    return NextResponse.json({ data: {
        id: user.id,
        name: user.name,
        email: user.email,
      }, 
      message: 'You have been logged in successfully!' },
    );
   } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}