import Link from 'next/link';
import { DonationForm } from '@/components/shared/DonationForm';
import '@/styles/ways-to-help/sectionDonate.scss';
import { QrDonationImage } from '@/components/shared/QrDonationImage';

export function SectionDonate() {
  return (
    <section className="section-donate" id="donate">
      <h2>Пожертвовать</h2>
      <div className="section-donate__body">
        <div className="section-donate__form-container">
          <DonationForm />
        </div>
        <div className="section-donate__description">
          <p>
            Блок текста о том, на что мы собираем блок текста о том, на что мы собираем блок текста о том, на что мы
            собираем блок текста о том, на что мы собираем блок текста о том, на что мы собираем
          </p>
          <button className="section-donate__hint-button" type="button">
            Почему рекурентные платежи так ценны?
          </button>
          <Link className="section-donate__link" href="reports">
            Реквизиты
          </Link>
          <div className="section-donate__image-container">
            <QrDonationImage />
          </div>
        </div>
      </div>
    </section>
  );
}
