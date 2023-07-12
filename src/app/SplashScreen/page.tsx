"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import splashImg from "./../../../public/splash-img.svg";

export default function SplashScreen() {
  useEffect(() => {
    localStorage.removeItem("results");
  }, []);

  return (
    <main className="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div>
        <h1
          className="text-3xl font-semibold text-[var(--primary-color)] text-center mb-8 absolute top-[32px] left-[50%]"
          style={{ transform: "translate(-50%, 0)" }}
        >
          {process.env.NEXT_PUBLIC_PROJECT_TITLE}
        </h1>

        <div className="flex flex-col md:flex-row items-center sm:max-w-8/12 w-full">
          <div className="flex-1">
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 max-w-max m-auto">
              Things to know before you start:
            </h2>

            <ul
              role="list"
              className="mt-8 text-sm leading-6 text-gray-400 max-w-lg mb-5"
            >
              <li className="flex gap-x-3 mb-2">
                <svg
                  className="w-5 h-5 mr-2 text-[var(--main-color)] flex-shrink-0"
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
                  className="w-5 h-5 mr-2 text-[var(--main-color)] flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                You will have 3 minutes for each question. If you fail to
                complete a question in given time, your answer will be
                considered incorrect.
              </li>
            </ul>
            <div
              className="mt-10 flex items-center justify-center gap-x-6 md:relative absolute bottom-[32px] md:w-fit w-full left-[50%] px-6 pt-6 z-10"
              style={{ transform: "translate(-50%, 0)" }}
            >
              <Link
                href="/CounterScreen"
                className="rounded-xl bg-[var(--main-color)] px-8 py-5 text-sm text-white w-full text-center"
              >
                Let's Get Started
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <Image
              alt={process.env.NEXT_PUBLIC_PROJECT_TITLE || ''}
              src={splashImg}
              className="rounded-3xl relative right-[-15%] bottom-[-15%] max-h-64 mx-auto md:mt-0 mt-8 md:max-h-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
