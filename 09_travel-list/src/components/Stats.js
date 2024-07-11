const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <p className='stats'>
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }
  const numOfItems = items.length;
  const numOfPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numOfPackedItems / numOfItems) * 100);
  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? 'You got everything! Ready to go ✈️'
          : `💼 You have ${numOfItems} items on your list, and you already packed ${numOfPackedItems} (${percentage}%.)`}
      </em>
    </footer>
  );
};

export default Stats;
