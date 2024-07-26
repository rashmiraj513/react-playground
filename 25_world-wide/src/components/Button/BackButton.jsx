import { useNavigate } from 'react-router-dom';
import Button from './Button';

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <Button type='back' onClick={handleClick}>
      &larr; Back
    </Button>
  );
};

export default BackButton;
