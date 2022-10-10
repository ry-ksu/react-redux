// import React, { useState } from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import { Forms } from '.';
// import { UserProps, userList } from '../../data/usersList';

// const Mock = () => {
//   const [userCardsUpdate, setUserCardsUpdate] = useState(userList);
//   const [modalActive, setModalActive] = useState(false);
//   const handlerChangeUserList = (list: UserProps[], item: UserProps) => {
//     list.push(item);
//     setUserCardsUpdate(list);
//   };

//   return { userCardsUpdate, handlerChangeUserList, setModalActive };
// };

// describe('Forms component', () => {
//   test('render Forms', () => {
//     const { getByTestId } = render(
//       <Forms
//         cards={Mock().userCardsUpdate}
//         changeUserList={Mock().handlerChangeUserList}
//         setModalActive={Mock().setModalActive}
//       />
//     );

//     expect(getByTestId('pages/games')).toBeInTheDocument();
//   });
// });
