"use client";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const supabase = createBrowserSupabaseClient();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email: 'emailexample@gmail.com',
      password: 'passwordexample',
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh()
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
        email: 'alvaro@gmail.com',
        password: 'test123'
    })
    router.refresh()
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
    <input type="email" placeholder="email"/>
      <button onClick={handleSignUp}>Sign Up new User</button>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default Auth;
