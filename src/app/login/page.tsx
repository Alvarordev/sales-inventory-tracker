import Auth from "@/components/auth";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

const Login = async () => {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });

  const { data } = await supabase.auth.getSession();

  if (data.session) {
    return redirect("/");
  }

  return <Auth />;
};

export default Login;
