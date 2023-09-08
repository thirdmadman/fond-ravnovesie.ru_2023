import { Metadata } from 'next';
import '../styles/notFoundPage.scss';

export const metadata: Metadata = {
  title: '404 Not Found',
  description: 'Извините, но страницы, на которую вы собирались перейти, не существует :(',
};

export default function NotFundPage() {
  return (
    <div className="not-fund-page">
      <div className="not-fund-page__container">
        <div className="not-fund-page__text">
          <h1>404</h1>
          <h2>Извините, но страницы, на которую вы собирались перейти, не существует :(</h2>
          <p>
            Но не растраивайтесь! Но вы можете узнать о фонде, помочь ему или получить помощь, вернувшись на главную
          </p>
        </div>
        <div className="not-fund-page__buttons">
          <a className="not-fund-page__button_blue" href="/">
            О фонде
          </a>
          <a href="/ways-to-help">Помочь</a>
        </div>
      </div>
    </div>
  );
}
