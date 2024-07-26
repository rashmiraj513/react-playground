import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <div className='nav-menu'>
          <li>
            <NavLink to='/pricing'>Pricing</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
