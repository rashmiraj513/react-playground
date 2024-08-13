import { useSelector } from 'react-redux';

const Customer = () => {
  const fullName = useSelector((store) => store.customer.fullName);
  const firstName = fullName.split(' ')[0];

  const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <h2 style={{ textAlign: 'right' }}>
      👋 Welcome, {capitalizeFirstLetter(firstName)}
    </h2>
  );
};

export default Customer;
