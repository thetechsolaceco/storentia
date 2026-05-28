import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black overflow-x-hidden pt-20 md:pt-24">
        <Hero />
      </main>
    </>
  );
}
