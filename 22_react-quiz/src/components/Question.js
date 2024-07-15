import { Options } from './Options';

export const Question = ({ question, answer, dispatch }) => {
  return (
    <div className='question'>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};
