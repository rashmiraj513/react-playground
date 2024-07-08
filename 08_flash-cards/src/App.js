import { useState } from 'react';
import './App.css';

const questions = [
  {
    id: 3457,
    question: 'What language is React based on?',
    answer: 'JavaScript',
  },
  {
    id: 7336,
    question: 'What are the building blocks of React apps?',
    answer: 'Components',
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: 'JSX',
  },
  {
    id: 1297,
    question: 'How to pass data from parent to child components?',
    answer: 'Props',
  },
  {
    id: 9103,
    question: 'How to give components memory?',
    answer: 'useState hook',
  },
  {
    id: 2002,
    question:
      'What do we call an input element that is completely synchronised with state?',
    answer: 'Controlled element',
  },
];

const App = () => {
  return <FlashCards />;
};

const FlashCards = () => {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className='flash-cards'>
      {questions.map((question) => (
        <div
          className={`card ${question.id === selectedId ? 'selected' : null}`}
          key={question.id}
          onClick={() => handleClick(question.id)}
        >
          <p>
            {selectedId !== question.id ? question.question : question.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;
