import React, { useRef, useState } from 'react';
import { createInput } from './input';

export const Forms = () => {
  const nameInput = useRef<HTMLInputElement>(null);
  const birthdayInput = useRef<HTMLInputElement>(null);
  const eMailInput = useRef<HTMLInputElement>(null);
  const enLvlInput = useRef<HTMLSelectElement>(null);
  const PDAgreementInput = useRef<HTMLInputElement>(null);
  const subscriptionInput = useRef<HTMLInputElement>(null);
  const file = useRef<HTMLInputElement>(null);

  const [nameDirty, setNameDirty] = useState(false);
  const [birthDirty, setBirthDirty] = useState(false);
  const [eMailDirty, setEMailDirty] = useState(false);
  const [enLvlDirty, setEnLvlDirty] = useState(false);
  const [PDAgreementDirty, setPDAgreementDirty] = useState(false);

  const [nameError, setNameError] = useState('');
  const [birthError, setBirthError] = useState('');
  const [eMailError, setEMailError] = useState('');
  const [enLvlError, setEnLvlError] = useState('');
  const [PDAgreementError, setPDAgreementError] = useState('');

  const [image, setImage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNameDirty(true);
    setBirthDirty(true);
    setEMailDirty(true);
    setEnLvlDirty(true);
    setPDAgreementDirty(true);

    checkNameErrors();
    checkBirthErrors();
    checkEMailErrors();
    checkEnLvlErrors();
    checkPDAgreementErrors();
  };

  const checkNameErrors = () => {
    const re = /\d/;
    const nameValue = String(nameInput.current?.value);

    if (re.test(nameValue)) {
      setNameError('Имя не может содержать цифры');
    } else if (nameValue.length === 0) {
      setNameError('Необходимо ввести имя');
    } else if (nameValue.length === 1) {
      setNameError('Имя не может состоять из одной буквы');
    } else {
      setNameError('');
      setNameDirty(false);
    }
  };

  const checkBirthErrors = () => {
    const yearMilliseconds = 24 * 60 * 60 * 1000 * 365;
    const necessaryYearsOld = 45;
    const birthValue = String(birthdayInput.current?.value);

    if (birthValue.length === 0) {
      setBirthError('Необходимо заполнить дату рождения');
    } else if (new Date() < new Date(birthValue)) {
      setBirthError('К сожалению, вы еще не родились');
    } else if (
      Date.now() <
      Date.parse(String(birthdayInput.current?.value)) + yearMilliseconds * necessaryYearsOld
    ) {
      setBirthError(`Заполнять форму можно только с ${necessaryYearsOld} лет`);
    } else {
      setBirthError('');
      setBirthDirty(false);
    }
  };

  const checkEMailErrors = () => {
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const eMailValue = String(eMailInput.current?.value);

    if (eMailValue.length === 0) {
      setEMailError('Необходимо ввести e-mail');
    } else if (!re.test(eMailValue)) {
      setEMailError('Проверьте корректность введенной почты');
    } else {
      setEMailError('');
      setEMailDirty(false);
    }
  };

  const checkEnLvlErrors = () => {
    if (enLvlInput.current?.value === 'notChosen') {
      setEnLvlError('Необходимо выбрать уровень английского языка');
    } else {
      setEnLvlError('');
      setEnLvlDirty(false);
    }
  };

  const checkPDAgreementErrors = () => {
    if (!PDAgreementInput.current?.checked) {
      setPDAgreementError('Необходимо дать согласие на обработку персональных данных');
    } else {
      setPDAgreementError('');
      setPDAgreementDirty(false);
    }
  };

  const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    switch (e.target.name) {
      case 'name':
        nameDirty && checkNameErrors();
        break;
      case 'birthday':
        birthDirty && checkBirthErrors();
        break;
      case 'e-mail':
        eMailDirty && checkEMailErrors();
        break;
      case 'enLvl':
        enLvlDirty && checkEnLvlErrors();
        break;
      case 'PDAgreement':
        PDAgreementDirty && checkPDAgreementErrors();
    }
  };

  const handlerFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files == null) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
      setImage(String(ev.target?.result));
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Формы</h1>

      {createInput(
        'top',
        'Ваше имя:',
        'text',
        'name',
        nameDirty,
        nameError,
        nameInput,
        handlerInputChange
      )}

      {createInput(
        'top',
        'Дата вашего рождения:',
        'date',
        'birthday',
        birthDirty,
        birthError,
        birthdayInput,
        handlerInputChange
      )}

      {createInput(
        'top',
        'Ваш e-mail:',
        'text',
        'e-mail',
        eMailDirty,
        eMailError,
        eMailInput,
        handlerInputChange
      )}

      {enLvlDirty && enLvlError && <div className="error">{enLvlError}</div>}
      <label>
        Ваш уровень английского:
        <select onChange={handlerInputChange} name="enLvl" ref={enLvlInput}>
          <option value="notChosen">Выберете значение</option>
          <option value="a0">Не изучал данный язык</option>
          <option value="a1">(А1) – начальный</option>
          <option value="a2">(А2) – ниже среднего</option>
          <option value="b1">(В1) – средний</option>
          <option value="b2">(В2) – выше среднего</option>
          <option value="c1">(C1) – продвинутый</option>
          <option value="c2">(C2) – профессиональный уровень владения</option>
        </select>
      </label>

      {createInput(
        'bottom',
        'Даю согласие на обработку моих персональных данных',
        'checkbox',
        'PDAgreement',
        PDAgreementDirty,
        PDAgreementError,
        PDAgreementInput,
        handlerInputChange
      )}

      {/* Это должен быть switcher */}
      <label>
        <input
          onChange={handlerInputChange}
          type="checkbox"
          name="subscription"
          ref={subscriptionInput}
        />
        Я хочу получать уведомления о промоакциях
      </label>

      <label>
        Прикрепите вашу фотографию
        <input
          onChange={handlerFileChange}
          type="file"
          name="picture"
          ref={file}
          accept="image/*,.png,.jpg,.gif,.web"
        />
        <img src={image} />
      </label>

      <input type="submit" value="submit" />
    </form>
  );
};
