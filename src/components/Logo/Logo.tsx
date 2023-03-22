import React, { FC, memo } from "react";

import "./Logo.scss";

const Logo: FC = () => {
  return (
    <div className="logo">
      <img className="logo__logo-title" src="images/Logo.png" alt="logo" />
      <div className="logo__logo-line" />
      <h2 className="logo__description"></h2>
    </div>
  );
};

export default memo(Logo);
