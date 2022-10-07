import React, { useRef, useState } from 'react';

export const Forms = () => {
  const nameInput = useRef<HTMLInputElement>(null);
  const birthdayInput = useRef<HTMLInputElement>(null);
  const eMailInput = useRef<HTMLInputElement>(null);

  const [nameDirty, setNameDirty] = useState(false);
  const [birthDirty, setBirthDirty] = useState(false);
  const [eMailDirty, setEMailDirty] = useState(false);

  const [nameError, setNameError] = useState('');
  const [birthError, setBirthError] = useState('');
  const [eMailError, setEMailError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNameDirty(true);
    setBirthDirty(true);
    setEMailDirty(true);

    checkNameErrors();
    checkBirthErrors();
    checkEMailErrors();
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

  // onChange или onBlure;
  const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Формы</h1>
      {nameDirty && nameError && <div className="error">{nameError}</div>}
      <label>
        Ваше имя:
        <input onChange={handlerInputChange} type="text" name="name" ref={nameInput} />
      </label>
      {birthDirty && birthError && <div className="error">{birthError}</div>}
      <label>
        Дата вашего рождения:
        <input onChange={handlerInputChange} type="date" name="birthday" ref={birthdayInput} />
      </label>
      {eMailDirty && eMailError && <div className="error">{eMailError}</div>}
      <label>
        Ваш e-mail:
        <input onChange={handlerInputChange} type="text" name="e-mail" ref={eMailInput} />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
};
