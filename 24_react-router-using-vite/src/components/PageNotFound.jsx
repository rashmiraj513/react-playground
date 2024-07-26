import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='page-not-found'>
      <h1>Page Not Found.</h1>
      <h2>
        Click <NavLink to='/'>here</NavLink> to return to Homepage.
      </h2>
    </div>
  );
};

export default PageNotFound;
