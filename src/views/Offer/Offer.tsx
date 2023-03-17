import React, { FC, memo } from "react";

const Offer: FC = () => {
  return (
    <section className="offer">
      <h1>Легализция самостроя</h1>
      <ul>
        <li>Легализация через ГЗК</li>
        <li>Узаконивание невыявленных объектов</li>
        <li>Узаконивание через суд</li>
      </ul>
      <ul>
        <li>от 150 тыс. рублей</li>
        <li>от 60 дней</li>
        <li>гарантия</li>
      </ul>
      <button>Бесплатная консультация</button>
    </section>
  );
};

export default memo(Offer);
