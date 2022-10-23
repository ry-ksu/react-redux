import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

type IFormData = {
  name: string;
  birthday: string;
  eMail: string;
  enLvl: string;
  gender: string;
  file: string;
  PDAgreement: boolean;
};

export const About = () => {
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
    console.log(data);
    // reset();
  };

  return (
    <div data-testid="pages/about">
      <h1>Forms</h1>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <label>
          Your name:
          <input
            data-testid="name"
            type="text"
            {...register('name', {
              required: 'This is required',
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
        <p>{errors.name && String(errors.name.message)}</p>

        <label>
          Your date of birthday:
          <input
            data-testid="birthday"
            type="date"
            {...register('birthday', { required: 'This is required' })}
          />
        </label>
        <p>{errors.birthday && String(errors.birthday.message)}</p>

        <label>
          Your e-mail:
          <input
            data-testid="eMail"
            type="text"
            {...register('eMail', {
              required: 'This is required',
              pattern: {
                value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                message: 'Check validation e-mail',
              },
            })}
          />
        </label>
        <p>{errors.eMail && String(errors.eMail.message)}</p>

        <label>
          Your english level:
          <select data-testid="enLvl" {...register('enLvl', { required: 'This is required' })}>
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
        <p>{errors.enLvl && String(errors.enLvl.message)}</p>

        <p>
          Your gender:
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
          Your photo:
          <input
            data-testid="file"
            type="file"
            accept="image/*,.png,.jpg,.gif,.web"
            {...register('file', {
              required: 'This is required',
              onChange: handlerFileChange,
            })}
          />
          <img src={fileCode} ref={imgInput} hidden />
        </label>
        <p>{errors.file && String(errors.file.message)}</p>

        <label>
          <input
            data-testid="PDAgreement"
            type="checkbox"
            {...register('PDAgreement', { required: 'This is required' })}
          />
          I consent to the processing of my personal data.
        </label>
        <p>{errors.PDAgreement && String(errors.PDAgreement.message)}</p>

        <button disabled={isSubmitted ? !isValid : !isDirty}>Submit</button>
      </form>
    </div>
  );
};
