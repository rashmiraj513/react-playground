export const Button = ({ children, onClick }) => {
  return (
    <button className='btn' onClick={onClick}>
      {children}
    </button>
  );
};
