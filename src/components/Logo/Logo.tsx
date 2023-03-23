import React, { FC, memo } from "react";

import "./Logo.scss";

const Logo: FC = () => {
  return (
    <div className="logo">
      <div className="logo__title-container">
        <img className="logo__logo-title" src="images/Logo.png" alt="logo" />
        <div className="logo__logo-line" />
      </div>
      <div className="logo__separator" />
      <p className="logo__description">
        Оформление, защита и развитие коммерческой недвижимости
      </p>
    </div>
  );
};

export default memo(Logo);
