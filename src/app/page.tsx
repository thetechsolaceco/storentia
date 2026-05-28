'use client';

import { motion } from 'framer-motion';
import { HiOutlineSparkles } from 'react-icons/hi';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24 font-hanken">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <HiOutlineSparkles className="text-6xl text-blue-500 mb-6" />
          <h1 className="text-6xl font-extrabold tracking-tight">
            Storentia
          </h1>
          <p className="mt-4 text-xl text-zinc-500 font-roboto">
            Hanken Grotesk primary font & Roboto secondary font configured.
          </p>
        </motion.div>
      </main>
    </>
  );
}
