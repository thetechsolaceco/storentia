import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <Hero />
    </main>
  );
}
