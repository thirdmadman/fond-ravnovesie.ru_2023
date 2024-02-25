'use client';

import { useState } from 'react';

import '@/styles/home/donationForm.scss';

export function DonationForm() {
  const [state, setState] = useState({
    isMonthly: true,
    amount: '',
    nameAndFamily: '',
    email: '',
  });

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const getMonthlyReminder = () => (
    <div className=" form-inputs__reminder form-inputs__reminder_monthly">
      Вы оформляете подписку на ежемесячное пожертвование указанной суммы. Отменить подписку вы можете обратившись на
      почту <a href="email:info@fond-ravnovesie.ru">info@fond-ravnovesie.ru</a>
    </div>
  );

  const getOnceReminder = () => (
    <div className="form-inputs__reminder form-inputs__reminder_once">
      По возникшим вопросам вы можете обратиться на почту{' '}
      <a href="email:info@fond-ravnovesie.ru">info@fond-ravnovesie.ru</a>
    </div>
  );

  return (
    <form className="donation-form" onSubmit={handleSubmit}>
      <div className="donation-form__type-switch">
        <div
          className={`donation-form__switch-button ${state.isMonthly ? 'donation-form__switch-button_active' : ''}`}
          onClick={() => setState({ ...state, isMonthly: true })}
          role="button"
        >
          Ежемесячно
        </div>
        <div
          className={`donation-form__switch-button ${state.isMonthly ? '' : 'donation-form__switch-button_active'}`}
          onClick={() => setState({ ...state, isMonthly: false })}
          role="button"
        >
          Разово
        </div>
      </div>
      <div className="donation-form__inputs form-inputs">
        <label htmlFor="amount" className="form-inputs__label-amount">
          <input
            className={`form-inputs__input-amount ${state.isMonthly ? '' : 'form-inputs__input-amount_once'}`}
            aria-label="Amount"
            id="amount"
            name="amount"
            type="text"
            value={state.amount}
            onChange={handleInputChange}
            placeholder="200"
          />
          {state.isMonthly ? '₽ / мес' : '₽'}
        </label>

        <input
          aria-label="Name and Family Name"
          id="nameAndFamily"
          name="nameAndFamily"
          type="text"
          value={state.nameAndFamily}
          onChange={handleInputChange}
          placeholder="Имя и Фамилия *"
        />
        <input
          aria-label="Email"
          id="email"
          name="email"
          type="email"
          value={state.email}
          onChange={handleInputChange}
          placeholder="E-mail для чека *"
        />
        <button id="submit" type="submit">
          Оформить подписку
        </button>

        {state.isMonthly ? getMonthlyReminder() : getOnceReminder()}

        <div className="form-inputs__reminder form-inputs__reminder_rules">
          Совершая пожертвование, вы соглашаетесь с условиями <a href="/">Договора-офертой</a> и{' '}
          <a href="/">Политики конфиденциальности</a>
        </div>
      </div>
    </form>
  );
}
