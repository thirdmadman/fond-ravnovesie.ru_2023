import { DonationForm } from '../home/DonationForm';
import '@/styles/ways-to-help/sectionDonate.scss';

export function SectionDonate() {
  return (
    <section className="section-donate" id="donate">
      <h2>Пожертвовать</h2>
      <div className="section-donate__body">
        <DonationForm />
        <div className="section-donate__description">
          <p>
            блок текста о том, на что мы собираем блок текста о том, на что мы собираем блок текста о том, на что мы
            собираем блок текста о том, на что мы собираем блок текста о том, на что мы собираем
          </p>
        </div>
      </div>
    </section>
  );
}
