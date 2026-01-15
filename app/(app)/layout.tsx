import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Sidebar from '@/components/ui/Sidebar';
import PromoCard from '@/components/ui/PromoCard';

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen">
      <Sidebar />
      
      {/* Main content */}
      <main className="lg:ml-72 min-h-screen">
        {/* Top bar */}
        <div className="sticky top-0 z-30 glass-panel border-b border-white/5">
          <div className="flex items-center justify-between px-6 py-4 lg:px-8">
            <div className="lg:hidden w-10" /> {/* Spacer for mobile menu */}
            <div className="flex-1 flex items-center gap-4 justify-end">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cash-green/10 border border-cash-green/20">
                <div className="w-2 h-2 bg-cash-green rounded-full animate-pulse" />
                <span className="text-sm text-cash-green font-medium">System Online</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-navy-400 hidden sm:block">{user.email}</span>
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-950 font-bold text-sm">
                  {user.email?.[0].toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="p-6 lg:p-8 space-y-6">
          {/* Promo Card at top */}
          <PromoCard />
          
          {/* Page children */}
          {children}
        </div>
      </main>
    </div>
  );
}
