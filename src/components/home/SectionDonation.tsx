'use client';

import '@/styles/home/sectionDonation.scss';
import { DonationForm } from '../shared/DonationForm';
import { QrDonationImage } from '../shared/QrDonationImage';

export function SectionDonation() {
  return (
    <section className="section-donation">
      <div className="section-donation__qr qr-donation">
        <div className="qr-donation__text">
          <div className="qr-donation__title">Денежное пожертвование</div>
          <div className="qr-donation__subtitle">
            Мы будем рады небольшой, но ежемесячной помощи - это позволит нам чувствовать себя увереннее и надёжнее
            строить планы нашей работы.
          </div>
        </div>
        <div className="qr-donation__image-container">
          <QrDonationImage />
        </div>
      </div>
      <div className="section-donation__form-container">
        <DonationForm />
      </div>
    </section>
  );
}
