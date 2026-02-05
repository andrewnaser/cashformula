import { NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    
    if (!email) {
      return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 });
    }

    const supabase = await createServiceClient();
    
    // Search users by email (partial match) using auth.admin
    const { data: { users }, error } = await supabase.auth.admin.listUsers({
      page: 1,
      perPage: 50
    });
    
    if (error) {
      console.error('Error searching users:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    // Filter users by email (case-insensitive partial match)
    const filteredUsers = users.filter(user => 
      user.email?.toLowerCase().includes(email.toLowerCase())
    );

    // Map user data
    const mappedUsers = filteredUsers.map(user => ({
      id: user.id,
      email: user.email,
      created_at: user.created_at,
      last_sign_in_at: user.last_sign_in_at
    }));

    return NextResponse.json({ success: true, users: mappedUsers });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
