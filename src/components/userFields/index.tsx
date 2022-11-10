// Library
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
// Components
import { ReactHookFormField } from '../reactHookFormField';
// Styles
import styles from './index.module.css';
import './style.css';
// Other
import { IFormData } from '../../types';

type IFormsProps = {
  onSubmit: (card: IFormData) => void;
};

export const UserFields = (prop: IFormsProps) => {
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
          {
            <ReactHookFormField
              register={register}
              errors={errors}
              label="Name *"
              name="name"
              type="text"
              order={true}
              options={{
                required: 'Name is required',
                pattern: {
                  value: /^[A-Za-zА-Яа-я]+$/i,
                  message: 'Name must not include numbers',
                },
                minLength: {
                  value: 2,
                  message: 'Min length is 2',
                },
              }}
            />
          }

          {
            <ReactHookFormField
              register={register}
              errors={errors}
              label="Date of birthday *"
              name="birthday"
              type="date"
              order={true}
              options={{
                required: 'Birthday is required',
              }}
            />
          }

          {
            <ReactHookFormField
              register={register}
              errors={errors}
              label="E-mail *"
              name="eMail"
              type="text"
              order={true}
              options={{
                required: 'E-mail is required',
                pattern: {
                  value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                  message: 'Check validation e-mail',
                },
              }}
            />
          }

          <label>
            English level *
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
            Gender
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
            Photo *
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

          {
            <ReactHookFormField
              register={register}
              errors={errors}
              label="I consent to the processing of my personal data. *"
              name="PDAgreement"
              type="checkbox"
              order={false}
              options={{
                required: 'Agreement is required',
              }}
            />
          }

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
