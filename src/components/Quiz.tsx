"use client";

import Image from "next/image";
import { useState } from "react";
import { Answer, Character } from "../types/quiz";
import { questions, characters, results } from "../data/quizData";

export default function Quiz() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answer: Answer) => {
    setSelectedAnswers([...selectedAnswers, answer]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResult = () => {
    const answerTypes = selectedAnswers.map((a) => a.type);
    const mostCommonType = answerTypes.reduce((a, b) =>
      answerTypes.filter((v) => v === a).length >=
      answerTypes.filter((v) => v === b).length
        ? a
        : b
    );
    return results[mostCommonType];
  };

  if (!started) {
    return (
      <button
        onClick={() => setStarted(true)}
        className="bg-[#98D8AA] hover:bg-[#7BC99D] font-[family-name:var(--font-pixel)] text-white py-4 px-8 rounded-lg transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95 max-w-xs w-full"
      >
        START
      </button>
    );
  }

  if (showResults) {
    const result = calculateResult();
    return (
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-8">
          <div className="flex-1 text-center">
            <h2 className="text-4xl font-[family-name:var(--font-pixel)] text-[#98D8AA] mb-4">
              {result.type}
            </h2>
            <p className="text-2xl mb-4">{result.emoji}</p>
            <p className="text-xl font-[family-name:var(--font-pixel)]">
              {result.description}
            </p>
          </div>
          {selectedCharacter && (
            <div className="w-64 flex-shrink-0">
              <div className="rounded-lg overflow-hidden bg-[#98D8AA]/10 p-4">
                <Image
                  src={selectedCharacter.imagePath}
                  alt={selectedCharacter.name}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <p className="text-center mt-2 font-[family-name:var(--font-pixel)] text-[#98D8AA]">
                  {selectedCharacter.name}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {currentQuestion === 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {characters.map((char) => (
            <button
              key={char.name}
              onClick={() => {
                setSelectedCharacter(char);
                setCurrentQuestion(1);
              }}
              className="flex flex-col items-center bg-[#98D8AA] hover:bg-[#7BC99D] p-4 rounded-lg transition-colors"
            >
              <Image
                src={char.imagePath}
                alt={char.name}
                width={100}
                height={100}
                className="rounded-full mb-2"
              />
              <span className="font-[family-name:var(--font-pixel)]">
                {char.name}
              </span>
            </button>
          ))}
        </div>
      ) : (
        <div className="flex gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-[family-name:var(--font-pixel)] text-[#98D8AA] mb-4">
              {questions[currentQuestion - 1].text}
            </h2>
            <p className="mb-6 font-[family-name:var(--font-pixel)]">
              {questions[currentQuestion - 1].description}
            </p>
            <div className="space-y-4">
              {questions[currentQuestion - 1].answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(answer)}
                  className="w-full text-left bg-[#98D8AA] hover:bg-[#7BC99D] p-4 rounded-lg transition-colors font-[family-name:var(--font-pixel)]"
                >
                  <span className="mr-2">{answer.emoji}</span>
                  {answer.text}
                </button>
              ))}
            </div>
          </div>
          {selectedCharacter && (
            <div className="w-64 flex-shrink-0">
              <div className="rounded-lg overflow-hidden bg-[#98D8AA]/10 p-4">
                <Image
                  src={selectedCharacter.imagePath}
                  alt={selectedCharacter.name}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                {/* <p className="text-center mt-2 font-[family-name:var(--font-pixel)] text-[#98D8AA]">
                  {selectedCharacter.name}
                </p> */}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
