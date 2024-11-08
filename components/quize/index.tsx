"use client";

import { useReducer } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

// Define the structure for our questions and categories
type Question = {
  id: number;
  text: string;
  category: string;
};

type Category = {
  name: string;
  questions: Question[];
};

// Sample data
const categories: Category[] = [
  {
    name: "Openness",
    questions: [
      { id: 1, text: "I enjoy trying new experiences.", category: "Openness" },
      {
        id: 2,
        text: "I am curious about many different things.",
        category: "Openness",
      },
    ],
  },
  {
    name: "Conscientiousness",
    questions: [
      { id: 3, text: "I am always prepared.", category: "Conscientiousness" },
      {
        id: 4,
        text: "I pay attention to details.",
        category: "Conscientiousness",
      },
    ],
  },
  {
    name: "Extraversion",
    questions: [
      {
        id: 5,
        text: "I feel comfortable around people.",
        category: "Extraversion",
      },
      { id: 6, text: "I start conversations.", category: "Extraversion" },
    ],
  },
];

// Flatten all questions into a single array
const allQuestions = categories.flatMap((category) => category.questions);

// Define the state type
type State = {
  currentQuestionIndex: number;
  answers: Record<number, number>;
};

// Action types for our reducer
type Action =
  | { type: "ANSWER_QUESTION"; payload: { questionId: number; answer: number } }
  | { type: "NEXT_QUESTION" }
  | { type: "PREVIOUS_QUESTION" };

// Reducer function to manage state updates
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ANSWER_QUESTION":
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionId]: action.payload.answer,
        },
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: Math.min(
          state.currentQuestionIndex + 1,
          allQuestions.length - 1
        ),
      };
    case "PREVIOUS_QUESTION":
      return {
        ...state,
        currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0),
      };
    default:
      return state;
  }
}

export default function PersonalityTest() {
  const [state, dispatch] = useReducer(reducer, {
    currentQuestionIndex: 0,
    answers: {},
  });

  const currentQuestion = allQuestions[state.currentQuestionIndex];
  const isLastQuestion = state.currentQuestionIndex === allQuestions.length - 1;
  const isFirstQuestion = state.currentQuestionIndex === 0;

  const handleAnswer = (value: number) => {
    dispatch({
      type: "ANSWER_QUESTION",
      payload: { questionId: currentQuestion.id, answer: value },
    });
  };

  const handleNext = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handlePrevious = () => {
    dispatch({ type: "PREVIOUS_QUESTION" });
  };

  const calculateProgress = (category: string) => {
    const categoryQuestions =
      categories.find((c) => c.name === category)?.questions || [];
    const answeredQuestions = categoryQuestions.filter(
      (q) => state.answers[q.id] !== undefined
    );
    return (answeredQuestions.length / categoryQuestions.length) * 100;
  };

  const isTestComplete =
    Object.keys(state.answers).length === allQuestions.length;

  const calculateFinalScore = () => {
    const totalScore = Object.values(state.answers).reduce(
      (sum: number, score: number) => sum + score,
      0
    );
    return (totalScore / (allQuestions.length * 10)) * 100;
  };

  const calculateOverallProgress = () => {
    return (Object.keys(state.answers).length / allQuestions.length) * 100;
  };

  return (
    <div className="flex bg-gray-200 rounded-lg shadow-md">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 shadow-md overflow-y-auto rounded-l md:block hidden">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Categories</h2>
        {categories.map((category) => (
          <div key={category.name} className="mb-6">
            <h3 className="font-semibold mb-2 text-gray-700 flex items-center">
              {calculateProgress(category.name) === 100 && (
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              )}
              {category.name}
            </h3>
            <Progress
              value={calculateProgress(category.name)}
              className="w-full"
            />
            <p className="text-sm text-gray-500 mt-1">
              {Math.round(calculateProgress(category.name))}% complete
            </p>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <Card className="max-w-2xl mx-auto md:min-w-[400px] lg:min-w-[500px]">
          <CardHeader>
            <CardTitle className="flex justify-between items-start flex-col gap-2">
              <span className="text-2xl font-bold text-gray-800">
                {currentQuestion.category}
              </span>
              <span className="text-lg font-medium text-gray-600">
                Question {state.currentQuestionIndex + 1} of{" "}
                {allQuestions.length}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isTestComplete ? (
              <div className="text-center py-8">
                <h3 className="text-3xl font-bold mb-4 text-gray-800">
                  Test Complete!
                </h3>
                <p className="text-xl mb-6 text-gray-600">Your final score:</p>
                <div className="text-5xl font-bold text-blue-600">
                  {calculateFinalScore().toFixed(2)}%
                </div>
              </div>
            ) : (
              <>
                <p className="text-xl mb-6 text-gray-700">
                  {currentQuestion.text}
                </p>
                <Slider
                  min={1}
                  max={10}
                  step={1}
                  value={[state.answers[currentQuestion.id] || 1]}
                  onValueChange={(value) => handleAnswer(value[0])}
                  className="mb-4"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>Strongly Disagree (1)</span>
                  <span>Strongly Agree (10)</span>
                </div>
              </>
            )}
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <Button
              onClick={handlePrevious}
              disabled={isFirstQuestion}
              variant="outline"
              className="flex items-center"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              disabled={isLastQuestion || isTestComplete}
              className="flex items-center"
            >
              {isLastQuestion ? "Finish" : "Next"}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </CardFooter>
        </Card>
        <div className="flex items-center justify-center flex-col py-4 ">
          <p className="text-sm text-gray-600 mb-1">Overall Progress</p>
          <Progress value={calculateOverallProgress()} className="w-32" />
        </div>
      </div>
    </div>
  );
}
