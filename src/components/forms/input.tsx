import React from 'react';

export const createInput = (
  dataTestId: string,
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
        <label>
          {children}
          <input
            data-testid={dataTestId}
            onChange={handlerInputChange}
            type={type}
            name={name}
            ref={nameInput}
          />
        </label>
        {nameDirty && nameError && <div className="error">{nameError}</div>}
      </>
    );
  } else {
    return (
      <>
        <label>
          <input
            data-testid={dataTestId}
            onChange={handlerInputChange}
            type={type}
            name={name}
            ref={nameInput}
          />
          {children}
        </label>
        {nameDirty && nameError && <div className="error">{nameError}</div>}
      </>
    );
  }
};
