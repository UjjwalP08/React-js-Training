import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../store';

const Header = () => {
  const isAuth = useSelector(state => state.authReducer.isAuthenticate);
  // console.log(isAuth);
  const dipatch = useDispatch()

  const logoutHandler = (e)=>{
    e.preventDefault();
    dipatch(authAction.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
