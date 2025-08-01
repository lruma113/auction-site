export const metadata = {
  title: '捕夢網盤子競標網',
  description: '由你主辦，群友來競標'
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}