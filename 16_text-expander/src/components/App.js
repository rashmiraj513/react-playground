import './App.css';
import { useState } from 'react';

const App = () => {
  return (
    <div className='app'>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonTetxt='Show text'
        collapseButtonText='Collapse text'
        buttonColor='#ff6622'
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className='box'>
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
};

const TextExpander = ({
  collapsedNumWords = 10,
  expandButtonTetxt = 'Show more',
  collapseButtonText = 'Show less',
  expanded = false,
  buttonColor = '#1f09cd',
  className,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const handleClick = () => {
    setIsExpanded((expanded) => !expanded);
  };

  // const displayText = isExpanded
  //   ? children
  //   : children.split(' ').length > collapsedNumWords
  //   ? children.split(' ').slice(0, collapsedNumWords).join(' ') + '...'
  //   : children;
  // Shortcut of above condition
  const displayText =
    isExpanded || children.split(' ').length <= collapsedNumWords
      ? children
      : children.split(' ').slice(0, collapsedNumWords).join(' ') + '...';

  const buttonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: buttonColor,
    marginLeft: '6px',
    font: 'inherit',
  };

  return (
    <div className={`text-expander ${className}`}>
      <span>{displayText}</span>
      <button style={buttonStyle} onClick={handleClick}>
        {isExpanded ? collapseButtonText : expandButtonTetxt}
      </button>
    </div>
  );
};

export default App;
