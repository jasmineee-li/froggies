import Quiz from "@/components/Quiz";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-8xl font-[family-name:var(--font-pixel)] text-green-400">
        What frog are you?
      </h1>
      <Quiz />
    </div>
  );
}
