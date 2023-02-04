import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <p className="font-bold text-4xl text-indigo-300">Nextjs 13</p>
      </div>
    </main>
  );
}
