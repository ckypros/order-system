import HeaderCartButton from './HeaderCartButton';

import mealsImage from '../../Assets/meals.jpg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food' />
      </div>
    </>
  );
};

export default Header;