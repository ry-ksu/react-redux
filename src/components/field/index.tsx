import React from 'react';
import { UseFormRegister, FieldErrorsImpl } from 'react-hook-form';
import { IFormData } from '../../types';

type IFieldTypes = {
  register: UseFormRegister<IFormData>;
  errors: Partial<
    FieldErrorsImpl<{
      [name: string]: string;
    }>
  >;
  label: string;
  //! Откуда ts берет эти типы?
  name: 'name' | 'file' | 'birthday' | 'eMail' | 'enLvl' | 'gender' | 'PDAgreement';
  type: string;
  order: boolean;
  options?: Record<string, unknown>;
};

export const Field = (prop: IFieldTypes) => {
  return (
    <>
      <label>
        {prop.order && prop.label}
        <input
          data-testid={prop.name}
          type={prop.type}
          {...prop.register(`${prop.name}`, prop.options)}
        />
        {!prop.order && prop.label}
      </label>
      <p className="error">{prop.errors[prop.name] && String(prop.errors[prop.name]!.message)}</p>
    </>
  );
};
