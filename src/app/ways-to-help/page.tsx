import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { Metadata } from 'next';
import { SectionWaysDonation } from '@/components/ways-to-help/SectionWaysDonation';
import { SectionBecomePartner } from '@/components/ways-to-help/SectionBecomePartner';
import { SectionBecomeVolunteer } from '@/components/ways-to-help/SectionBecomeVolunteer';
import { SectionSpreadTheWord } from '@/components/ways-to-help/SectionSpreadTheWord';
import { SectionProvidePremises } from '@/components/ways-to-help/SectionProvidePremises';
import '@/styles/ways-to-help/ways-to-help.scss';

export const metadata: Metadata = {
  title: 'Помочь фонду | Благотворительный фонд Равновесие',
  description:
    'Как помочь благотворительному фонду Равновесие, список способов помощи и информация о том, как вам могут полезны наши проекты.',
};

export default function WaysToHelpPage() {
  return (
    <div className="ways-to-help-page">
      <Header />
      <div className="container">
        <SectionWaysDonation />
        <SectionBecomePartner />
        <SectionBecomeVolunteer />
        <SectionSpreadTheWord />
        <SectionProvidePremises />
        <Footer />
      </div>
    </div>
  );
}
