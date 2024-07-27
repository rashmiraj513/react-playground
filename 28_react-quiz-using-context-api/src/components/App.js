import { Header } from './Header';
import { Main } from './Main';
import { Error } from './Error';
import { Loader } from './Loader';
import { StartScreen } from './StartScreen';
import { Progress } from './Progress';
import { Question } from './Question';
import { Footer } from './Footer';
import { Timer } from './Timer';
import { FinishScreen } from './FinishScreen';
import { NextButton } from './NextButton';
import { useQuiz } from '../contexts/QuizContext';
import './App.css';

const App = () => {
  const { status } = useQuiz();

  return (
    <div className='App'>
      <Header />

      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen />}
        {status === 'active' && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === 'finished' && <FinishScreen />}
      </Main>
    </div>
  );
};

export default App;
