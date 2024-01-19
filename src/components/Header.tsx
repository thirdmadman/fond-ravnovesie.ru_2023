'use client';

import { DEFAULT_PHONE_NUMBER } from '@/shared/text-constants';
import Image from 'next/image';
import '../styles/header.scss';
import Link from 'next/link';
import logo from '/public/images/logo-header.png';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const menuLinks = [
  { name: 'Главная', path: '/' },
  { name: 'Отчёты', path: '/reports' },
  { name: 'Проекты', path: '/projects' },
  { name: 'Сообщество', path: '/community' },
  { name: 'Контакты', path: '/contacts' },
];

export function Header() {
  const phoneNumber = DEFAULT_PHONE_NUMBER;

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const pathName = usePathname();

  const isLinkActive = (currentPath: string, linkPath: string) => {
    const currentRoute = currentPath.split('/')[1];
    return currentRoute === linkPath.replace('/', '') ? 'navigation__link_is-active' : '';
  };

  const getLink = (name: string, path: string, currentPath: string) => (
    <Link href={path} className={`navigation__link ${isLinkActive(currentPath, path)}`} key={name}>
      {name}
    </Link>
  );

  return (
    <header className="header">
      <div className="header__container">
        <Image className="header__logo" src={logo} alt="logo" width="160" height="90" />
        <nav className={`header__navigation navigation ${isBurgerMenuOpen ? 'header__navigation_is-open' : ''}`}>
          <div className="navigation__container">
            <button
              type="button"
              className={`header__button-burger-close ${
                isBurgerMenuOpen ? '' : 'header__button-burger-close_is-hidden'
              }`}
              aria-label="Close burger menu"
              onClick={() => setIsBurgerMenuOpen(false)}
            />
            <div className="navigation__links-container">
              {menuLinks.map((link) => getLink(link.name, link.path, pathName))}
            </div>
          </div>
        </nav>
        <Link className="header__phone" href={`tel:${phoneNumber}`}>
          {phoneNumber}
        </Link>
        <button
          type="button"
          className="header__button-burger"
          aria-label="Open burger menu"
          onClick={() => setIsBurgerMenuOpen(true)}
        />
      </div>
    </header>
  );
}
