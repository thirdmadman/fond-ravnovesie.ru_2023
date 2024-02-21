import '@/styles/ways-to-help/sectionBecomePartner.scss';
import { HelpWayCard } from './HelpWayCard';

const dummyText =
  'блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов ';

const helpWays = [
  {
    id: 1,
    title: 'Маркетинговая акция в пользу фонда',
    description: dummyText,
    imageLink: '',
    actionLink: '',
  },
];

const helpTypeGroups = [
  {
    title: 'Финансовая помощь',
    description: '',
    helpWays: [{ id: 1 }],
  },
];

const getHelpTypeGroups = () =>
  helpTypeGroups.map((typeGroup) => ({
    ...typeGroup,
    helpWays: typeGroup.helpWays.map((way) => helpWays.find((srcWay) => srcWay.id === way.id)),
  }));

export function SectionBecomePartner() {
  return (
    <section className="section-become-partner" id="become-partner">
      <div className="section-become-partner__heading">
        <h2>Стать партнёром</h2>
        <h4>(ЮРИДИЧЕСКИМ ЛИЦАМ)</h4>
      </div>
      <p className="section-become-partner__overall-description">
        блок текста на 400 символов блок текста на 400 символов блок текста на 400 символов блок текста на 400 символов
        блок текста на 400 символов блок текста на 400 символов блок текста на 400 символов блок текста на 400 символов
        блок текста на 400 символов блок текста на 400 символов блок текста на 400 символов блок текста на 400 символов
        блок текста на 400 символов блок текста на 400 символов блок текста на 400 символов
      </p>
      {getHelpTypeGroups().map((helpTypeGroup) => (
        <div className="section-become-partner__help-type-group" key={helpTypeGroup.title}>
          <h3>{helpTypeGroup.title}</h3>
          {helpTypeGroup?.helpWays.map((helpWay) => helpWay && <HelpWayCard {...helpWay} key={helpWay.id} />)}
        </div>
      ))}
    </section>
  );
}
