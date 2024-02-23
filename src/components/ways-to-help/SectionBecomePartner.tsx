import '@/styles/ways-to-help/sectionBecomePartner.scss';
import { HelpWayCard } from './HelpWayCard';
import { WaysToHelpCarousel } from './WaysToHelpCarousel';

const dummyText600 =
  'блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов текста на 600 символов блок текста на 600 символов блок текста на 600 символов блок текста на 600 символов ';

const dummyText400 =
  'блок текста на 400 символов блок текста на 400 символов блок текста на 400 символов блок текста на 400 символов блок текста на 400 символов блок текста на 400 символов блок текста на 400 символов блок текста на 400 символов блок текста на 400 символов блок текста на 400 символов блок текста на 400 символов блок текста на 400 символов блок текста на 400 символов блок текста на 400 символов блок текста на 400 символов';

const helpWays = [
  {
    id: 1,
    title: 'Маркетинговая акция в пользу фонда',
    description: dummyText600,
    imageLink: '/images/ways-to-help/provide-premises-image.png',
    actionLink: '',
  },
  {
    id: 2,
    title: 'Совместный сбор средств',
    description: dummyText600,
    imageLink: '/images/ways-to-help/provide-premises-image.png',
    actionLink: '',
  },
  {
    id: 3,
    title: 'Благотворительность на маркетплейсах и в интеграторах',
    description: dummyText600,
    imageLink: '/images/ways-to-help/provide-premises-image.png',
    actionLink: '',
  },
];

const helpTypeGroups = [
  {
    title: 'Финансовая помощь',
    description: '',
    helpWays: [{ id: 1 }, { id: 2 }, { id: 3 }],
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
        <h4>(Юридическим лицом)</h4>
      </div>
      <p className="section-become-partner__overall-description">{dummyText400}</p>
      {getHelpTypeGroups().map((helpTypeGroup) => (
        <div className="section-become-partner__help-type-group" key={helpTypeGroup.title}>
          <h3>{helpTypeGroup.title}</h3>
          {helpTypeGroup?.helpWays.length > 0 && (
            <WaysToHelpCarousel
              slides={
                helpTypeGroup.helpWays
                  .map((helpWay) => helpWay && <HelpWayCard {...helpWay} key={helpWay.id} />)
                  .filter((el) => !!el) as Array<JSX.Element>
              }
            />
          )}
        </div>
      ))}
    </section>
  );
}
