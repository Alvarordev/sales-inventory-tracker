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

  const { data: user } = await supabase.from("user").select("*").single();

  if (data.session && user?.role === "admin") {
		return redirect("/admin/sales");
	} else if (data.session && user?.role !== "admin") {
    return redirect("/route-sheets")
  }

  return <Auth />;
};

export default Login;
