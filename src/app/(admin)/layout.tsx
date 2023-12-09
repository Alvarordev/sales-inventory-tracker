import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });

  const { data: activeSession } = await supabase.auth.getSession();

  if (!activeSession.session) {
    return redirect('/login');
  }

  return <>{children}</>;
}
