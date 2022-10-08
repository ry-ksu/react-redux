import React from 'react';

export const createInput = (
  childrenLocation: 'top' | 'bottom',
  children: string,
  type: string,
  name: string,
  nameDirty: boolean,
  nameError: string,
  nameInput: React.RefObject<HTMLInputElement>,
  handlerInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
) => {
  if (childrenLocation === 'top') {
    return (
      <>
        {nameDirty && nameError && <div className="error">{nameError}</div>}
        <label>
          {children}
          <input onChange={handlerInputChange} type={type} name={name} ref={nameInput} />
        </label>
      </>
    );
  } else {
    return (
      <>
        {nameDirty && nameError && <div className="error">{nameError}</div>}
        <label>
          <input onChange={handlerInputChange} type={type} name={name} ref={nameInput} />
          {children}
        </label>
      </>
    );
  }
};
