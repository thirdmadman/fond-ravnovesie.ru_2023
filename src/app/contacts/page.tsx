import { Header } from '@/components/shared/Header';
import '../../styles/contacts/contacts.scss';
import { Footer } from '@/components/shared/Footer';
import { Metadata } from 'next';
import { SectionContacts } from '@/components/contacts/SectionContacts';

export const metadata: Metadata = {
  title: 'Контакты | Благотворительный фонд Равновесие',
  description:
    'Комплексная поддержка людей с депрессивным, биполярным, тревожным и другими психическими расстройствами',
};

export default function Contacts() {
  return (
    <div className="contacts-page">
      <Header />
      <div className="container">
        <SectionContacts />
        <Footer />
      </div>
    </div>
  );
}
