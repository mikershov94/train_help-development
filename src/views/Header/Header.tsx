import React, { FC, memo } from "react";
import { Contacts, Logo } from "../../components";

import "./Header.scss";

const Header: FC = () => {
  return (
    <header className="page-header">
      <div className="container">
        <header className="page-header__header">
          <Logo />
          <div className="page-header__right-container">
            <Contacts />
            <button className="page-header__call-btn">Заказать звонок</button>
          </div>
        </header>
        <footer className="page-header__footer">
          <nav>
            {/* <svg>-</svg> */}
            <ul className="page-header__nav-items">
              <li>Услуги</li>
              <li>О компании</li>
              <li>Отзывы</li>
              <li>Статьи</li>
              <li>Контакты</li>
            </ul>
          </nav>
          <div className="page-header__search">
            <input type="search" />
            <span>Значок лупы</span>
          </div>
        </footer>
      </div>
    </header>
  );
};

export default memo(Header);
