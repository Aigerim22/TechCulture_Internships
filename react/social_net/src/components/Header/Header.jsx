import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        alt=""
        src="https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg"
      />
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
