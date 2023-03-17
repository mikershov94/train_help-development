import React, { FC, memo } from "react";

const Header: FC = () => {
  return (
    <header className="page-header">
      <header className="page-header__header">
        <div className="logo">
          <div className="logo__logo"></div>
          <div className="logo__label"></div>
        </div>
        <div className="contacts">
          <div className="contacts__phone">+7 (495) 177-65-96</div>
          <div className="contacts__email">info@helpdevelopment.ru</div>
        </div>
        <button>Заказать звонок</button>
      </header>
      <footer className="page-header__footer">
        <nav>
          <div>-</div>
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
