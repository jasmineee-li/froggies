"use client";

import { useState } from "react";
import { Question, Answer, Character } from "../types/quiz";
import { questions, characters, results } from "../data/quizData";

export default function Quiz() {
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

  if (showResults) {
    const result = calculateResult();
    return (
      <div className="text-center">
        <h2 className="text-4xl font-[family-name:var(--font-pixel)] text-green-400 mb-4">
          {result.type}
        </h2>
        <p className="text-2xl mb-4">{result.emoji}</p>
        <p className="text-xl">{result.description}</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {currentQuestion === 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {characters.map((char) => (
            <button
              key={char.name}
              onClick={() => {
                setSelectedCharacter(char);
                setCurrentQuestion(1);
              }}
              className="bg-green-500 p-4 rounded-lg hover:bg-green-600 transition-colors"
            >
              {char.name}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-3xl font-[family-name:var(--font-pixel)] text-green-400 mb-4">
            {questions[currentQuestion - 1].text}
          </h2>
          <p className="mb-6">{questions[currentQuestion - 1].description}</p>
          <div className="space-y-4">
            {questions[currentQuestion - 1].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(answer)}
                className="w-full text-left bg-green-500 p-4 rounded-lg hover:bg-green-600 transition-colors"
              >
                <span className="mr-2">{answer.emoji}</span>
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
