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
      <div className="text-center text-white font-bold mb-6">QuizApp</div>
      <div className="sm:max-w-xl w-full bg-white text-slate-950 rounded-2xl text-center py-7 px-4">
        <div className="text-4xl font-medium mb-3">Congratulations!</div>
        <div className="text-xl mb-4">You scored</div>

        <div className=" mb-6">
          <div className="text-5xl font-medium">
            {trueAnswerCount}/{totalQuestionLength}
          </div>
          <span className="text-sm">correct answers</span>
        </div>

        <div className="flex gap-2 justify-center">
          <div
            className="w-28 h-28 rounded-full aspect-square flex items-center justify-center"
            style={{
              background: `radial-gradient(closest-side, white 79%, transparent 80% 100%),conic-gradient(from -90deg,var(--primary-color) ${timePercent.toFixed(
                0
              )}%, #F0F0F0 0)`,
            }}
          >
            <div className="text-2xl font-black">
              %{timePercent.toFixed(0)}
              <div className="w-3/4 mx-auto text-xs font-thin text-gray-400">
                of total time used
              </div>
            </div>
          </div>

          <div
            className="w-28 h-28 rounded-full aspect-square flex items-center justify-center ease-out duration-3000"
            style={{
              background: `radial-gradient(closest-side, white 79%, transparent 80% 100%),conic-gradient(from -90deg,#56C490 ${trueAnswerPercent.toFixed(
                0
              )}%, #FE5353 0)`,
            }}
          >
            <div className="text-2xl font-black">
              %{trueAnswerPercent.toFixed(0)}
              <div className="w-3/4 mx-auto text-xs font-thin text-gray-400">
                of answer were correct
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link
        href="/CounterScreen"
        className="rounded-xl bg-[var(--primary-color)] px-3.5 py-5 text-sm text-white mt-5 sm:max-w-xl w-full text-center"
      >
        Try again
      </Link>
    </main>
  );
}
