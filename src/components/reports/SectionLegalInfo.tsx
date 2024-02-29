import '@/styles/reports/sectionLegalInfo.scss';
import { fondLegalPapers } from '@/fondLegalPapers';
import { LegalPaperCard } from './LegalPaperCard';

export function SectionLegalInfo() {
  return (
    <section className="section-legal-info">
      <div className="section-legal-info__data legal-data">
        <h2>Подробные данные фонда</h2>

        <div className="legal-data__data data">
          <p className="data__heading">Название организации:</p>
          <p>
            Благотворительный фонд поддержки людей с психическими расстройствами и расстройствами поведения «РАВНОВЕСИЕ»
          </p>
          <p className="data__heading">ИНН</p>
          <p>7804682557</p>
          <p className="data__heading">ОГРН</p>
          <p>1217800069849 от 29 апреля 2021 г.</p>
          <p className="data__heading">КПП</p>
          <p>780401001</p>
          <p className="data__heading">Расчетный счет:</p>
          <p>40703810503500000500</p>
          <p className="data__heading">Адрес:</p>
          <p>195197, г. Санкт-Петербург, пр-кт Маршала Блюхера, д. 11 к. 2 стр. 1, кв. 23</p>
          <p className="data__heading">Директор:</p>
          <p>Ковалева Ксения Вадимовна</p>
          <p className="data__heading">Учредители:</p>
          <p>Ковалева Ксения Вадимовна, Бег Елизавета Сергеевна</p>
        </div>
      </div>
      <div className="section-legal-info__papers legal-papers">
        {fondLegalPapers.data.map((el) => (
          <LegalPaperCard {...el} key={el.description} />
        ))}
      </div>
    </section>
  );
}
