import React, { FC, memo } from "react";

import "./Contacts.scss";

const Contacts: FC = () => {
  return (
    <div className="contacts">
      <a className="contacts__phone" href="tel:+74951776596">
        +7 (495) 177-65-96
      </a>
      <a className="contacts__email" href="mailto:info@helpdevelopment.ru">
        info@helpdevelopment.ru
      </a>
    </div>
  );
};

export default memo(Contacts);
