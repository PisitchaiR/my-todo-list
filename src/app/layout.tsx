import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';
import '@/styles/globals.css';
import StyledComponentsRegistry from '@/libs/AntdRegistry';
import { ConfigProvider } from 'antd';
import theme from '@/styles/theme/themeConfig';

const kanit = Kanit({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme}>{children}</ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
