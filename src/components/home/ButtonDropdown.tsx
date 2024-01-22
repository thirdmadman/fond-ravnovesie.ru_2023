'use client';

import { useState } from 'react';
import '@/styles/home/buttonDropdown.scss';

interface ButtonDropdownProps {
  buttonText: string;
  children: JSX.Element[];
}
// button-dropdown_is-opened
export function ButtonDropdown({ children, buttonText }: ButtonDropdownProps) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className={`button-dropdown ${isOpened ? 'button-dropdown_is-opened' : ''}`}
      onClick={() => setIsOpened(!isOpened)}
    >
      <div className="button-dropdown__text">{buttonText}</div>
      <ul className="dropdown-list">
        {children.map((el, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={i}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
