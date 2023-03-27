import React, { FC, memo } from "react";

import "./Offer.scss";

const Offer: FC = () => {
  return (
    <section className="offer">
      <div className="container">
        <h1 className="offer__header">ЛЕГАЛИЗАЦИЯ САМОСТРОЯ</h1>
        <ul>
          <li className="offer__label-pointer-1">ЛЕГАЛИЗАЦИЯ ЧЕРЕЗ ГЗК</li>
          <li className="offer__label-pointer-2">
            УЗАКОНИВАНИЕ НЕВЫЯВЛЕННЫХ ОБЪЕКТОВ
          </li>
          <li className="offer__label-pointer-3">УЗАКОНИВАНИЕ ЧЕРЕЗ СУД</li>
        </ul>
        <div className="offer__pointer-horizontal-1" />
        <div className="offer__pointer-rotated-1" />
        <div className="offer__pointer-horizontal-2" />
        <div className="offer__pointer-rotated-2" />
        <div className="offer__pointer-horizontal-3" />
        <div className="offer__pointer-rotated-3" />
        <ul>
          <li>от 150 тыс. рублей</li>
          <li>от 60 дней</li>
          <li>гарантия</li>
        </ul>
        <button>Бесплатная консультация</button>
      </div>
    </section>
  );
};

export default memo(Offer);
