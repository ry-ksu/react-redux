import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { UserProps } from '../../types';

import styles from './index.module.css';
import './style.css';

type IFormData = {
  name: string;
  birthday: string;
  eMail: string;
  enLvl: string;
  gender: string;
  file: string;
  PDAgreement: boolean;
};

type IFormsProps = {
  onSubmit: (card: UserProps) => void;
};

export const Forms = (prop: IFormsProps) => {
  const imgInput = useRef<HTMLImageElement>(null);
  const [fileCode, setFileCode] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, errors, isValid, isSubmitted },
  } = useForm<IFormData>({
    defaultValues: {
      name: '',
      birthday: '',
      eMail: '',
      enLvl: '',
      gender: '',
      file: '',
      PDAgreement: false,
    },
  });

  const handlerFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files == null) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
      setFileCode(String(ev.target?.result));
    };
    reader.readAsDataURL(e.target.files[0]);

    imgInput.current?.removeAttribute('hidden');
  };

  const onSubmit = (data: IFormData) => {
    data.file = fileCode;
    prop.onSubmit(data);
    reset();
    setFileCode('');
    imgInput.current?.setAttribute('hidden', '');
  };

  return (
    <div data-testid="pages/about">
      <h1 className={styles.header}>Forms</h1>
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <label>
            Name:
            <input
              data-testid="name"
              type="text"
              {...register('name', {
                required: 'Name is required',
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Name must not include numbers',
                },
                minLength: {
                  value: 2,
                  message: 'Min length is 2',
                },
              })}
            />
          </label>
          <p className="error">{errors.name && String(errors.name.message)}</p>

          <label>
            Date of birthday:
            <input
              data-testid="birthday"
              type="date"
              {...register('birthday', { required: 'Birthday is required' })}
            />
          </label>
          <p className="error">{errors.birthday && String(errors.birthday.message)}</p>

          <label>
            E-mail:
            <input
              data-testid="eMail"
              type="text"
              {...register('eMail', {
                required: 'E-mail is required',
                pattern: {
                  value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                  message: 'Check validation e-mail',
                },
              })}
            />
          </label>
          <p className="error">{errors.eMail && String(errors.eMail.message)}</p>

          <label>
            English level:
            <select
              data-testid="enLvl"
              {...register('enLvl', { required: 'English level is required' })}
            >
              <option value="">-- Check a value --</option>
              <option value="a0">I have not studied English</option>
              <option value="a1">(А1) – Beginner</option>
              <option value="a2">(А2) – Elementary</option>
              <option value="b1">(В1) – Intermediate</option>
              <option value="b2">(В2) – Upper-Intermediate</option>
              <option value="c1">(C1) – Advanced</option>
              <option value="c2">(C2) – Proficiency</option>
            </select>
          </label>
          <p className="error">{errors.enLvl && String(errors.enLvl.message)}</p>

          <p>
            Gender:
            <label>
              <input type="radio" value="male" {...register('gender')} defaultChecked />
              Male
            </label>
            <label>
              <input type="radio" value="female" {...register('gender')} />
              Female
            </label>
          </p>

          <label>
            Photo:
            <input
              data-testid="file"
              type="file"
              accept="image/*,.png,.jpg,.gif,.web"
              {...register('file', {
                required: 'Photo is required',
                onChange: handlerFileChange,
              })}
            />
            <img src={fileCode} ref={imgInput} hidden />
          </label>
          <p className="error">{errors.file && String(errors.file.message)}</p>

          <label>
            <input
              data-testid="PDAgreement"
              type="checkbox"
              {...register('PDAgreement', { required: 'Agreement is required' })}
            />
            I consent to the processing of my personal data.
          </label>
          <p className="error">{errors.PDAgreement && String(errors.PDAgreement.message)}</p>

          <input
            data-testid="user-form/submit-btn"
            type="submit"
            value="Submit"
            disabled={isSubmitted ? !isValid : !isDirty}
          />
        </form>
      </div>
    </div>
  );
};
