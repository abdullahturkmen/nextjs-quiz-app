"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [counter, setCounter] = useState(3);

  useEffect(() => {
    setInterval(() => {
      setCounter((counter) => counter - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (counter < 0) {
      router.push("/QuestionsScreen");
    }
  }, [counter]);

  return (
    <main className="flex justify-center items-center h-screen flex-col">
      <div className="text-2xl font-semibold pb-8">Your quiz starts in</div>
      <div className="rounded-full border-8 flex items-center justify-center p-5 aspect-square font-bold">
        {counter < 1 ? <div className="text-6xl">GO</div> : <div className="text-8xl">{counter}</div>}
      </div>
    </main>
  );
}
