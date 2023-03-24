import React, { FC, memo } from "react";

import "./Burger.scss";

const Burger: FC = () => {
  return (
    <button className="burger">
      <img src="icons/burger.svg" />
    </button>
  );
};

export default memo(Burger);
