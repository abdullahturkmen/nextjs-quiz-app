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
    <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
      sayaç ekranııı
      {counter < 1 ? <p>go</p> : <span>{counter}</span>}
    </main>
  );
}
