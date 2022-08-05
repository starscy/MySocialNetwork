import React from "react";
import cl from "./NavBar.module.css";
import MyLink from "../UI/link/MyLink";

const NavBar = (props) => {
  return (
    <div className={cl.nav}>
      <MyLink to="/profile">Профиль</MyLink>
      <MyLink to="/messages">Сообщения</MyLink>
      <MyLink to="/users">Друзья</MyLink>
      <MyLink to="/news">Новости</MyLink>
      <MyLink to="/music">Музыка</MyLink>
      <MyLink to="/settings">Настройки </MyLink>

      {props.auth.isAuth ? (
        // props.auth.login ? (
        <div className={cl.logAva}>
          {props.auth.login}
          <button onClick={props.logOut}>Выйти</button>s
        </div>
      ) : (
        // ) : (
        //   "Me"
        // )
        <MyLink to="/login" className={cl.login}>
          "Login"
        </MyLink>
      )}
    </div>
  );
};

export default NavBar;
