const ShowDate = ({ count }) => {
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <p className='message'>
      <span>
        {count === 0
          ? 'Today is '
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        <strong>{date.toDateString()}</strong>.
      </span>
    </p>
  );
};

export default ShowDate;
