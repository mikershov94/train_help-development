import React, { FC, memo } from "react";

import "./Header.scss";

const Header: FC = () => {
  return (
    <header className="page-header">
      <header className="page-header__header">
        <div className="logo">
          {/* <img className="logo__logo" src="/public/images/Logo.png" /> */}
          <h2 className="logo__label"></h2>
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
      </header>
      <footer className="page-header__footer">
        <nav>
          <svg>-</svg>
          <ul>
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
