import React, { FC, memo } from "react";
import Logo from "../../components";

import "./Header.scss";

const Header: FC = () => {
  return (
    <header className="page-header">
      <div className="page-header__header">
        <div className="logo">
          <img className="logo__logo-title" src="images/Logo.png" alt="logo" />
          <div className="logo__logo-line" />
          <h2 className="logo__description"></h2>
        </div>
        <div className="contacts">
          <a className="contacts__phone" href="tel:+74951776596">
            +7 (495) 177-65-96
          </a>
          <a className="contacts__email" href="mailto:info@helpdevelopment.ru">
            info@helpdevelopment.ru
          </a>
        </div>
        <button>Заказать звонок</button>
      </div>
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
    </header>
  );
};

export default memo(Header);
