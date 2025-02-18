import '../styles.css';  // This imports both Tailwind and your global styles
import Providers from '@components/Providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-us">
      <body className="theme-light">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
