"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [trueAnswerCount, setTrueAnswerCount] = useState(0);
  const [totalQuestionLength, setTotalQuestionLength] = useState(0);
  const [trueAnswerPercent, setTrueAnswerPercent] = useState(0);
  const [usedTotalTime, setUsedTotalTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [timePercent, setTimePercent] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("results") === null) {
      return router.push("/");
    }
    var resultData = JSON.parse(localStorage.getItem("results")!);

    setTotalQuestionLength(resultData.questionList.length);

    setTrueAnswerCount(0);
    resultData.selectedAnswerList.map((e: any, index: number) => {
      if (e.answerID == resultData.questionList[index].trueAnswerID) {
        setTrueAnswerCount((trueAnswerCount) => trueAnswerCount + 1);
      }
      setUsedTotalTime((usedTotalTime) => usedTotalTime + parseInt(e.usedTime));
    });

    setTotalTime(
      Number(process.env.NEXT_PUBLIC_QUESTION_TIME) *
        resultData.questionList.length
    );
  }, []);

  useEffect(() => {
    setTrueAnswerPercent((trueAnswerCount * 100) / totalQuestionLength);
  }, [trueAnswerCount, totalQuestionLength]);

  useEffect(() => {
    setTimePercent((usedTotalTime * 100) / totalTime);
  }, [usedTotalTime, totalTime]);

  return (
    <main className="grid h-screen place-items-center content-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="sm:max-w-xl w-full bg-white text-slate-950 rounded-2xl text-center py-7 px-4">
        <div>
          correct answer: {trueAnswerCount} / {totalQuestionLength}
        </div>
        <div>{trueAnswerPercent.toFixed(0)} % of answer were correct</div>
        <div>{timePercent.toFixed(0)} % of total time used</div>



        <div className="flex items-center justify-center" x-data="{ circumference: 2 * 22 / 7 * 120 }">
            <svg className="transform -rotate-90 w-72 h-72">
                <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent" className="text-gray-100"></circle>

                <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent" className="text-[#374CB7]" stroke-dasharray="circumference" stroke-dashoffset="circumference - 25 / 100 * circumference"></circle>
            </svg>
            <span className="absolute text-5xl" x-text="`${timePercent.toFixed(0)}%`">% {timePercent.toFixed(0)} <span>of total time used</span></span>
    </div>


      </div>
      <Link
        href="/CounterScreen"
        className="rounded-xl bg-[#374CB7] px-3.5 py-5 text-sm text-white mt-5 sm:max-w-xl w-full text-center"
      >
        Try again
      </Link>
    </main>
  );
}
