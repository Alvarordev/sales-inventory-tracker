import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {

  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });

  const { data: activeSession } = await supabase.auth.getSession();

  if (!activeSession.session) {
    return redirect("/login");
  }

  return (
    <Container className="items-center p-24">
      <header className="w-full">
        <nav>
          <ul className="flex items-center justify-between">
            <li>SHADCN</li>
          </ul>
        </nav>
      </header>
      <section className="py-24 flex flex-col gap-8 items-center text-center">
        <h1 className="text-4xl">Shadcn is Awesome</h1>
        <p className="text-xl">
          Hand-picked themes that you can copy and paste
        </p>
        <div className="flex gap-8">
          <Button
            className="hover:scale-110 transition-all"
          >
            Click Me
          </Button>

          <Button
            className="hover:scale-110 transition-all"
            variant={'secondary'}
          >
            Click Me Too
          </Button>
        </div>
      </section>
    </Container>
  );
}
