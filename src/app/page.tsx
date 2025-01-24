import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-8xl font-[family-name:var(--font-pixel)] text-green-400">
        what frog are you?
      </h1>
      <button className="bg-green-500 font-[family-name:var(--font-pixel)] text-white py-4 px-8 rounded-lg transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95 max-w-xs w-full">
        START
      </button>
    </div>
  );
}
