import { useState } from 'react';

const withToggles = (WrappedComponent) => {
  // Creating a new compnent based on the incoming component.
  // You can directly return the component also.

  // return (props) => {
  const List = (props) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const displayItems = isCollapsed ? props.items.slice(0, 3) : props.items;

    const toggleOpen = () => {
      setIsOpen((isOpen) => !isOpen);
      setIsCollapsed(false);
    };

    return (
      <div className='list-container'>
        <div className='heading'>
          <h2>{props.title}</h2>
          <button onClick={toggleOpen}>
            {isOpen ? <span>&or;</span> : <span>&and;</span>}
          </button>
        </div>
        {isOpen && <WrappedComponent {...props} items={displayItems} />}

        <button onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}>
          {isCollapsed ? `Show all ${props.items.length}` : 'Show less'}
        </button>
      </div>
    );
  };

  return List;
};

export default withToggles;
