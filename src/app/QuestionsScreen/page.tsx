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
  const questionTime = process.env.NEXT_PUBLIC_QUESTION_TIME;
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
      { answerID: tempAnswer, usedTime: Number(questionTime) - currentQuestionTimer },
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
    <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
      {questionList?.length > 0 &&
      questionList.length != currentQuestionIndex ? (
        <>
          <h1>{questionList[currentQuestionIndex].question}</h1>

          <ul>
            {questionList[currentQuestionIndex]["answers"].map((e:any, index:number) => (
              <li
                key={index}
                className={selectedAnswer == e.id ? "active-answer" : ""}
              >
                <button onClick={() => clickOption(e.id)}>{e.option}</button>
              </li>
            ))}
          </ul>

          <button onClick={() => nextQuestion()} disabled={!selectedAnswer}>
            Next
          </button>
        </>
      ) : (
        <h2>loading çalışacak</h2>
      )}
    </main>
  );
}
