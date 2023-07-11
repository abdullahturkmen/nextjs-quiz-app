"use client";
import React, { useEffect, useState } from "react";
import quizAnswers from "./../data/questions";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [questionList, setQuestionList] = useState<any[]>([]);
  const [selectedAnswerList, setSelectedAnswerList] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<any | null>(null);
  const questionTime = Number(process.env.NEXT_PUBLIC_QUESTION_TIME);
  const [currentQuestionTimer, setCurrentQuestionTimer] =
    useState<any>(questionTime);

  useEffect(() => {
    localStorage.removeItem("results");
    setQuestionList(reOrderList(quizAnswers.questions));
    questionTimer();
  }, []);

  const reOrderList = (data: any) => {
    var dataList = data;
    for (var i = 0; i < dataList.length / 2; i++) {
      var rndNum = Math.floor(Math.random() * dataList.length);
      var tempData = null;
      tempData = dataList[rndNum];
      dataList.splice(rndNum, 1);
      dataList.push(tempData);
    }
    return dataList;
  };

  const questionTimer = () => {
    setInterval(() => {
      setCurrentQuestionTimer(
        (currentQuestionTimer: any) => currentQuestionTimer - 1
      );
    }, 1000);
  };

  useEffect(() => {
    if (currentQuestionTimer == 0) {
      nextQuestion();
    }
  }, [currentQuestionTimer]);

  const clickOption = (answerID: any) => {
    setSelectedAnswer(answerID);
  };

  const nextQuestion = () => {
    var tempAnswer = 0;
    if (selectedAnswer != null) {
      tempAnswer = selectedAnswer;
    }
    setSelectedAnswerList([
      ...selectedAnswerList,
      {
        answerID: tempAnswer,
        usedTime: questionTime - currentQuestionTimer,
      },
    ]);
    setSelectedAnswer(null);
    setCurrentQuestionIndex((currentQuestionIndex) => currentQuestionIndex + 1);
    setCurrentQuestionTimer(questionTime);
  };

  useEffect(() => {
    if (
      currentQuestionIndex > 0 &&
      currentQuestionIndex == questionList.length
    ) {
      localStorage.setItem(
        "results",
        JSON.stringify({
          questionList: questionList,
          selectedAnswerList: selectedAnswerList,
        })
      );
      return router.push("/ResultScreen");
    }
  }, [selectedAnswerList]);

  return (
    <main className="grid h-screen bg-white place-items-center text-slate-950 px-6 py-24 sm:py-32 lg:px-8 ">
      {questionList?.length > 0 &&
      questionList.length != currentQuestionIndex ? (
        <div className="sm:max-w-xl w-full">
          <div className="text-center border rounded-2xl border-gray-100 py-8 px-4 mb-1">
            <span>
              Question {currentQuestionIndex + 1} / {questionList.length}
            </span>

            <div className="flex items-center my-5 text-gray-400 text-xs">
              {currentQuestionTimer}
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-100 mx-2">
                <div
                  className="bg-[#374CB7] h-2.5 rounded-full "
                  style={{
                    width: `${(currentQuestionTimer * 100) / questionTime}%`,
                  }}
                ></div>
              </div>
              {questionTime}
            </div>

            <h1>{questionList[currentQuestionIndex].question}</h1>
          </div>
          <ul>
            {questionList[currentQuestionIndex]["answers"].map(
              (e: any, index: number) => (
                <li
                  key={index}
                  className={`flex items-center cursor-pointer ${
                    selectedAnswer == e.id
                      ? "border-[#374CB7]"
                      : "border-gray-100"
                  }  border rounded-2xl p-5 mb-1`}
                  onClick={() => clickOption(e.id)}
                >
                  <div
                    className={`rounded-full p-2 me-2 bg-gray-100 border-4  ${
                      selectedAnswer == e.id
                        ? "border-[#374CB7] "
                        : "border-gray-100"
                    }`}
                  ></div>
                  <button
                    className={`${
                      selectedAnswer == e.id
                        ? "text-[#374CB7]"
                        : "text-gray-800"
                    }`}
                  >
                    {e.option}
                  </button>
                </li>
              )
            )}
          </ul>

          <button
            className="disabled:bg-[#9E9E9E] text-white bg-[#FF6A66] rounded-2xl py-5 text-sm w-full mt-8"
            onClick={() => nextQuestion()}
            disabled={!selectedAnswer}
          >
            Next
          </button>
        </div>
      ) : (
        <h2>loading çalışacak</h2>
      )}
    </main>
  );
}
