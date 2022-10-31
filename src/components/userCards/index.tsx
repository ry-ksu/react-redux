// import React from 'react';
// // import { UserProps } from 'types';
// import style from './index.module.css';
// import { AppContext } from 'components/App';

// // type UserCardProps = {
// //   cards: UserProps[];
// // };

// export const UserCards = () => {
//   const { userCards } = React.useContext(AppContext);

//   return (
//     <div className={style.userCardsWrapper}>
//       {userCards.map((user) => (
//         <div
//           data-testid="pages/user-card"
//           className={style.userCard}
//           key={user.eMail + user.birthday}
//         >
//           <img src={user.file} />
//           <div className={style.content}>
//             <h3>
//               {user.name} ({user.gender})
//             </h3>
//             <h5>
//               Почта: <strong>{user.eMail}</strong>
//             </h5>
//             <h5>
//               Дата рождения: <strong>{user.birthday}</strong>
//             </h5>
//             <h5>
//               Уровень английского: <strong>{user.enLvl.toUpperCase()}</strong>
//             </h5>
//             <h4>
//               Согласие на обработку ПД: <strong>ДА</strong>
//             </h4>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
