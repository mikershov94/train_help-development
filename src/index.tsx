import React, { FC } from "react";
import ReactDOM from "react-dom/client";
import { Header, Offer } from "./views";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Offer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<App />);
