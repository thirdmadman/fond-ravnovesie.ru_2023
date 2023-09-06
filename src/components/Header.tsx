import { DEFAULT_PHONE_NUMBER } from '@/shared/text-constants';
import Image from 'next/image';
import '../styles/header.scss';
import logo from '../../public/images/logo-header.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuLinks = [
  { name: 'Главная', path: '/' },
  { name: 'Отчёты', path: '/reports' },
  { name: 'Проекты', path: '/projects' },
  { name: 'Сообщество', path: '/community' },
  { name: 'Контакты', path: '/contacts' },
];

export function Header() {
  // const pathname = usePathname();

  const getLink = (name: string, path: string) => {
    // const isActive = pathname === path;

    return (
      <Link href={path} className="navigation__link" key={name}>
        {name}
      </Link>
    );
  };

  return (
    <header className="header">
      <Image className="header__logo" src={logo} alt="logo" width="160" height="90" />
      <nav className="header__navigation navigation">{menuLinks.map((link) => getLink(link.name, link.path))}</nav>
      <Link className="header__phone" href={`tel:${DEFAULT_PHONE_NUMBER}`}>
        {DEFAULT_PHONE_NUMBER}
      </Link>
    </header>
  );
}
