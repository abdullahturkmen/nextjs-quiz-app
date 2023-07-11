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
    <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
      sonuç ekranı
      <div>
        correct answer: {trueAnswerCount} / {totalQuestionLength}
      </div>
      <div>{trueAnswerPercent.toFixed(0)} % of answer were correct</div>
      <div>{timePercent.toFixed(0)} % of total time used</div>
      <Link
        href="/CounterScreen"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Try again
      </Link>
    </main>
  );
}
