"use client";
import Link from "next/link";
import React, { useEffect } from "react";

export default function SplashScreen() {
  useEffect(() => {
    localStorage.removeItem("results");
  }, []);

  return (
    <main className="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div>
        <h1 className="text-3xl font-semibold text-[#374CB7] text-center">
          QuizApp
        </h1>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 max-w-max m-auto">
          Things to know before you start:
        </h2>

        <ul role="list" className="mt-8 text-sm leading-6 text-gray-400">
          <li className="flex gap-x-3">
            <svg
              className="w-5 h-5 mr-2 text-[#FF6A66] flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            In each quiz, you are required to answer 5 questions.
          </li>
          <li className="flex gap-x-3">
          <svg
              className="w-5 h-5 mr-2 text-[#FF6A66] flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            You will have 3 minutes for each question. If you fail to complete a
            question in given time, your answer will be considered incorrect.
          </li>
        </ul>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/CounterScreen"
            className="rounded-xl bg-[#FF6A66] px-3.5 py-5 text-sm text-white"
          >
            Let's Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
