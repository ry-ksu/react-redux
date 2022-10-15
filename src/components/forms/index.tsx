import React, { useEffect, useRef, useState } from 'react';
import { createInput } from './input';
import { UserProps } from 'types';
import styles from './index.module.css';
import './style.css';

type FormsProps = {
  onSubmit: (card: UserProps) => void;
};

export const Forms = (props: FormsProps) => {
  const nameInput = useRef<HTMLInputElement>(null);
  const birthdayInput = useRef<HTMLInputElement>(null);
  const eMailInput = useRef<HTMLInputElement>(null);
  const enLvlInput = useRef<HTMLSelectElement>(null);
  const PDAgreementInput = useRef<HTMLInputElement>(null);
  const maleInput = useRef<HTMLInputElement>(null);
  const femaleInput = useRef<HTMLInputElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const submitBtn = useRef<HTMLInputElement>(null);
  const imgInput = useRef<HTMLImageElement>(null);

  const [nameDirty, setNameDirty] = useState(false);
  const [birthDirty, setBirthDirty] = useState(false);
  const [eMailDirty, setEMailDirty] = useState(false);
  const [enLvlDirty, setEnLvlDirty] = useState(false);
  const [PDAgreementDirty, setPDAgreementDirty] = useState(false);
  const [fileDirty, setFileDirty] = useState(false);
  const [submitDirty, setSubmitDirty] = useState(false);
  const [fileCode, setFileCode] = useState('');

  const [nameError, setNameError] = useState('');
  const [birthError, setBirthError] = useState('');
  const [eMailError, setEMailError] = useState('');
  const [enLvlError, setEnLvlError] = useState('');
  const [PDAgreementError, setPDAgreementError] = useState('');
  const [fileError, setFileError] = useState('');

  useEffect(() => {
    if (submitBtn.current?.hasAttribute('useEffect')) {
      checkSubmitDisabled();
      addNewUser();
    }
  });

  const addNewUser = () => {
    if (
      submitBtn.current?.hasAttribute('submitBtnClick') &&
      !submitBtn.current?.hasAttribute('disabled') &&
      nameInput.current?.value != null &&
      birthdayInput.current?.value != null &&
      eMailInput.current?.value != null &&
      enLvlInput.current?.value != null &&
      PDAgreementInput.current != null &&
      maleInput.current != null &&
      fileInput.current?.files != null
    ) {
      props.onSubmit({
        name: nameInput.current.value,
        birthday: birthdayInput.current.value,
        eMail: eMailInput.current.value,
        enLvl: enLvlInput.current.value,
        PDAgreement: true,
        sex: femaleInput.current?.checked ? 'Жен.' : 'Муж.',
        file: fileCode,
      });

      nameInput.current.value = '';
      birthdayInput.current.value = '';
      eMailInput.current.value = '';
      enLvlInput.current.value = 'notChosen';
      PDAgreementInput.current.checked = false;
      maleInput.current.checked = true;
      fileInput.current.value = '';
      setFileCode('');
      imgInput.current?.setAttribute('hidden', '');

      submitBtn.current.removeAttribute('useEffect');
      submitBtn.current.setAttribute('disabled', '');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    submitBtn.current?.setAttribute('useEffect', '');
    submitBtn.current?.setAttribute('submitBtnClick', '');

    e.preventDefault();
    setNameDirty(true);
    setBirthDirty(true);
    setEMailDirty(true);
    setEnLvlDirty(true);
    setPDAgreementDirty(true);
    setFileDirty(true);

    // Заставляю компонент перерисовываться, иначе
    // не будет работать useEffect при корректном заполнении со 2+ раза
    if (submitDirty) {
      setSubmitDirty(false);
    } else {
      setSubmitDirty(true);
    }

    checkNameErrors();
    checkBirthErrors();
    checkEMailErrors();
    checkEnLvlErrors();
    checkPDAgreementErrors();
    checkFileErrors();
  };

  const checkSubmitDisabled = () => {
    if (submitBtn.current == null) {
      return;
    }

    if (
      !nameDirty &&
      !birthDirty &&
      !eMailDirty &&
      !enLvlDirty &&
      !PDAgreementDirty &&
      !fileDirty &&
      (nameInput || birthdayInput || eMailInput || enLvlDirty || PDAgreementInput)
    ) {
      submitBtn.current.removeAttribute('disabled');
    } else {
      submitBtn.current.setAttribute('disabled', '');
    }
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
    const necessaryYearsOld = 2;
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

  const checkFileErrors = () => {
    if (fileInput.current?.files?.length === 0) {
      setFileError('Необходимо загрузить фотографию');
    } else {
      setFileError('');
      setFileDirty(false);
    }
  };

  const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    submitBtn.current?.removeAttribute('submitBtnClick');
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
        break;
      case 'file':
        fileDirty && checkFileErrors();
    }
    checkSubmitDisabled();
  };

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
    handlerInputChange(e);
  };

  return (
    <>
      <h1 className={styles.header}>Forms</h1>
      <div className={styles.formWrapper}>
        <form data-testid="user-form" onSubmit={handleSubmit}>
          {createInput(
            'name',
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
            'birthday',
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
            'e-mail',
            'top',
            'Ваш e-mail:',
            'text',
            'e-mail',
            eMailDirty,
            eMailError,
            eMailInput,
            handlerInputChange
          )}

          <label>
            Ваш уровень английского:
            <select data-testid="enLvl" onChange={handlerInputChange} name="enLvl" ref={enLvlInput}>
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
          {enLvlDirty && enLvlError && <div className="error">{enLvlError}</div>}

          <p>
            Ваш пол:
            <label>
              <input type="radio" name="sex" defaultChecked ref={maleInput} />
              Муж.
            </label>
            <label>
              <input type="radio" name="sex" ref={femaleInput} />
              Жен.
            </label>
          </p>

          <label>
            Прикрепите вашу фотографию:
            <input
              data-testid="file"
              onChange={handlerFileChange}
              type="file"
              name="file"
              ref={fileInput}
              accept="image/*,.png,.jpg,.gif,.web"
            />
            <img src={fileCode} ref={imgInput} hidden />
          </label>
          {fileDirty && fileError && <div className="error">{fileError}</div>}

          {createInput(
            'PDAgreement',
            'bottom',
            'Даю согласие на обработку моих персональных данных',
            'checkbox',
            'PDAgreement',
            PDAgreementDirty,
            PDAgreementError,
            PDAgreementInput,
            handlerInputChange
          )}

          <input
            data-testid="user-form/submit-btn"
            type="submit"
            value="Отправить форму"
            disabled
            ref={submitBtn}
          />
        </form>
      </div>
    </>
  );
};
