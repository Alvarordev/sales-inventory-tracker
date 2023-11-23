"use client";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";

export default function Home() {
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
            onClick={() => alert("hola mundo")}
            className="hover:scale-110 transition-all"
          >
            Click Me
          </Button>

          <Button
            onClick={() => alert("hola mundo")}
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
