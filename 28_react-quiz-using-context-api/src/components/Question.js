import { useQuiz } from '../contexts/QuizContext';
import { Options } from './Options';

export const Question = () => {
  const { questions, index } = useQuiz();
  const question = questions.at(index);

  return (
    <div className='question'>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
};
