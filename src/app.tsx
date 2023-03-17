import React, { FC, memo } from "react";
import { Header, Offer } from "./views";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Offer />
    </div>
  );
};

export default memo(App);
