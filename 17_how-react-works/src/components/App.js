import { act, useState } from 'react';
import './App.css';

const content = [
  {
    summary: 'React is a library for building UIs',
    details:
      'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    summary: 'State management is like giving state a home',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    summary: 'We can think of props as the component API',
    details:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

const App = () => {
  return (
    <div className='app'>
      <Tabbed content={content} />
    </div>
  );
};

const Tabbed = ({ content }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className='tabs'>
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 2 ? (
        <TabContent
          item={content.at(activeTab)}
          key={content.at(activeTab).summary}
        />
      ) : (
        <DifferentContent />
      )}
    </>
  );
};

const Tab = ({ num, activeTab, onClick }) => {
  return (
    <button
      className={`tab ${activeTab === num ? 'active' : ''}`}
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
};

const TabContent = ({ item }) => {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  const handleInc = () => {
    setLikes((likes) => likes + 1);
  };

  const handleTripleInc = () => {
    setLikes((likes) => likes + 1);
    setLikes((likes) => likes + 1);
    setLikes((likes) => likes + 1);
  };

  const handleUndo = () => {
    setShowDetails(true);
    setLikes(0);
  };

  const handleUndoLater = () => {
    setTimeout(handleUndo, 2000);
  };

  return (
    <div className='tab-content'>
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className='tab-actions'>
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? 'Hide' : 'Show'}
        </button>

        <div className='hearts-counter'>
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button onClick={handleTripleInc}>+++</button>
        </div>
      </div>

      <div className='tab-undo'>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleUndoLater}>Undo in 2s</button>
      </div>
    </div>
  );
};

const DifferentContent = () => {
  return (
    <div className='tab-content'>
      <h4>I'm a DIFFERENT tab, so I reset state 💣💥</h4>
    </div>
  );
};

export default App;
