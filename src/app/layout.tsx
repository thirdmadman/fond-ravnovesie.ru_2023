import 'normalize.css/normalize.css';
import '../styles/globals.scss';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='./icon.png' sizes='32x32' />
        <link rel='icon' href='./icon-48.png' sizes='48x48' />
        <link rel='icon' href='./icon-180.png' sizes='180x180' />
        <link rel='apple-touch-icon' href='./icon-180.png' />
      </head>
      <body>{children}</body>
    </html>
  );
}
