import React, { useState } from 'react';
import { Forms } from 'components/forms';
// import { UserCards } from 'components/userCards';
import { UserProps, userList } from '../../data/usersList';

export const UserForms = () => {
  const [userCardsUpdate, setUserCardsUpdate] = useState(userList);

  const handlerChangeUserList = (list: UserProps[], item: UserProps) => {
    list.push(item);
    setUserCardsUpdate(list);
  };

  return (
    <div data-testid="pages/user-forms">
      <Forms cards={userCardsUpdate} changeUserList={handlerChangeUserList} />
      {/* <UserCards cards={userCardsUpdate} /> */}
    </div>
  );
};
