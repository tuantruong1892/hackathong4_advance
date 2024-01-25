//Quiz.tsx
import React, { useState } from 'react';
import Question from './Question';

const questions = [
	{
		question: 'tran chau cang vao nam may"',
		choices: ['1955', '1945', '1965 '],
		answer: '1945',
	},
	{
		question: 'ai la cau thu hay nhat the gioi',
		choices: ['Messi', 'Ronaldo', 'ca2'],
		answer: 'ca2',
	},
	{
		question: 'dat nuoc nao  to chuc world cup 2022?',
		choices: ['VN', 'My', 'Nhat'],
		answer: 'VN',
	},
	{
		question: 'nam Nay la nam may?',
		choices: ['2022', '2023', '2024'],
		answer: '2024',
	},

];

const Quiz: React.FC = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);

	const handleAnswer = (answer: string) => {
		if (answer === questions[currentQuestion].answer) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			alert(`Quiz finished. You scored ${score}/${questions.length}`);
		}
	};

	return (
		<div>
			<h1 className="text-center">hackathong quiz</h1>
			{currentQuestion < questions.length ? (
				<Question
					question={questions[currentQuestion].question}
					choices={questions[currentQuestion].choices}
					answer={questions[currentQuestion].answer}
					onAnswer={handleAnswer}
				/>
			) : "null"
			}
		</div>
	)
}

export default Quiz;
