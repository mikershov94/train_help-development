import React, { FC, memo } from "react";
import { Burger, Contacts, Logo } from "../../components";
import Search from "../../components/Search";

import "./Header.scss";

const Header: FC = () => {
  return (
    <header className="page-header">
      <div className="container">
        <div className="page-header__header">
          <Logo />
          <div className="page-header__right-container">
            <Contacts />
            <button className="page-header__call-btn">Заказать звонок</button>
          </div>
        </div>
        <div className="page-header__footer">
          <nav className="page-header__nav">
            <Burger />
            <ul className="page-header__nav-items">
              <li className="page-header__nav-item">Услуги</li>
              <li className="page-header__nav-item">О компании</li>
              <li className="page-header__nav-item">Отзывы</li>
              <li className="page-header__nav-item">Статьи</li>
              <li className="page-header__nav-item">Контакты</li>
            </ul>
          </nav>
          <Search placeholder="найти на сайте..." />
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
