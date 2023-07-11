"use client";
import Link from "next/link";
import React, { useEffect } from "react";

export default function SplashScreen() {
  useEffect(() => {
    localStorage.removeItem("results");
  }, []);

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">QuizApp</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Things to know before you start:
        </h1>
        <ul role="list" className="mt-8 text-sm leading-6 text-gray-600">
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-indigo-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            In each quiz, you are required to answer 5 questions.
          </li>
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-indigo-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            You will have 3 minutes for each question. If you fail to complete a
            question in given time, your answer will be considered incorrect.
          </li>
        </ul>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/CounterScreen"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
