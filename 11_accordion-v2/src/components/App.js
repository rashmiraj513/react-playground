import { useState } from 'react';
import './App.css';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

const App = () => {
  return <Accordion data={faqs} />;
};

const Accordion = ({ data }) => {
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <div className='accordion'>
      {data.map((el, i) => (
        <AccordionItem
          currOpen={currOpen}
          onOpen={setCurrOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        currOpen={currOpen}
        onOpen={setCurrOpen}
        title='Children Props (Manually Added)'
        num={23}
        key='Children Props (Manually Added)'
      >
        <p>Allows React Developers to: </p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusale</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
};

const AccordionItem = ({ currOpen, onOpen, title, num, children }) => {
  const isOpen = currOpen === num;

  const handleToggle = () => {
    onOpen(isOpen ? null : num);
  };

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? '-' : '+'}</p>

      {isOpen && <div className='content-box'>{children}</div>}
    </div>
  );
};

export default App;
