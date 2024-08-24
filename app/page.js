"use client";

import Image from "next/image";
import Coinflip from "../components/Coinflip";
import coinflipLogo from '../public/coinflip-logo.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to Coinflip Game
      </h1>
      <div className="flex flex-col items-center mb-8">
        <Image src={coinflipLogo} alt="Coinflip Logo" width={300} height={300} />
      </div>
      <Coinflip />
    </main>
  );
}